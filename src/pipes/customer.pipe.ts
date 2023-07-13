import { ArgumentMetadata, BadRequestException, Inject, Scope } from "@nestjs/common";
import { PipeTransform } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { defaultErrorMessage } from "src/constants/messages.constant";
import { head, has, keys, pipe, prop, gt, length } from 'ramda'

const obtainPropChildren = prop('children');
const obtainPropConstraints = prop('constraints');
const hasIsNotEmptyProp = has('isNotEmpty');
let finalMessage = defaultErrorMessage

export class CustomerPipeBody implements PipeTransform {
    async transform(value: any, { metatype, type }: ArgumentMetadata): Promise<any> {
        if (type !== 'body') return value;
        const instanced = plainToInstance(metatype, value);
        const classValidationErrors = await validate(instanced);
        if (classValidationErrors.length === 0) return value
        const validationError = head(classValidationErrors)

        const extracNestedError = pipe(obtainPropChildren, head, obtainPropChildren, head);

        let allfinalMessages = {}
        if (gt(length(obtainPropChildren(validationError)), 0)) {
             allfinalMessages = obtainPropConstraints(extracNestedError(validationError))
        } else { 
            allfinalMessages = obtainPropConstraints(validationError)
        }

        if (hasIsNotEmptyProp(allfinalMessages)) {
            finalMessage = allfinalMessages['isNotEmpty']
        } else {
            finalMessage = allfinalMessages[head(keys(allfinalMessages))];
        }
        throw new BadRequestException(finalMessage);

    }
}
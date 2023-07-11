import { ArgumentMetadata, BadRequestException, Inject, Scope } from "@nestjs/common";
import { PipeTransform } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { defaultErrorMessage } from "src/exception/messages.constant";

export class CustomerPipeBody implements PipeTransform {
    async transform(value: any, { metatype, type }: ArgumentMetadata): Promise<any> {
        if (type === 'body') {
            const classA = plainToInstance(metatype, value);
            const classBValidationErrors = await validate(classA);
            if (classBValidationErrors.length > 0) {
                const firstError = classBValidationErrors[0]
                const allMessages = firstError.constraints
                let finalMessage = defaultErrorMessage
                if (allMessages.hasOwnProperty('isNotEmpty')) {
                    finalMessage = allMessages.isNotEmpty
                } else {
                    finalMessage = allMessages[Object.keys(allMessages)[0]];
                 }
                throw new BadRequestException(finalMessage);
            }
        }
        return value;
    }
}
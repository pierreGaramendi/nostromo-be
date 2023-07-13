import { BadRequestException } from "@nestjs/common";
import { getMessage } from "./customer.message";
import {isNil} from 'ramda'
export const manageError = (err: any) => {
    const { code, message } = err
    let finalMessage = isNil(code) ? message : getMessage(code)
    throw new BadRequestException(finalMessage);
}


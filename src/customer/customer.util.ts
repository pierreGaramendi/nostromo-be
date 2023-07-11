import { BadRequestException } from "@nestjs/common";
import { getMessage } from "./customer.message";

export const manageError = (err: any) => {
    const { code } = err
    throw new BadRequestException(getMessage(code));
}


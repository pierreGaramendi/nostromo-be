import { defaultErrorMessage } from "src/exception/messages.constant";

export const ServerErrors = {
    11000: "El email proporcionado ya existe"
}
export const getMessage = (key: number) => {
    return ServerErrors[key] || defaultErrorMessage;
}
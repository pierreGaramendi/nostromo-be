import { ICustomerAddress } from "src/db/customer.interface";

export const buildUpdateParams = (element: string, address: ICustomerAddress) => {
    const result = {}
    for (const [key, value] of Object.entries(address)) {
        result[`${element}.$.${key}`] = value
    }
    return result
}
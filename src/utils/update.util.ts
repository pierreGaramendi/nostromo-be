import { ICustomerAddress } from "src/modules/customer/dto/customer.dto";

export const buildUpdateParams = (element: string, address: ICustomerAddress) => {
    const result = {}
    for (const [key, value] of Object.entries(address)) {
        result[`${element}.$.${key}`] = value
    }
    return result
}
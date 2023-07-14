import { PassportSerializer } from "@nestjs/passport";
import { ICustomer } from "src/modules/customer/dto/customer.dto";

export class SessionSerializer extends PassportSerializer {
    constructor(
    ) {
        super()
    }

    serializeUser(user: ICustomer, done: (err, user: ICustomer) => void) {
        console.log('serializeUser')
        done(null, user)
    }

    deserializeUser(payload: any, done: (err: any, id?: any) => void): void {
        done(null, payload);
    }
}
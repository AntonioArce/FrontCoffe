import { User } from "../../../../Domain/entities/User";

export interface ResponseApiDelivery{
    success:  boolean;
    message: string;
    data?:   any;
    error?:  any;
    user?: User;
}
import { UserData } from "src/app/security/repositories/UserData";

export interface ProfileData extends UserData {
    firstName?:string,
    lastName?:string
}
import router from "@/router";
import { reactive } from "vue";

/**
 * First Name and Last Name of User
 */
export class User {
    public firstName: string | undefined;
    public lastName: string | undefined;
    public image: string | undefined;
}


const session = reactive( {
    user: null as User | null
});


export function login(firstName: string, lastName: string, image: string): void {
    session.user = {
        firstName,
        lastName,
        image
       
    };
    router.push('/home');
    
}


export function logout() {
    session.user = null;
    router.push('/');

}

export default session;

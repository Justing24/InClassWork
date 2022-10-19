import router from "@/router";
import { reactive } from "vue";

/**
 * Takes in first and last name to make a user object
 */
export class User {
    public firstName: string | undefined;
    public lastName: string | undefined;
    public image: string | undefined;
}


const session = reactive( {
    user: null as User | null
});

/**
 * Makes a user property for session
 * @param firstName 
 * @param lastName 
 * @param image
 */
export function login(firstName: string, lastName: string, image: string): void {
    session.user = {
        firstName,
        lastName,
        image
       
    };
    
}

/**
 * makes user property null and redirects to a view (temp back to home page)
 */
export function logout() {
    session.user = null;
    // this is good for now
    // login('Guest', 'User', 'src/assets/images.jpg');
    //TODO make a view AND route for being logged out
    // router.push({name:"has-been-logged-out-view"})
}

export default session;

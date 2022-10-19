
import { useNavigate } from "react-router-dom";
import { useState, createContext } from "react";

import * as users from "./user.ts"
import useMessages from "./messages.ts";
import { api } from "./myFetch.ts";
import { decodeJWT, loadScript } from "./utils.ts";

declare const google: any;

export default function useSession() {

    const navigate = useNavigate();
    const messages = useMessages();
    const [user, setUser] = useState<users.User | undefined>();
    const [destinationUrl, setDestinationUrl] = useState<string | null>(null);
    
    return {
        user,
        destinationUrl,
        messages,
        async GoogleLogin() {
            await loadScript('https://accounts.google.com/gsi/client', 'google-signin');
            const auth_client = google.accounts.oauth2.initTokenClient({
                client_id: <string>process.env.REACT_APP_GOOGLE_CLIENT_ID,
                scope: 'email profile',
                callback: async x =>{
                    const user = await fetch('https://www.googleapis.com/oauth2/v3/userinfo?alt=json',{
                        headers: {
                            Authorization: `Bearer ${x.access_token}`,
                        },
                    }).then(x => x.json());
                    console.log(user);
                    setUser( {
                        id: user.sub,
                        email: user.email,
                        firstName: user.given_name,
                        lastName: user.family_name,
                        pic: user.picture,
                        handle: user.email,
                        password: '',
                    })

                    const calendar = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events',{
                        headers: {
                            Authorization: `Bearer ${x.access_token}`,
                        },
                    }).then(x => x.json());
                    console.log(calendar);
                }
              });
              auth_client.requestAccessToken();
        },

        async Login(email: string, password: string) {

        
            try {
                
                const user = await this.api("users/login", { email, password });
        
                if(user) {
        
                    messages.add({
                        type: "success",
                        message: `Welcome back ${user.firstName}!`,
                    });
        
                    setUser( user );
                    navigate(this.destinationUrl  ?? '/wall');
                }
        
            } catch (error: any) {
                messages.add({
                    type: "danger",
                    message: error.message,
                });
                console.table(messages.notifications)
            }
        },
        
        Logout() {
            setUser(undefined);
            navigate('/login');
        },

        async api(url: string, data?: any, method?: 'GET' | 'POST' | 'PUT' | 'DELETE', headers: any = {}) {

            if(this.user?.token) {
                headers.Authorization = `Bearer ${this.user.token}`;
            }

            try {
                const response = await api(url, data, method, headers);
                if(response.errors?.length) {
                    throw { message: response.errors.join(', ') };
                }
                return await response.data;                
            } catch (error: any) {
                messages.add({
                    type: "danger",
                    message: error.message,
                });
                //console.table(messages.notifications)
            }

        }
    };
}

export interface ApiResult {
    data: any;
    errors?: string[];
    success: boolean;
}

export const SessionContext = createContext({});
    import { useContext } from "react";
    import { Link } from "react-router-dom";
    import { SessionContext } from "../models/session.ts";

export default function LoginBadge() {

    const session = useContext(SessionContext);

    return (!session.user ?
    <div class="buttons" >
        <button class="button is-primary" onClick={session.GoogleLogin}>
            <strong>Sign up</strong>
        </button>
        <Link class="button is-light" to="/login">
            Log in
        </Link>
    </div> :
    <div class="buttons" v-else>
        <div class="avatar">
            <img src={session.user.pic} />
            <div>
                <strong>{ session.user.firstName } { session.user.lastName }</strong> <br />
                <i>{ session.user.email }</i>
            </div>
        </div>
        <a class="button is-primary" onClick={()=> session.Logout()}>
            <strong>Log out</strong>
        </a>
    </div>
    )
}


    import { useState, useContext } from 'react';
    import { SessionContext } from '../models/session.ts';

export default function Login() {
    const session = useContext(SessionContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function login(e)
    {
        session.Login(email, password);
        e.preventDefault();
    }

    return (
    <div class="section">

        <div class="columns">
            <div class="column is-half is-offset-one-quarter">


        <div class="card">
            <form class="card-content" onSubmit={login}>
                <h1 class="title">Login Page</h1>
                    <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="email" placeholder="Email" value={email} onChange={e=> setEmail(e.target.value)} />
                        <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                        </span>
                    </p>
                    </div>
                    <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" type="password" placeholder="Password"  value={password} onChange={e=> setPassword(e.target.value)} />
                        <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                        </span>
                    </p>
                    </div>
                    <div class="field">
                    <p class="control">
                        <button class="button is-success">
                        Login
                        </button>
                        &nbsp;
                        <button class="button is-success" onClick={session.GoogleLogin}>
                            Google Login
                        </button>

                    </p>
                    </div>
            </form>
        </div>
            </div>
    </div>
    </div>
    )
}
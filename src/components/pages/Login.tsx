// @flow
import * as React from 'react';

type Props = {

};
export const Login = (props: Props) => {
    return (
        <div>
            <h3>Log in</h3>
            <p><input type={"email"} placeholder={'Email'}/></p>
            <p><input type={"password"} placeholder={'Password'}/></p>
                <button>Log in</button>
        </div>
    );
};
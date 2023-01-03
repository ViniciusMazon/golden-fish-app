import { User } from "../../types"

interface Props {
    username: string;
    email: string;
}

export const AccountSettings = ({ username, email }: Props) => {
    return (
        <div>
            <h1>Account</h1>

            <div className="input-group">
                <input type="file" />
            </div>

            <div className="input-group">
                <label>Username</label>
                <input type="text" value={username}/>
            </div>

            <div className="input-group">
                <label>Password</label>
                <input type="password" />
            </div>

            <div className="input-group">
                <label>Email</label>
                <input type="text" value={email}/>
            </div>
        </div>
    )
}
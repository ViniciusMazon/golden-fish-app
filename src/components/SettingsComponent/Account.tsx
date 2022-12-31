export const AccountSettings = () => {
    return (
        <div>
            <h1>Account</h1>

            <div className="input-group">
                <input type="file" />
            </div>

            <div className="input-group">
                <label>Username</label>
                <input type="text" />
            </div>

            <div className="input-group">
                <label>Password</label>
                <input type="text" />
            </div>

            <div className="input-group">
                <label>Email</label>
                <input type="text" />
            </div>
        </div>
    )
}
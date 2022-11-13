

export const RegisterForm = () => {
    return (
        
        <form>
            <label>
                Username
                <input tape="text" name="name"/>
            </label>
            <label>
                Email
                <input type="email" name="email"/>
            </label>
            <label>
                Password
                <input type="password" name="password"/>
            </label>
            <button>Register</button>
        </form>
        
    )
}
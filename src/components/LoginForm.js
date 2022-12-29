import formStyles from "./LoginForm.module.css";

export default function LoginForm() {
    return (
        <form className={formStyles.form}>
            <label className={formStyles.label} for="name">Name</label>
            <input className={formStyles.input} type="text" id="name" name="name"></input>
            <label className={formStyles.label} for="password">Password</label>
            <input className={formStyles.input} type="password" id="password" name="password"></input>
            {/* <input className={formStyles.submit} type="submit" value="Submit"></input> */}
            <button className={formStyles.submit} type="submit" value="Submit">Submit</button>
        </form>
    )
}
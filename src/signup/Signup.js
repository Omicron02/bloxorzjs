import styles from './signup.module.css'
import fb from './fb.png'
import tw from './tw.png'
import gp from './gp.png'
import {useState} from "react"
import axios from "axios"

function Signup(){

    const [btnpos, btnposStyle] = useState(styles.btnpos1)
    const [login, loginStyle] = useState(styles.login1)
    const [register, registerStyle] = useState(styles.register1)

    const [title, setTitle] = useState("Letters, numbers and '_' of length 3-15 characters")

    const [usernameTaken, setUsernameTaken] = useState("")

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const registerSubmit = (event) =>
    {
        event.preventDefault()
        const registerData = {username: username, password: password}
        axios.post("http://localhost:4000/api/readDB", registerData).then( res => 
        {
            if (!res.data)
            axios.post("http://localhost:4000/api/writeDB", registerData)
            else
            setUsernameTaken("Username has been taken!")
        })
        
    }

    const loginSubmit = (event) =>
    {
        event.preventDefault()
    }
    const loginSection = ()=>{
        btnposStyle(styles.btnpos1)
        loginStyle(styles.login1)
        registerStyle(styles.register1)
    }
    const registerSection =()=>{
        btnposStyle(styles.btnpos2)
        loginStyle(styles.login2)
        registerStyle(styles.register2)
    }
    return(
    <>
        <div className={styles.hero}>
            <div className={styles.formbox}>
                <div className={styles.buttonbox}>
                    <div className={styles.btn+" "+btnpos}></div>
                    <button type="button" className={styles.togglebtn+" "+styles.togglebtnbg} onClick={loginSection}>Login</button>
                    <button type="button" className={styles.togglebtn+" "+styles.togglebtnbg} onClick={registerSection}>Register</button>
                </div>
                <div className={styles.socialicons}>
                    <img src={fb} alt = "fb"/>
                    <img src={tw} alt = "tw"/>
                    <img src={gp} alt = "gp"/>
                </div> 
                <form id="login" className={login+" "+styles.inputgroup} onSubmit = {loginSubmit}>
                    <input type="text" 
                        id="username" 
                        onChange = {event => setUsername(event.target.value)}
                        pattern="[a-zA-Z0-9_]{3,15}" 
                        title="Letters, numbers and '_' of length 3-15 characters" 
                        className={styles.inputfield} 
                        placeholder="User Id" 
                        required 
                    />
                    <input type="text" 
                        id="password" 
                        onChange = {event => setPassword(event.target.value)} 
                        pattern="[a-zA-Z0-9_]{3,15}" 
                        title="Letters, numbers and '_' of length 3-15 characters" 
                        className={styles.inputfield} 
                        placeholder="Enter Password" 
                        required 
                    />

                    <input type="checkbox" className={styles.checkbox} /><span className = {styles.span}>Remember Password</span>
                    <button type="submit" className={styles.submitbtn}>Login</button>
                </form>

                <form id="register" className={register+" "+styles.inputgroup} onSubmit = {registerSubmit}>
                    <input type="text" 
                        id="regusername" 
                        onChange = {event => {setUsername(event.target.value)
                                              setUsernameTaken("")}}
                        pattern="[a-zA-Z0-9_]{3,15}" 
                        title={title} 
                        className={styles.inputfield} 
                        placeholder="User Id" 
                        required
                    />
                    <input type="text" 
                        id="regpassword" 
                        onChange = {event => setPassword(event.target.value)} 
                        pattern="[a-zA-Z0-9_]{3,15}" title="Letters, numbers and '_' of length 3-15 characters" 
                        className={styles.inputfield} 
                        placeholder="Enter Password" 
                        required 
                    />
                    <input type="checkbox" className={styles.checkbox} /><span className = {styles.span}>Remember Password</span>
                    <button type="submit" className={styles.submitbtn}>Register</button>
                    <br/><br/>
                    <p className = {styles.regError}>{usernameTaken}</p>
                </form>
            {/* <p className = {styles.inputgroup}>hello world</p> */}
            </div>
           
        </div>
            
        </>
    )
}
export default Signup;
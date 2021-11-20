import styles from './signup.module.css'
import fb from './fb.png'
import tw from './tw.png'
import gp from './gp.png'
import {useState} from "react"

function Signup(){

    const [btnpos, btnposStyle]= useState(styles.btnpos1)
    const [login, loginStyle]= useState(styles.login1)
    const [register, registerStyle]= useState(styles.register1)
    
    var loginSection = ()=>{
        btnposStyle(styles.btnpos1)
        loginStyle(styles.login1)
        registerStyle(styles.register1)
    }
    var registerSection =()=>{
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
                    <button type="button" className={styles.togglebtn} onClick={loginSection}>Login</button>
                    <button type="button" className={styles.togglebtn} onClick={registerSection}>Register</button>
                </div>
                <div className={styles.socialicons}>
                    <img src={fb} alt = "fb"/>
                    <img src={tw} alt = "tw"/>
                    <img src={gp} alt = "gp"/>
                </div>
                <form id="login" className={login+" "+styles.inputgroup}>
                    <input type="text" id="username" pattern="[a-zA-Z0-9_]{3,15}" title="Letters, numbers and '_' of length 3-15 characters" className={styles.inputfield} placeholder="User Id" required />
                    <input type="text" id="password" pattern="[a-zA-Z0-9_]{3,15}" title="Letters, numbers and '_' of length 3-15 characters" className={styles.inputfield} placeholder="Enter Password" required />
                    <input type="checkbox" className={styles.checkbox} /><span className = {styles.span}>Remember Password</span>
                    <button type="submit" className={styles.submitbtn}>Login</button>
                </form>
                <form id="register" className={register+" "+styles.inputgroup}>
                    <input type="text" pattern="[a-zA-Z0-9_]{3,15}" title="Letters, numbers and '_' of length 3-15 characters" id="reguser" className={styles.inputfield} placeholder="User Id" required />
                    <input type="text" id="regpassword" pattern="[a-zA-Z0-9_]{3,15}" title="Letters, numbers and '_' of length 3-15 characters" className={styles.inputfield} placeholder="Enter Password" required />
                    <input type="checkbox" className={styles.checkbox} /><span className = {styles.span}>I agree to the terms and conditions</span>
                    <button type="submit" className={styles.submitbtn}>Register</button>
                </form>
            </div>
        </div>
            
        </>
    )
}
export default Signup;
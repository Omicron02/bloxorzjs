import signStyles from './Signup.module.css'
import fb from '../../Images/Signup/fb.png'
import tw from '../../Images/Signup/tw.png'
import gp from '../../Images/Signup/gp.png'
import {useState} from "react"
import axios from "axios"
import {Routes, Navigate} from "react-router-dom"
function Signup({setUser}){

    const [btnpos, btnposStyle] = useState(signStyles.btnpos1)
    const [login, loginStyle] = useState(signStyles.login1)
    const [register, registerStyle] = useState(signStyles.register1)

    const [title, setTitle] = useState("Letters, numbers and '_' of length 3-15 characters")

    const [usernameTaken, setUsernameTaken] = useState("")

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [invalidCred , setInvalidCred] = useState("")
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
        registerClick()
        
    }

    const loginSubmit = (event) =>
    {
        event.preventDefault()
        const loginData = {username: username, password: password}
        axios.post("http://localhost:4000/api/readDB", loginData).then(res =>
        {
            if(!res.data)
            setInvalidCred("User doesn't exist")
            else if(!(loginData.username===res.data.name && loginData.password===res.data.password))
            {
                setInvalidCred("Invalid password")
            }
            else
            {
                setUser(loginData.username)
                loginClick()
                return <Navigate to = "/game"/>
                
            }
            
        })
        
    }
    const loginSection = ()=>{
        btnposStyle(signStyles.btnpos1)
        loginStyle(signStyles.login1)
        registerStyle(signStyles.register1)
    }
    const registerSection =()=>{
        btnposStyle(signStyles.btnpos2)
        loginStyle(signStyles.login2)
        registerStyle(signStyles.register2)
    }
    function registerClick(){
        
        alert('User Registered Successfully')
    }
    function loginClick(){
        
        alert('User login successful')
    }
    return(
    <>
        <div className={signStyles.hero}>
            <div className={signStyles.formbox}>
                <div className={signStyles.buttonbox}>
                    <div className={signStyles.btn+" "+btnpos}></div>
                    <button type="button" className={signStyles.togglebtn+" "+signStyles.togglebtnbg} onClick={loginSection}>Login</button>
                    <button type="button" className={signStyles.togglebtn+" "+signStyles.togglebtnbg} onClick={registerSection}>Register</button>
                </div>
                <div className={signStyles.socialicons}>
                    <img src={fb} alt = "fb"/>
                    <img src={tw} alt = "tw"/>
                    <img src={gp} alt = "gp"/>
                </div> 
                <form id="login" className={login+" "+signStyles.inputgroup} onSubmit = {loginSubmit}>
                    <input type="text" 
                        id="username" 
                        onChange = {event => {setUsername(event.target.value);setInvalidCred("")}}
                        pattern="[a-zA-Z0-9_]{3,15}" 
                        title="Letters, numbers and '_' of length 3-15 characters" 
                        className={signStyles.inputfield} 
                        placeholder="User Id" 
                        required 
                    />
                    <input type="password" 
                        id="password" 
                        onChange = {event => {setPassword(event.target.value); setInvalidCred("")}} 
                        pattern="[a-zA-Z0-9_]{3,15}" 
                        title="Letters, numbers and '_' of length 3-15 characters" 
                        className={signStyles.inputfield} 
                        placeholder="Enter Password" 
                        required 
                    />

                    <input type="checkbox" className={signStyles.checkbox} /><span className = {signStyles.span}>Remember Password</span>
                    <button type="submit" className={signStyles.submitbtn}>Login</button>
                    <br/><br/>
                    <p className = {signStyles.regError}>{invalidCred}</p>
                </form>

                <form id="register" className={register+" "+signStyles.inputgroup} onSubmit ={registerSubmit}>
                    <input type="text" 
                        id="regusername" 
                        onChange = {event => {setUsername(event.target.value)
                                              setUsernameTaken("")}}
                        pattern="[a-zA-Z0-9_]{3,15}" 
                        title={title} 
                        className={signStyles.inputfield} 
                        placeholder="User Id" 
                        required
                    />
                    <input type="password" 
                        id="regpassword" 
                        onChange = {event => setPassword(event.target.value)} 
                        pattern="[a-zA-Z0-9_]{3,15}" title="Letters, numbers and '_' of length 3-15 characters" 
                        className={signStyles.inputfield} 
                        placeholder="Enter Password" 
                        required 
                    />
                    <input type="checkbox" className={signStyles.checkbox} /><span className = {signStyles.span}>Remember Password</span>
                    <button type="submit" className={signStyles.submitbtn}>Register</button>
                    <br/><br/>
                    <p className = {signStyles.regError}>{usernameTaken}</p>
                </form>
            {/* <p className = {signStyles.inputgroup}>hello world</p> */}
            </div>
           
        </div>
            
        </>
    )
}
export default Signup;
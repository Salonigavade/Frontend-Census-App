import React, { useState } from 'react';
import '../Container/Login.css';

function Login() {

    const [userId, setUserId] = useState('');
    const [emailId, setEmailId] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [reEnterPassword, setReEnterPassword] = useState('');
    const [role, setRole] = useState('');
    const [user, setUser] = useState({
        userId:'',
        emailId:'',
        mobile:'',
        password:'',
        role:''
    });


const onClickRegister = ()=>{
    document.getElementById('login-container').classList.add("right-panel-active");

}
const onClickLogin = ()=>{
    document.getElementById('login-container').classList.remove("right-panel-active");

}

function onChangeUserId(e){
    const newUserId={userId:e.target.value};
    setUserId(newUserId);
}
function onChangeEmailId(e){
    const newEmailId={emailId:e.target.value};
    setEmailId(newEmailId);
}
function onChangeMobileNo(e){
    const newMobileNo={mobile:e.target.value}
    setMobile(newMobileNo);
}
function onChangePassword(e){
    const newPassword={password:e.target.value}
    setPassword(newPassword);
}
function onChangeReEnterPassword(e){
    const newReEnterPassword={reEnterPassword:e.target.value}
    setReEnterPassword(newReEnterPassword)
}
function OnRoleChange(e){
    const newRole={role:e.target.value};
    setRole(newRole);
}
function OnRoleChange1(e){
    const newRole={role:e.target.value};
    setRole(newRole);
}

function onClickRegisterBtn(e){
    e.preventDefault();
    setUser({
    });

}

return (
        <>
            <div className="container login-container" id="login-container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Register</h1>
                        <input type="text" placeholder="Adhar Card No" name="userId" value={userId}
                         onChange={onChangeUserId}

                         />
                        <input type="email" placeholder="Email" name="emailId" value={emailId}
                             onChange={onChangeEmailId}
                        />
                        <input type="tel" placeholder="Mobile Number" name="mobile" value={mobile}
                             onChange={onChangeMobileNo}
                        />
                        <input type="password" placeholder="Password" name="password" value={password}
                             onChange={onChangePassword}
                        />
                        <input type="password" placeholder="Re-Enter Password" name="reEnterPassword" value={reEnterPassword}
                             onChange={onChangeReEnterPassword}
                        />
                        <div className="radioGroup d-flex">
                            <div className="radiobtn mr-5 ">
                                <label>
                                <input
                                    type="radio"
                                    value="Admin"
                                    checked={role === "Admin"}
                                    onChange={OnRoleChange}
                                />
                                Admin
                                </label>
                            </div>

                            <div className="radiobtn ml-3 ">
                                <label>
                                <input
                                    type="radio"
                                    value="User"
                                    checked={role === "User"}
                                    onChange={OnRoleChange1}
                                />
                                User
                                </label>
                            </div>
                   </div> 
                        <button onClick={onClickRegisterBtn}>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn" onClick={()=>onClickLogin()}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" onClick={()=>onClickRegister()}>Sign Up</button>
                        </div>
                    </div>
                </div>
                </div>


        </>
    );
}

export default Login;
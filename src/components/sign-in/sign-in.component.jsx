import React from 'react';
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    handleChange=(e)=>{
        const {name,value} = e.target;
        e.preventDefault();
        this.setState({[name]:value});
    };

    handleSubmit=(e)=>{
        e.preventDefault();

        this.setState({email:'',password:''});
    };

    render(){
    return(
        <div className="sign-in">
            <h2>I already have an acoount</h2>
            <span>Signin with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput type="email" name="email" label="email" value={this.state.email} onChange={this.handleChange} required />
                <FormInput type="password" name="password" label="password" value={this.state.password} onChange={this.handleChange} required />
                <div className="buttons">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                </div>                
            </form>        
        </div>
    );
};
}

export default SignIn;
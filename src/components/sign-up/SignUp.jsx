import React, { Component } from 'react';
import CustomButton from '../custom-button/CustomButton'
import FormInput from '../form-input/FormInput';

import { auth, createUserProfileDocument } from '../../firebase/fireBaseUtils';

import './signUp.scss';



class SignUp extends Component {
    state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }



    handleSubmit = async (e) => {

        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        console.log(this)
        if (password !== confirmPassword) {
            alert("passwords don't match")
            return;
        }

        try {

            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (err) {
            console.log(err)
        }

    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value })

    }



    render() {

        const { displayName, email, password, confirmPassword } = this.state;
        return (

            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>

                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        handleChange={this.handleChange}
                        label='name'
                        required
                    />

                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        handleChange={this.handleChange}
                        label='email'
                        required
                    />

                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />

                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label='confirmPassword'
                        required
                    />


                    <CustomButton type='submit'>SIGN UP</CustomButton>

                </form>
            </div>
        )
    }
}



export default SignUp;
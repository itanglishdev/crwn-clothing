import { useState, useEffect } from "react"
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils"

const defaultFormFields = {

    displayName: '',
    email: '',
    password:'',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password,confirmPassword} = formFields

    console.log(formFields)

    const handleSubmit = async  (event) => {
        event.preventDefault()
        if(password !== confirmPassword) {
        alert('password incorrect')
        return;}

        try {
            const response = await createAuthUserWithEmailAndPassword(email,password)
            console.log(response)
        } catch (error) {
            console.log('user creation hs error', error);
        }
      
    }

    
    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields,[name]: value})
    }

  return (
    <div>
        <h1>Sign up with your email and password</h1>
        <form onSubmit={handleSubmit} >
            <label>Display name</label>
            <input 
                type='text' 
                required onChange={handleChange} 
                name='displayName' 
                placeholder="Name"
                value={displayName}/>

            <label>Email</label>
            <input 
                type='email' 
                required onChange={handleChange} 
                name='email'
                value={email} />
            
            <label>Password</label>
            <input 
                type='password' 
                required onChange={handleChange} 
                name='password'
                value={password}
             />

            <label>Confirm password</label>
                <input 
                type='password' 
                required onChange={handleChange} 
                name='confirmPassword'
                value={confirmPassword} />

            <button 
            type='submit'
            // onClick={handleSubmit}
            >Sign in</button>
        </form>

    </div>
  )
}

export default SignUpForm

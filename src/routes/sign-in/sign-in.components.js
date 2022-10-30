import { signInWithGooglePopup ,createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils"

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
        // console.log(response);
        createUserDocumentFromAuth(user)
}

  return (
    <div>
        <div>SignIn page</div>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  )
}

export default SignIn
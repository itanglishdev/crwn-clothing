import { signInWithGooglePopup ,  createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component"


const SignIn = () => {

  // useEffect( () => async ()=>{
     
  //   const response = await getRedirectResult(auth);
  //   console.log(response) 
  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user)
  //   }
  // },[])
  

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
        // console.log(response);
        const userDocRef = await createUserDocumentFromAuth(user)
}

    // const logGoogleRedirectUser = async () => {
    //   const {user} = await signInWithGoogleRedirect()
    //   console.log({user});
      // const userDocRef = await createUserDocumentFromAuth(user)
// }

  return (
    <div>
        <div>SignIn page</div>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
        <SignUpForm/>
    </div>
  )
}

export default SignIn
import React from 'react'
import { useRef } from 'react'
import "./SignUpScreen.css"
import { auth } from "../firebase"

function SignUpScreen() {

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const register = (event) => {
    event.preventDefault()
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
    }).catch((error) => {
      alert(error.message)
    })
  }

  const signIn = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {

    }).catch((error) => {
      alert(error.message)
    })
  }

  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email"></input>
        <input ref={passwordRef} placeholder="password" type="password"></input>
        <button type="submit" onClick={signIn}>Sign In</button>
        <h4>
          <span className="signupScreen__gray">New to Netflix? </span>
          <span className="signupScreen__link" onClick={register}>Sign Up now.</span>
        </h4>
      </form>
    </div>
  )
}

export default SignUpScreen

import React, { useState, useRef } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { checkAndValidateData } from "../utils/validateData";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/userSlice";

const Login = () => {
  const [signedIn, setSignedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const toggleSignIn = () => {
    setSignedIn(!signedIn);
  };
  const handleButtonClick = () => {
    const errorMsg = checkAndValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(errorMsg);
    if (errorMessage) return;
    if (!signedIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User created:", user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(setUser({ uid, email, displayName, photoURL }));
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div className="relative">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/29b665f6-0a62-4745-b9c2-f617fb7eadc6/web/IN-en-20251208-TRIFECTA-perspective_c78aea89-8f13-4e2c-ba7a-f9b40f53bf8c_large.jpg"
        alt="backgroundImage"
        className="absolute inset-0 -z-10 h-screen w-screen"
      />
      <Header />
      <div className="flex justify-center items-center h-screen">
        <form
          className="flex flex-col bg-black bg-opacity-60 w-1/3 gap-2 p-8"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="text-white">{signedIn ? "Sign In" : "Sign Up"}</h1>
          {!signedIn && (
            <input
              type="text"
              ref={name}
              placeholder="Enter Name"
              className="m-2 px-2 py-2 rounded-md"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email or Mobile Number"
            className="m-2 px-2 py-2 rounded-md"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="m-2 px-2 py-2 rounded-md"
          />
          <p className="text-red-700 font-bold">{errorMessage}</p>
          <button
            className="bg-red-700 text-white font-bold m-2 p-2 rounded-md"
            onClick={handleButtonClick}
          >
            {signedIn ? "Sign In" : "Sign Up"}
          </button>
          <h5 className="text-white text-center">OR</h5>
          <button className="rounded-md bg-gray-800 text-white font-bold p-2 m-2 ">
            use a sign-in code
          </button>
          <Link to="/forgot-password" className="text-white underline mx-auto">
            Forgot Password
          </Link>
          <h2 className="text-white cursor-pointer" onClick={toggleSignIn}>
            New to Netflix?{signedIn ? "SignUp now." : "SignIn now."}
          </h2>
        </form>
      </div>
    </div>
  );
};

export default Login;

import { useState, useEffect } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
  updateProfile,
  signOut
} from "firebase/auth";
import initAuth from "../Firebase/firebase.init";

initAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(()=>setIsLoading(false));
  };

  const signUpNewUser = (name,email,password) => {
    console.log(name,email,password);
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      user.displayName = `${name}`;
      setUser(user);
      setError("");
      verifyEmailId();
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage);
    })
    .finally(()=>setIsLoading(false));
  }

  const signInUser = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      setUser(user);
      setError("");
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage);
    })
    .finally(()=>setIsLoading(false));
  }

  const verifyEmailId = () => {
    sendEmailVerification(auth.currentUser)
    .then(result => {
      console.log(result);
    })
  }

  const logOut = () => {
    setIsLoading(true)
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(()=>setIsLoading(false));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
      }
      setIsLoading(false);
    });
  }, []);

  return {
    user,
    error,
    isLoading,
    signInWithGoogle,
    signInUser,
    signUpNewUser,
    logOut,
  };
};

export default useFirebase;

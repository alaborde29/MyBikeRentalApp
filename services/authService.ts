import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, UserCredential } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const signUp = async (email: string, password: string) => {
  then((userCredential) => {
    // Signed up 
    console.log("in authService")
    const user = userCredential.user;
    console.log(userCredential)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
  });
};

export const signIn = async (email: string, password: string): Promise<UserCredential> => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const logout = async (): Promise<void> => {
  await signOut(auth);
};
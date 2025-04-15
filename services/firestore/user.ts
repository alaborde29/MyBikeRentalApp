import { db } from "@/firebaseConfig";
import {doc, setDoc, getDoc, updateDoc } from 'firebase/firestore'

export type UserType = {
  email: string,
  firstName: string,
  lastName: string,
  username: string,
}

export const createUser = async (uid: string, data: UserType) => {
  await setDoc(doc(db, 'users', uid), data);
};

export const getUser = async (uid: string): Promise<UserType | null> => {
  const userRef = doc(db, "users", uid);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    return userSnap.data() as UserType;
  } else {
    return null;
  }
};
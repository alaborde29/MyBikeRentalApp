import { useEffect, useState } from 'react';
import { auth, onAuthStateChanged } from '../firebaseConfig';

const useAuth = () => {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, setUser);
  //   return () => unsubscribe();
  // }, []);

  return user;
};

export default useAuth;

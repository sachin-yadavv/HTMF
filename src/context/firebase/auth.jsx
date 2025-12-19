// src/firebase/auth.js
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";

import { auth, db } from "./config";

/* ================= SIGN UP ================= */
export const signUpUser = async ({ name, collegeName, email, password }) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  const user = userCredential.user;

  await setDoc(doc(db, "users1", user.uid), {
    uid: user.uid,
    name,
    collegeName,
    email,
    role: "member",
    createdAt: serverTimestamp(),
    mobileNumber: "",
    githubId: "",
    experienceLevel: "",
    skills: [],
  });

  return user;
};

/* ================= LOGIN ================= */
export const loginUser = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  const user = userCredential.user;

  const profileSnap = await getDoc(doc(db, "users1", user.uid));

  if (!profileSnap.exists()) {
    throw new Error("User profile not found in database.");
  }

  return { uid: user.uid, ...profileSnap.data() };
};

/* ================= LOGOUT ================= */
export const logoutUser = async () => {
  await signOut(auth);
};

export { auth, db };

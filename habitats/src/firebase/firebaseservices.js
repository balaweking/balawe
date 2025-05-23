import { collection, doc, getDocs, addDoc, deleteDoc, updateDoc, query, where } from "firebase/firestore";
import { db } from "./config";

// Services pour les propriétés
export const getProperties = async () => {
  const snapshot = await getDocs(collection(db, "properties"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addProperty = async (data) => {
  return await addDoc(collection(db, "properties"), data);
};

export const deleteProperty = async (id) => {
  return await deleteDoc(doc(db, "properties", id));
};

export const updateProperty = async (id, data) => {
  return await updateDoc(doc(db, "properties", id), data);
};

// Services pour les utilisateurs
export const getUserById = async (id) => {
  const snapshot = await getDocs(query(collection(db, "users"), where("uid", "==", id)));
  return snapshot.docs[0]?.data();
};

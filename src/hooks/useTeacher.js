import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore/lite";
import { message } from "antd";

export default () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    getTeachers();
  }, []);
  
  async function getTeachers() {
    setLoading(true)
    const col = collection(db, "teachers");
    const snapShot = await getDocs(col);
    setData(snapShot.docs.map((doc) =>({...doc.data(), id:doc.id})));
    setLoading(false)
  }
  async function addTeacher(teacher){
    setLoading(true)
    try{
        const docRef = await addDoc(collection(db , "teachers") , teacher )
        setData([...data, {...teacher ,  id:docRef.id}])
        setOpen(false)
    }catch(e){
        console.error("Error adding document" , e);
    }
    setLoading(false)
  }

  async function deleteTeacher(id){
    try {
        setLoading(true)
        await deleteDoc(doc(db, 'teachers'  , id))
        setData(data.filter((d) => d.id != id))
        message.success("deleted")
    } catch (error) {
        console.log(error);
    }
    setLoading(false)
  }


  return {
    loading,
    data,
    addTeacher,
    deleteTeacher,
    open, 
    setOpen
  }
};

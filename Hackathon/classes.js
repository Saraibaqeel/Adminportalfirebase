import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBIDfpMf7a6hHD2MZPUfGaNwzT7ouRWv0",
  authDomain: "hackathon-cb079.firebaseapp.com",
  projectId: "hackathon-cb079",
  storageBucket: "hackathon-cb079.appspot.com",
  messagingSenderId: "911016422507",
  appId: "1:911016422507:web:9ed02379ddd5bc6931952e",
  measurementId: "G-MHK362CJS2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth=getAuth();

import { collection, deleteField , deleteDoc, addDoc, query,getFirestore, where, getDocs,doc, updateDoc,setDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"; 


const q = query(collection(db, "Classes"));

// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   let classes=document.getElementById("classes").innerHTML+=`
//   <div class="classes-div">
//   <p>${doc.data().schedule}</p>
//   <p>${doc.data().TeacherName}</p>
//   <p>${doc.data().sectionName}</p>
//   <p>${doc.data().courseName}</p>
//   <p>${doc.data().batchNumber}</p>
  
//   <button id="edit" class="button">Edit</button>
//   <button onclick="deleteTodo('${doc.id}')">Delete</button>
//   </div>
//   `

  
  
//   console.log(doc.id, " => ", doc.data());
//   let edit=document.getElementById("edit")
//   edit.addEventListener("click", async()=>{
 
//     await setDoc(doc(db, "cities", doc.id), {
//         name: "Los Angeles",
//         state: "CA",
//         country: "USA"
//       });
    
 
//   })

// });
let classes=document.getElementById("classes")

const unsubscribe = onSnapshot(q, (querySnapshot) => {
    classes.innerHTML=""
    document.getElementById("modal1").innerHTML=""
  const cities = [];
  querySnapshot.forEach((doc) => {
      cities.push(doc.data().name);
   
     classes.innerHTML+=`
  <div class="classes-div">
  <p>Schedule:${doc.data().schedule}</p>
  <p>TeacherName:${doc.data().TeacherName}</p>
  <p>SectionName:${doc.data().sectionName}</p>
  <p>CourseName:${doc.data().courseName}</p>
  <p>BatchNumber:${doc.data().batchNumber}</p>
  
  <button id="edit" data-bs-toggle="modal" data-bs-target="#exampleModal"  class="button">Edit</button>
   <button class="button" onclick="deleteTodo('${doc.id}')">Delete</button>
   </div>
  `
  document.getElementById("modal1").innerHTML+=`<button data-bs-dismiss="modal"  class="button"  style="margin-top:5%; margin-left:30%;" onclick="editTodo('${doc.id}','${doc.data().TeacherName}','${doc.data().sectionName}','${doc.data().schedule}','${doc.data().sectionName}','${doc.data().courseName}','${doc.data().batchNumber}')">update</button>`
  });
  
});

const editTodo = async (id, oldValue) => {
    let teacher = document.getElementById("teacher")
    let sched = document.getElementById("schedule")
    let sec = document.getElementById("section")
    let course=document.getElementById("course")
    let batch=document.getElementById("batch")
    
    const updateRef = doc(db, "Classes", id);
    await updateDoc(updateRef, {
      TeacherName: teacher.value,
      schedule:sched.value,
      sectionName:sec.value,
      courseName:course.value,
      batchNumber:batch.value,



    
    });
  };
  window.editTodo = editTodo;

const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "Classes", id));
  };
  window.deleteTodo = deleteTodo;
  
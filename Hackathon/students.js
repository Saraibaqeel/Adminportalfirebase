import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { collection,deleteDoc,doc,updateDoc, addDoc,getFirestore, query, where, getDocs,onSnapshot } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"; 


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
const q = query(collection(db, "Students"));
const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   document.getElementById("Students").innerHTML+=`
//   <div  class="classes-div">
//   <p>${doc.data().name}</p>
//   <p>${doc.data().fatherName}</p>
//   <p>${doc.data().rollnumber}</p>
//   <p>${doc.data().contact}</p>
//   <p>${doc.data().cnic}</p>
//   <p>${doc.data().course}</p>
//   <button id="edit" class="button">Edit</button>
  
//   </div>`
//   console.log(doc.id, " => ", doc.data());
// });
let Students=document.getElementById("Students")

const unsubscribe = onSnapshot(q, (querySnapshot) => {
    Students.innerHTML=""
    document.getElementById("modal1").innerHTML=""
  const cities = [];
  querySnapshot.forEach((doc) => {
      cities.push(doc.data().name);
   
     Students.innerHTML+=`
  <div class="classes-div">
  <p>Name:${doc.data().name}</p>
    <p>FatherName:${doc.data().fatherName}</p>
     <p>RollNumber:${doc.data().rollnumber}</p>
      <p>Contact:${doc.data().contact}</p>
     <p>Cnic:${doc.data().cnic}</p>
     <p>Course:${doc.data().course}</p>
  
     <button id="edit" data-bs-toggle="modal" data-bs-target="#exampleModal"  class="button">Edit</button>
   <button class="button" onclick="deleteTodo('${doc.id}')">Delete</button>
   <button class="button" onclick="assign(${doc.id})" >Assign Class</button>
   </div>
  `
document.getElementById("modal1").innerHTML+=`<button data-bs-dismiss="modal"  class="button"  style="margin-top:5%; margin-left:30%;" onclick="editTodo('${doc.id}','${doc.data().name}','${doc.data().fatherName}','${doc.data().rollnumber}','${doc.data().contact}','${doc.data().cnic}','${doc.data().course}')">update</button>`
  
  });

});
const editTodo = async (id, oldValue) => {
    let teacher = document.getElementById("teacher")
    let sched = document.getElementById("schedule")
    let sec = document.getElementById("section")
    let course=document.getElementById("course")
    let batch=document.getElementById("batch")
    let cnic=document.getElementById("cnic")
    const updateRef = doc(db, "Students", id);
    await updateDoc(updateRef, {
      name: teacher.value,
      fatherName:sched.value,
      rollnumber:sec.value,
      contact:course.value,
      cnic:cnic.value,
      course:batch.value,




    
    });
  };
  window.editTodo = editTodo;

const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "Students", id));
  };
  window.deleteTodo = deleteTodo;
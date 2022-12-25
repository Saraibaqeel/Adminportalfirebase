
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
const auth=getAuth();
import { collection, addDoc,getFirestore, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"; 
let logout = document.getElementById("logout-btn")
      logout.addEventListener("click", () => {

        
          window.location.replace = "index.html"

        



      })

// // Add a new document with a generated id.
// let time1=document.getElementById("class-time1")
// let time2=document.getElementById("class-time2")
// let schedule=document.getElementById("Schedule-Time")
// let TeacherName=document.getElementById("Teacher-Name")
// let sectionName=document.getElementById("Section-Name")
// let courseName=document.getElementById("Course-Name")
// let batchNumber=document.getElementById("Batch-Number")
// const db = getFirestore(app);
// let addclass=document.getElementById("Add-Class")
// addclass.addEventListener("click",async function(){
//  let time=time1.value+"-"+time2.value 
// const docRef = await addDoc(collection(db, "Classes"), {
 
//   Timimg: time,
//   schedule: schedule.value,
//   TeacherName:TeacherName.value,
//   sectionName:sectionName.value,
//   courseName:courseName.value,
//   batchNumber:batchNumber.value,




// });

// if(docRef.id){

// if(time=="" || schedule.value=="" || TeacherName.value=="" || sectionName=="" || courseName=="" || batchNumber==""){
//     Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Something went wrong!',
        
//       })
      
    
// }
// else{
//     Swal.fire(
//         'Success!',
//         'You clicked the button!',
//         'success'
//       )
//        time=""
//    schedule.value=""
//  TeacherName.value=""
//  sectionName.value=""
//  courseName.value=""
//   batchNumber.value=""

      
// }


// }

// console.log("Document written with ID: ", docRef.id);
// })
// let logout = document.getElementById("logout-btn")
//       logout.addEventListener("click", () => {

//         signOut(auth).then(() => {
//           window.location.href = "signin.html"

//         }).catch((error) => {
//           // An error happened.
//         });



//       })


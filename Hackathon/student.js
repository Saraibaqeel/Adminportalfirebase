import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { collection, addDoc,getFirestore, query, where, getDocs } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"; 
import { getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL, } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";
    import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
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




let Name=document.getElementById("Name")
let Fathername=document.getElementById("Fathername")
let Rollnumber=document.getElementById("Roll-Number")
let Contact=document.getElementById("Roll-Number")
let CNIC=document.getElementById("CNIC")
let CourseName=document.getElementById("Course-Name")

let addstudent=document.getElementById("Add-student")
addstudent.addEventListener("click", async()=>{
    

    const docRef = await addDoc(collection(db, "Students"), {
        name: Name.value,
        fatherName: Fathername.value,
        rollnumber: Rollnumber.value,
        contact: Contact.value,
        cnic:CNIC.value,
        course:CourseName.value,
        
      });
      if(docRef.id){
        if(Name.value=="" || Fathername.value=="" || Rollnumber.value=="" || Contact=="" || CNIC=="" || CourseName==""){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                
              })
              


        }
        else{
            Swal.fire(
                'Success!',
                'You clicked the button!',
                'success'
              )
              Name.value="" 
               Fathername.value=""
                 Rollnumber.value="" 
                Contact.value=""
                 CNIC.value="" 
                 CourseName.value=""
              

        }
      
    }
      
      console.log("Document written with ID: ", docRef.id);
      
      

})


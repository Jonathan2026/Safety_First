const firebaseConfig = {
  apiKey: "AIzaSyCIUqF1aH50w4HKGU_1hHPckm7NbWnq3gc",
  authDomain: "demoday-eab45.firebaseapp.com",
  projectId: "demoday-eab45",
  storageBucket: "demoday-eab45.appspot.com",
  messagingSenderId: "275425812457",
  appId: "1:275425812457:web:3b06ad3ee1f00491327578",
  measurementId: "G-T9ENK0KFMC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
console.log(db);

const usersCollection = db.collection("blog_info");
const querySnapshot = usersCollection.get()
.then(function(querySnapshot) {
  for (let i = 0; i < querySnapshot.docs.length; i++) {
    const doc = querySnapshot.docs[i];
    console.log("Document data: ", doc.data());
  }
})
.catch(function(error) {
  console.error("Error getting documents: ", error);
});

submit.addEventListener("click", getInfo)

function getInfo(e){
  let submit =  document.getElementById("submit");
  let titleField = document.getElementById("title-input");
  let contentField = document.getElementById("writing-input");
  e.preventDefault()
	let title = titleField.value;
	let content = contentField.value;


	let blog = {
		Title: title,
		Content: content,
	};

    // Send data
    db.collection("blog_info").add(blog)
    .then(function(data){
        console.log("Data Sent.")

  })
  .catch(function(err){
    console.log("this is an Error:", err)
  })
  let outputDIV = document.getElementById("output")
  let outputTitle = document.createElement("h2")
  let outputContent = document.createElement("p")
  let space = document.createElement("br")
}
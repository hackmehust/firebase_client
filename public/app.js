// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCb9i8LxNxSI9hH1haeuXGpgyzanUXzCuw",
  authDomain: "mock3-6a61e.firebaseapp.com",
  projectId: "mock3-6a61e",
  storageBucket: "mock3-6a61e.appspot.com",
  messagingSenderId: "173961836994",
  appId: "1:173961836994:web:8723dec60e5ec1bbfd3e5b",
  measurementId: "G-EV7GJJ76Y7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging()

// subscribe
function subscribe(){
      Notification.requestPermission().then(permission=>{
        console.log(permission)
        if(permission == "granted"){
            messaging.getToken({vapidKey:"BLRgNj1sjwU0Q3n2kiP-GFOBxjPKd2M6BfPiyXphACpI73DUjvuVoX8O8M2br1YCeioJsDNgHkBWo1XyY5zrGyQ"}).then(currentToken=>{
                console.log(currentToken)
                document.getElementById('showToken').innerHTML = currentToken

            })
        }
      }).catch(e=>{
          console.log(e)
      })
}

messaging.onMessage(res=>{
    console.log(res)
})

// send Notofication
function sendNotification(){
    // Get data
    const token = document.getElementById('usertoken').value 
    const title = document.getElementById('title').value
    const msg = document.getElementById('msg').value

    let body = {
        to: token,
        notification:{
            title: title,
            body: msg,
            icon:'icon.png',
            click_action:"https://vrijraj.xyz/"
        }
    }
    console.log(body)

    const options = {
        method: "POST",
        headers: new Headers({
          Authorization:"key=AAAAKIDu-cI:APA91bG5IoUxwGpo8BKQgipoYeBczX36UMU8nj1yQxzbOcRUGXLmzItOPlI6Yn_p4j7WeRl72Tv-wMOjx7uGP13yQly1trokq-lb5eUS3SOdU5DD6gE8-IbFWo5vnz2WPl5HsJksKzOC",
          "Content-Type":"application/json"
        }),
        body:JSON.stringify(body)
    }

    fetch("https://fcm.googleapis.com/fcm/send", options).then(res=>res.json()).then(data=>{
          console.log(data)
    }).catch(e=>console.log(e))

}
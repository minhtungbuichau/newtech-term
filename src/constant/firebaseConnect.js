import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBHZDfN6kssEFNlECVKtYdt8XF_A2v2ZJI",
    authDomain: "newtech-term.firebaseapp.com",
    databaseURL: "https://newtech-term.firebaseio.com",
    projectId: "newtech-term",
    storageBucket: "",
    messagingSenderId: "527842595925"
  };
  export const firebaseConnect = firebase.initializeApp(config);

//   var data = firebase.database().ref('<link>');
//      data.once('value').then(function(snapshot){ //once get value, then execute function ....
//         console.log(snapshot.val());
//     })
//       data.push =>auto add idid
//        data.child('').remove()
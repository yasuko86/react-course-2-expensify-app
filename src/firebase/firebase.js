// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default }; 

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// })

// // child_added
// database.ref('expenses').on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// })

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });

// //     console.log(expenses);
// //   });

// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];
// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });

// //   console.log(expenses);
// // });

// const expenses =  [{
//   description: 'Gum',
//   note: '',
//   amount: 195,
//   createdAt: 0
// }, {
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 1000
// }, {
//   description: 'Credit Card',
//   note: '',
//   amount: 4500,
//   createdAt: -1000
// }]

// database.ref('expenses').push(expenses[0]);
// // database.ref('expenses').push(expenses[1]);
// // database.ref('expenses').push(expenses[2]);

// // database.ref('notes').push({
// //   title: 'Course Topics',
// //   body: 'React Native, Angular, Python'
// // });

// // const onDataChange = database.ref().on('value', (snapshot) => {
// //   const val = snapshot.val();
// //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// // });

// // setTimeout(() => {
// //   database.ref('job/title').set('Manager');
// // }, 3000)

// // setTimeout(() => {
// //   database.ref().off('value', onValueChange);
// // }, 7000);


// // database.ref('location/city')
// //   .once('value')
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch(e => {
// //     console.log('Error fetcing data', e)
// //   });

// // database.ref().set({
// //   name: 'Yasuko Okamoto',
// //   age: 31,
// //   stressLevel: 6,
// //   'job': {
// //     title: 'Software developer',
// //     company: 'Google'
// //   },
// //   location: {
// //     city: "Brisbane",
// //     country: "Australia"
// //   }
// // }).then(() => {
// //   console.log('Data is saved');
// // }).catch((e) => {
// //   console.log('This failed.', e)
// // });

// // database.ref().update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Seatle'
// // });

// // database.ref()
// //   .remove()
// //   .then(() => {
// //     console.log('Data is removed')
// //   }).catch(e => {
// //     console.log("Did not remove data", e)
// //   });

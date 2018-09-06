import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBxfypW_4BMkMlkaGEw1xZrXlgd3vxSQJ4",
    authDomain: "catch-of-the-day-tomek-chyc.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-tomek-chyc.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
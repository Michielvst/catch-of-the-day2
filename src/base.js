import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDb-jAfNstLLn_K3iZWgVU_9p2cBMw2Tao",
    authDomain: "catch-of-the-day2-michielvst.firebaseapp.com",
    databaseURL: "https://catch-of-the-day2-michielvst.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore"

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyAlh-SDoCNBNMV7IE5lwgONu1aLrkX-1rc",
    authDomain: "reanimation-14fad.firebaseapp.com",
    projectId: "reanimation-14fad",
    storageBucket: "reanimation-14fad.appspot.com",
    messagingSenderId: "707343373848",
    appId: "1:707343373848:web:26adbf3be38d720497156d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  // Get a list of cities from your databasenode
  async function getCities(db) {
      const citiesCol = collection(db, 'rean');
      const citySnapshot = await getDocs(citiesCol);
      const cityList = citySnapshot.docs.map(doc => doc.data());
      return cityList;
    }

    console.log(getCities(db));
    
  // getDocs(collection(db, 'rean')).then(response => console.log(response)).catch((e) => {throw Error})

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React,{useState} from 'react';
import './App.css';
import Header from './Header1';
 import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
// use of hooks 
// initail value of usesatate array will display in the brackets
const[contcts,setContacts] = useState([]);
  return ( 
    <div>
    <Header/>
   <AddContact/>
  {/* adding contacts as property */}
<ContactList contacts = {contcts}/>
    </div>
  );
}

export default App; 

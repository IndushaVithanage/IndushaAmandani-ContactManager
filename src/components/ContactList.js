import React from "react";
import ContactCard from "./ContactCard";
//props -->properties
const ContactList = (props) =>{
   
const rendercontactList = props.contacts.map((contcts) => {
    return(
        <ContactCard 
         contact={contcts}></ContactCard>
    
    );
 
  
    })
return <div className="ui celled list">{rendercontactList}</div>
   

}
export default ContactList;
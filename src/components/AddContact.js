import React from "react";

//class component
class AddContact extends React.Component{
state = {
    name: ""
    email : "",
}

render(){
    return(
<div className="ui main">
    <h2>Add Contact</h2>
    <form className="ui form">
        <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter your name"/>
        </div>

        <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email"/>
        </div>
<div>
    <button className="ui button blue">Add</button>
</div>
    </form>
</div>
    );
}


}

export default AddContact;
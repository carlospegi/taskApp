import React, { useState } from 'react'


let red = 0
let green = 200
let blue = 150


const loggedStyle = {
    backgroundColor:`rgb(${red},${green},${blue})`,
    color: 'white',
    fontWeight: 'bold'
}; 

const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
}
const LoginButton = ({ loginAction, propstyle }) => {
    return <button style={propstyle} onClick={loginAction}>login</button>
}
const LogoutButton = ({ logoutAction, propstyle }) => {
    return <button style={propstyle} onClick={logoutAction}>logOut</button>
};




const OptionalRender = () => {




    const [access, setAccess] = useState(false);
    const [nMesagge, setNMesagge] = useState(0);

    let addMessage = () => {
        setNMesagge(nMesagge + 1)
    }

    const loginAction = () => {
        setAccess(true)
    }
    const logoutAction = () => {
        setAccess(false)
    }



    let optionalButton


    if (access) {
        optionalButton = <LogoutButton propstyle={unloggedStyle} logoutAction={logoutAction}></LogoutButton>
    } else {
        optionalButton = <LoginButton propstyle={loggedStyle} loginAction={loginAction}></LoginButton>

    }

    return (
        <div>
            {optionalButton}

{access ? (
    <div>
    {

nMesagge > 0 ? <p>You have {nMesagge}  new message

    {nMesagge > 1 ? 's' : null} </p>
    : <p>There are not new messages</p>
}
<button onClick={addMessage}>{nMesagge === 0 ? 'Add your first message' : 'Add new message'}</button>
    </div>
) : null}

           
        </div>
    )
}

export default OptionalRender

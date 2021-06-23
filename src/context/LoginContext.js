import {createContext, useEffect, useState} from "react";


export const LoginContext = createContext();

const LoginContextProvider = (props) => {
    const [loginState, setLoginState] = useState(
        {userToken: '', loginStatus: false}
    );

    const handleLogIn = (userToken) => {
        localStorage.setItem('token', 'Bearer '+ userToken)
        setLoginState({userToken, loginStatus: true})
    }

    const handleLogOut = () => {
        setLoginState({userToken: '', logStatus: false})
    }

    useEffect(() => {
        console.log(localStorage.getItem('token'))
        if (localStorage.getItem('token') != null && localStorage.getItem('token') != '') {
            console.log('eta aayo')
            setLoginState({userToken: localStorage.getItem('token'), loginStatus: true})
        } else {
            console.log('uta gayo')
            setLoginState({userToken: '', loginStatus: false})

        }
    },[])

    return (
        <LoginContext.Provider value={{loginState, handleLogIn, handleLogOut}}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginContextProvider;

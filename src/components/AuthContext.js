import React, {createContext, useState, useEffect} from 'react'

const AuthContext = createContext([{}, () => {}]);

function AuthProvider(props) {
    const [state, setState] = useState({});

    useEffect(() => {
        // if(localStorage.getItem('state')) {
        if(sessionStorage.getItem('state')) {
            // setState(JSON.parse(localStorage.getItem('state')));
            setState(JSON.parse(sessionStorage.getItem('state')));
        }
    }, []);

    useEffect(() => {
        // localStorage.setItem('state', JSON.stringify(state))
        sessionStorage.setItem('state', JSON.stringify(state))
    }, [state]);


    return (
        <AuthContext.Provider value={[state, setState]}>
            {props.children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };

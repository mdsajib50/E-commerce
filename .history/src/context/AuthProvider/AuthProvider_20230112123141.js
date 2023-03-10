import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import React, {createContext} from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const createUser= (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password)=>{
        return sign
    }
    const authInfo = {
        auth,
        createUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
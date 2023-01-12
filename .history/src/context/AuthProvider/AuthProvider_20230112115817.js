import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import React, {createContext} from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const createUser= (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        cre
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import { Spin } from 'antd';
import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase/config';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribed = auth.onAuthStateChanged((user) => {
            if (user) {
                const { displayName, email, photoURL } = user;
                setUser({ displayName, email, photoURL });
                history.push('/');
                setIsLoading(false);
            } else {
                history.push('/login');
            }
        });

        return () => {
            unsubscribed();
        };
    }, [history]);

    return <AuthContext.Provider value={user}>{isLoading ? <Spin /> : children}</AuthContext.Provider>;
}

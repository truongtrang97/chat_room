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
        const unsubscribed = auth.onAuthStateChanged((data) => {
            if (data) {
                const { displayName, email, uid, photoURL } = data;
                setUser({ displayName, email, uid, photoURL });
                history.push('/');
            } else {
                history.push('/login');
            }
            setIsLoading(false);
        });

        return () => {
            unsubscribed();
        };
    }, [history]);

    return <AuthContext.Provider value={{ user }}>{isLoading ? <Spin /> : children}</AuthContext.Provider>;
}

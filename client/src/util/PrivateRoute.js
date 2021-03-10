import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useRecoilState, useRecoilValue } from 'recoil'
import { userInfo } from '../recoil/atom'
import jwtDecode from 'jwt-decode'
export const PrivateRoute = ({ component: Component, ...rest }) => {
    const [user, setUser] = useRecoilState(userInfo)
    // const [user, setUser] = useState({})

    useEffect(() => {
        if (window.localStorage.getItem('llc_token')) {
            let decoded = jwtDecode(localStorage.llc_token)
            const currentTime = Date.now() / 1000;
            if (decoded.exp < currentTime) {
                window.localStorage.removeItem('llc_token')
                window.location.href = '/login';
            } else {
                axios.get('api/users/current', { headers: { "Authorization": window.localStorage.getItem('llc_token') } })
                    .then(response => {
                        setUser({
                            isAuthenticated: true,
                            user: response.data
                        })
                    })
                    .catch(err => console.log(err))
            }
        }

    }, [])

    return (
        <Route
            {...rest}
            render={props => {
                if (window.localStorage.getItem('llc_token')) {
                    console.log(user)
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};

export default PrivateRoute;
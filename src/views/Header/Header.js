import React from 'react';
import NavbarLoggedOut from './NavbarLoggedOut';
import NavbarLoggedIn from './NavbarLoggedIn';

export default function Header() {

    const user = localStorage.getItem('user')

    function IsLoggedIn() {
        console.log(user);

        if (user != null) {
            return <NavbarLoggedIn />;
        }
        return <NavbarLoggedOut />
    }

    return(
        <IsLoggedIn/>

    );
}
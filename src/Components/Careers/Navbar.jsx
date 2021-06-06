import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
    padding: 2%;
    text-align: center;
    border-bottom: 1px solid #eee;

    & .link {
        text-decoration: none;
    }
`;

const Navbar = () => {
    return (
        <>
            <NavbarContainer>
                <Link to='/careers' className="link">
                    <img src="/Careers/Navbar/CRED_Navbar_logo.png" alt="Cred_logo" />
                </Link>
            </NavbarContainer>
        </>
    )
}

export default Navbar

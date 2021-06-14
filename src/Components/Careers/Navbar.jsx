import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
    padding: 2%;
    text-align: center;
    border-bottom: 1px solid #eee;

    & .link {
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;

        & .admin {
            color: #3a44a1;
            font-weight: bolder;
            font-size: 2em;
            padding: 0 1%;
        }
    }
`;

const Navbar = () => {
    return (
        <>
            <NavbarContainer>
                <Link to='/careers' className="link">
                    <img src="/Careers/Navbar/CRED_Navbar_logo.png" alt="Cred_logo" />
                </Link>

                {/* ADMIN */}
                {/* <Link to='/login' className="link">
                    <span className="admin">ADMIN</span><img src="/Careers/Navbar/CRED_Navbar_logo.png" alt="Cred_logo" />
                </Link> */}
            </NavbarContainer>
        </>
    )
}

export default Navbar

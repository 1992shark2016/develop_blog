import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, NavbarToggler, Collapse, Nav } from 'reactstrap';

const AppNavbar = () => {
    return (
        <Fragment>
            <Navbar color="dark" dark expand="lg" className="sticky-top">
                <Container>
                    <Link to="/" className="text-white text-decoration-none">
                        Side Project's Blog(사이드 프로젝트 블로그?)
                    </Link>
                    <NavbarToggler />
                    <Collapse isOpen={true} navbar>
                         <Nav className="ml-auto d-flex justify-content-around" navbar>
                            {false ? (
                                <h1 className="text-white">authLink</h1>
                             ) : ( 
                                <h1 className="text-white">guestLink</h1>
                             )};
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </Fragment>
    )
};

export default AppNavbar;
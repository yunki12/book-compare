import React from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";

const NavigationBar: React.FC = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
{/*                <Navbar.Brand href="/">도서 정보 사이트</Navbar.Brand>*/}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">홈</Nav.Link>
                        <Nav.Link href="#">베스트셀러</Nav.Link>
                        <Nav.Link href="#">신간</Nav.Link>
                        <Nav.Link href="#">AI 도서 추천</Nav.Link>
                        <Nav.Link href="#">카테고리</Nav.Link>
                    </Nav>
                  {/*  <Form className="d-flex">
                        <FormControl type="search" placeholder="검색" className="me-2" />
                        <Button variant="outline-success">검색</Button>
                    </Form>*/}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
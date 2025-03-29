/**
 /* © 2025 YoonGiBum, Inc. All rights reserved.
 /* Build Date: 2025.03.19
 /* Author: 'YoonGiBum'
 **/

import React, {useEffect, useState} from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {useMediaQuery} from "react-responsive";
import {fetchBooks} from "../api/BookApi";

interface Book {
    title: string;
    price: number;
    reviews: number;
    rating: string;
    image: string;
}

const FirstBookCard = ({book}) => (
    <Card className="mb-4">
        <Card.Body>
            <img src={book.image} alt={book.title} className="img-fluid me-3" style={{width: "80px", height: "auto"}}/>
            <Card.Title>도서명: {book.title}</Card.Title>
            <Card.Text>가격: {book.price.toLocaleString()}원</Card.Text>
            <Card.Text>리뷰 수: {book.reviews.toLocaleString()}</Card.Text>
            <Card.Text>별점: {book.rating}</Card.Text>
        </Card.Body>
    </Card>
);

const BookCard = ({book}) => (
    <Card className="mb-3">
        <Card.Body>
            <img src={book.image} alt={book.title} className="img-fluid me-3" style={{width: "100px", height: "auto"}}/>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>가격: {book.price.toLocaleString()}원</Card.Text>
            <Card.Text>리뷰 수: {book.reviews.toLocaleString()}</Card.Text>
            <Card.Text>별점: {book.rating}</Card.Text>
        </Card.Body>
    </Card>
);

// BookSection.js
const BookSection = ({title, books}) => {
    const isMobile = useMediaQuery({maxWidth: 576}); // Bootstrap sm 이하(모바일) 감지

    return (
        <Col md={4} sm={6} xs={12}>
            <h2 className="text-center">{title}</h2>
            <Row className="d-flex">
                {/* 왼쪽에 순위 UI 배치 (모바일에서는 숨김) */}
                {title === "예스24" && !isMobile && (
                    <Col xs={2} className="d-flex flex-column justify-content-around align-items-center">
                        {books.slice(0, 5).map((_, index) => (
                            <div key={index} className="fw-bold fs-1 text-danger">
                                {index + 1}
                            </div>
                        ))}
                    </Col>
                )}

                {/* 오른쪽에 도서 카드 배치 */}
                <Col xs={title === "예스24" && !isMobile ? 10 : 12} className="d-flex flex-column">
                    {books.length > 0 && <FirstBookCard book={books[0]}/>}
                    {books.slice(1, 5).map((book, index) => (
                        <BookCard key={index + 1} book={book}/>
                    ))}
                </Col>
            </Row>
        </Col>
    );
};

function BookList() {
    const [books, setBooks] = useState([]);
    const [query] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchBooks(query);
                setBooks(result);
            } catch (error) {
                console.error("Error fetching books: ", error);
            }
        };
        fetchData()
            .then()
            .catch((error) => console.error("Error in fetchData: ", error));
    }, [query]);

    const sections = [
        {title: "예스24", data: books[0]},
        {title: "영풍문고", data: books[2]},
        {title: "알라딘", data: books[3]},
    ];

    return (
        <Container className="mt-5">
            {/*<h1 className="text-center">베스트 도서 목록</h1>*/}
            <Row>
                {sections.map(
                    (section, index) =>
                        Array.isArray(section.data) && (
                            <BookSection
                                key={index}
                                title={section.title}
                                books={section.data}
                            />
                        ),
                )}
            </Row>
        </Container>
    );
};

export default BookList;

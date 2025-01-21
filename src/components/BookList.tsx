import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Book {
    title: string;
    price: number;
    reviews: number;
    rating: string;
}

interface BookListProps {
    books: Book[];
}

// BookCard.js
const BookCard = ({ book }) => (
    <Card className="mb-4">
        <Card.Body>
            <Card.Title>도서명: {book.title}</Card.Title>
            <Card.Text>가격: {book.price.toLocaleString()}원</Card.Text>
            <Card.Text>리뷰 수: {book.reviews.toLocaleString()}</Card.Text>
            <Card.Text>별점: {book.rating}</Card.Text>
        </Card.Body>
    </Card>
);

// BookSection.js
const BookSection = ({ title, books }) => (
    <Col md={4} sm={6} xs={12}>
        <h2 className="text-center">{title}</h2>
        {books.map((book, index) => (
            <BookCard key={index} book={book} />
        ))}
    </Col>
);

const BookList = ({ books }) => {
    const sections = [
        { title: '예스24', data: books[0] },
        { title: '영풍문고', data: books[2] },
        { title: '알라딘', data: books[3] },
    ];

    return (
        <Container className="mt-5">
            <h1 className="text-center">베스트 도서 목록</h1>
            <Row>
                {sections.map(
                    (section, index) =>
                        Array.isArray(section.data) && (
                            <BookSection
                                key={index}
                                title={section.title}
                                books={section.data}
                            />
                        )
                )}
            </Row>
        </Container>
    );
};

export default BookList;
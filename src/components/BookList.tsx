import React from 'react';

interface Book {
    title: string;
    price: number;
    reviews: number;
    rating: string;
}

interface BookListProps {
    books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
    return (
        <div className="container mt-5">
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
            <h1 className="text-center">도서 목록</h1>
            <div className="row">
                {books.map((book, index) => (
                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">도서명: {book.title}</h5>
                                <p className="card-text">가격: {book.price.toLocaleString()}원</p>
                                <p className="card-text">리뷰 수: {book.reviews}</p>
                                <p className="card-text rating">별점: {book.rating}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookList;
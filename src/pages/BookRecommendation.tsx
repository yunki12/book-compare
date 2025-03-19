/**
 /* © 2025 YoonGiBum, Inc. All rights reserved.
 /* Build Date: 2025.03.19
 /* Author: 'YoonGiBum'
 **/

import React from "react";
import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// 추천 도서 타입 정의
interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  coverImage?: string;
}

function BookRecommendation() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // 모의 API 호출
  const fetchRecommendedBooks = async (): Promise<Book[]> => {
    // 실제로는 API 호출로 대체
    return [
      {
        id: 1,
        title: "책 제목 1",
        author: "작가 1",
        description: "책 설명 1",
      },
      {
        id: 2,
        title: "책 제목 2",
        author: "작가 2",
        description: "책 설명 2",
      },
    ];
  };

  useEffect(() => {
    fetchRecommendedBooks()
      .then((data: Book[]) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error: Error) => {
        console.error('Error fetching books:', error);
        setLoading(false);
      });
  }, []);

  return (
    <Container className="my-4">
      <h1>준비중 ..</h1>
    </Container>
  );
}

export default BookRecommendation;
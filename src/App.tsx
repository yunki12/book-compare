import React from 'react';
import './styles/css/App.css';
import BookList from './components/BookList';

const App: React.FC = () => {
  const books = [
    { title: '책 이름 1', price: 20000, reviews: 120, rating: '★★★★☆' },
    { title: '책 이름 2', price: 15000, reviews: 80, rating: '★★★★★' },
    // 더 많은 책 데이터 추가 가능
  ];

  return (
      <div>
        <BookList books={books} />
      </div>
  );
};

export default App;

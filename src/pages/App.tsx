import React from 'react';
import '../styles/css/App.css';
import BookList from '../components/BookList';
import {fetchBooks} from "../api/BookApi";
import { useEffect, useState } from 'react';

const App = () => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {

        console.log('query : ' + query)
        console.log('fetchBooks')

        const fetchData = async () => {
            try {
                const result = await fetchBooks(query);
                setBooks(result);
            } catch (error) {
                console.error("Error fetching books: ", error);
            }
        };
        fetchData();
    }, [query]);

    /*    const books = [
            {title: '책 이름 1', price: 20000, reviews: 120, rating: '★★★★☆'},
            {title: '책 이름 2', price: 15000, reviews: 80, rating: '★★★★★'},
            {title: '책 이름 3', price: 15000, reviews: 80, rating: '★★★★★'},
            {title: '책 이름 4', price: 15000, reviews: 80, rating: '★★★★★'},
            {title: '책 이름 5', price: 15000, reviews: 80, rating: '★★★★★'},
            {title: '책 이름 6', price: 15000, reviews: 80, rating: '★★★★★'},
            {title: '책 이름 7', price: 15000, reviews: 80, rating: '★★★★★'},
            {title: '책 이름 8', price: 15000, reviews: 80, rating: '★★★★★'},
            {title: '책 이름 9', price: 15000, reviews: 80, rating: '★★★★★'},
            {title: '책 이름 10', price: 15000, reviews: 80, rating: '★★★★★'},
        ];*/

    //const books = await fetchBooks('');

    console.log('메인 페이지')

    return (
        <div>
            <BookList books={books}/>
        </div>
    );
}

export default App;

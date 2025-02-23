import React from 'react';
import '../styles/css/App.css';
import BookList from '../components/BookList';
import {fetchBooks} from "../api/BookApi";
import { useEffect, useState } from 'react';
import NavigationBar from "../components/NavigationBar";

const App = () => {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState('');

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
    return (
        <div>
            <NavigationBar />
            <BookList books={books}/>
        </div>
    );
}

export default App;

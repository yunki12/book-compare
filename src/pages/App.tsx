/**
 /* © 2025 YoonGiBum, Inc. All rights reserved.
 /* Build Date: 2025.03.19
 /* Author: 'YoonGiBum'
 **/

import React from 'react';
import '../styles/css/App.css';
import {fetchBooks} from "../api/BookApi";
import { useEffect, useState } from 'react';
import NavigationBar from "../components/NavigationBar";
import Router from '../components/AppRoutes'; // Router 컴포넌트 임포트

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
            <Router />
        </div>
    );
}

export default App;

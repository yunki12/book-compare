/**
 /* © 2025 YoonGiBum, Inc. All rights reserved.
 /* Build Date: 2025.03.19
 /* Author: 'YoonGiBum'
 **/

import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import BookRecommendation from '../pages/BookRecommendation';
import BookList from "./BookList";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/books/" element={<BookList/>}/>
                <Route path="/recommend/book" element={<BookRecommendation/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
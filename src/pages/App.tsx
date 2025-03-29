/**
 /* © 2025 YoonGiBum, Inc. All rights reserved.
 /* Build Date: 2025.03.19
 /* Author: 'YoonGiBum'
 **/

import React from 'react';
import '../styles/css/App.css';
import NavigationBar from "../components/NavigationBar";
import Router from '../components/AppRoutes'; // Router 컴포넌트 임포트

const App = () => {
    return (
        <div>
            <NavigationBar />
            <Router />
        </div>
    );
}

export default App;

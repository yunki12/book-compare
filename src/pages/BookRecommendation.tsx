/**
 /* © 2025 YoonGiBum, Inc. All rights reserved.
 /* Build Date: 2025.03.19
 /* Author: 'YoonGiBum'
 **/

import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, ProgressBar} from 'react-bootstrap';
import {fetchRecommend} from "../api/RecommendApi";

function BookRecommendation() {
    const [data, setData] = useState('');
    const [query] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true); // Show progress bar when fetch starts
            try {
                const result = await fetchRecommend(query);
                setData(result);
            } catch (error) {
                console.error("Error fetching recommend: ", error);
            } finally {
                setIsLoading(false); // Hide progress bar when fetch completes
            }
        };
        fetchData().catch((error) => console.error("Error in fetchData: ", error));
    }, [query]);

    return (
        <Container className="my-4">
            {isLoading ? (
                <ProgressBar
                    animated
                    now={100}
                    label="Loading recommendations..."
                    className="mb-3"
                />
            ) : (
                <div style={{ whiteSpace: 'pre-wrap' }}>{data}</div>
            )}
        </Container>
    );
}

export default BookRecommendation;
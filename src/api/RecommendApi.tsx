/**
 /* © 2025 YoonGiBum, Inc. All rights reserved.
 /* Build Date: 2025.03.19
 /* Author: 'YoonGiBum'
 **/

import axios from "axios";

export const fetchRecommend = async (query) => {
    try {
        const response = await axios.get(process.env.RECOMMEND_API_URL,
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "text/html; charset=utf-8",
                },
            },
        );
        if (response) {
            return response.data;
        } else {
            return null;
        }
    } catch (error) {
        console.error("API Error: ", error);
        throw error;
    }
};
import axios from 'axios';

// 도서 정보를 가져오는 API 함수
export const fetchBooks = async (query) => {
    try {
        const response = await axios.get('http://localhost:8000/books/', {
            withCredentials: true,
            params: {query},
        });


        /*        const data = [
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

        console.log('data' + response.data)
        console.log(Object.keys(response.data).length)
        console.log('data - ' + JSON.stringify(response.data))

        return response.data;
    } catch (error) {
        console.error("API Error: ", error);
        throw error;
    }
};
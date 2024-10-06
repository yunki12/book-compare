import axios from 'axios';

interface Book {
    title: string;
    price: number;
    reviews: number;
    rating: string;
}

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
        console.log('data - ' + JSON.stringify(response.data.data))

        // "data" 키로부터 배열을 꺼내서 Book 형태로 변환
        const books: Book[] = response.data.map((item: string[]) => ({
            title: item[0],
            price: Number(item[1].replace(/,/g, "")),  // 가격에서 콤마 제거 후 숫자로 변환
            reviews: Number(item[2]),  // 리뷰 수를 숫자로 변환
            rating: item[3],  // 평점은 문자열 그대로 사용
        }));

        console.log(books);

        return response.data;
    } catch (error) {
        console.error("API Error: ", error);
        throw error;
    }
};
import axios from "axios";

interface Book {
  title: string;
  price: number;
  reviews: number;
  rating: string;
}

// 도서 정보를 가져오는 API 함수
export const fetchBooks = async (query) => {
  try {
    const response = await axios.get(
        process.env.API_URL,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
        },
      },
    );
    if (response) {
      const books: Book[] = [];
      const keys = Object.keys(response.data);
      keys.forEach((key) => {
        // "data" 키로부터 배열을 꺼내서 Book 형태로 변환
        books.push(
          response.data[key]
            .filter((item) => item[1] !== null)
            .map((item: string[]) => ({
              title: item[0],
              price: Number(item[1].replace(/,/g, "")), // 가격에서 콤마 제거 후 숫자로 변환
              reviews: item[2], // 리뷰 수를 숫자로 변환
              rating: item[3], // 평점은 문자열 그대로 사용
            })),
        );
      });

      return books;
    } else {
      return null;
    }
  } catch (error) {
    console.error("API Error: ", error);
    throw error;
  }
};

const path = require('path');

module.exports = {
    entry: './src/index.tsx', // index.tsx가 위치한 경로
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'], // TypeScript 파일 확장자 추가
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/, // .ts와 .tsx 파일을 처리하도록 설정
                exclude: /node_modules/,
                use: 'ts-loader', // TypeScript를 처리하기 위한 로더
            },
            // 다른 로더 설정들 (예: CSS, 이미지 등)
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
const prod = process.env.NODE_ENV === 'production';

module.exports ={
    'process.env.BASE_URL':prod ? 'https://movie-app-with-search.herokuapp.com/' : 'http://localhost:3000',
    'process.env.NAMESPACE': 'https://movie-app-with-search.herokuapp.com/',
}
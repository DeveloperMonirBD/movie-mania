import { getMovieReviewData } from './data.js';


function init() {
    const movieReviewData = getMovieReviewData();
    paintStatistics(movieReviewData)
}

function paintStatistics(movieReviewData) {
    const flatReviewData = movieReviewData.flat();
    
    const totalMovies = movieReviewData.length;
    const totalReviews = flatReviewData.length;
    const totalReating = flatReviewData.reduce((acc, item) => {
        return acc = item.rating
    }, 0)

    const avgReating = (totalReating / totalReviews).toFixed(2);


    const totalMoviEle = document.getElementById('tMoviesId');












}

init()


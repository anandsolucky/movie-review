const writeReviewForm = document.getElementById('review-form');

const sendReview = (movieData, callback) => {
    fetch('/review',{
        method:"post",
        body: JSON.stringify(movieData),
        headers: { 'Content-type': 'application/json' },
    })
    .then((response) => {
        response.json()
            .then((data) => callback(undefined, data))
            .catch((err) => callback(err, undefined))
    })
    .catch((err) => callback(err, undefined))
}

writeReviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const movieName = document.getElementById('name-input').value;
    const director = document.getElementById('director-input').value; 
    const title = document.getElementById('title-input').value; 
    const genre = document.getElementById('genre-input').value; 
    const rating = document.getElementById('rating-input').value; 
    const detail = document.getElementById('detail-input').value; 
    const movieData = {movieName, director, title, genre, rating, detail};
    sendReview(movieData, (error, response)=> {
        if(error) {
            alert("insertion error! please check logs")
            console.log("error: " + error);
        }
        else {
            alert("Data inserted!")
            console.log("data saved success");
        }
    })

})
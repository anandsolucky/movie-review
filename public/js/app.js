const writeReviewForm = document.getElementById('review-form');

writeReviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const movieName = document.getElementById('name-input');
    const director = document.getElementById('director-input'); 
    const title = document.getElementById('title-input').value; 
    const genre = document.getElementById('genre-input').value; 
    const rating = document.getElementById('rating-input').value; 
    const detail = document.getElementById('detail-input').value; 
    // alert('submitted' + title + " | " + genre + " | " + rating + " | " + detail );
    const movieData = {movieName, director, title, genre, rating, detail};
    fetch('/review',{
        method:"post",
        body: JSON.stringify(movieData),
        headers: { 'Content-type': 'application/json' },
    })
})
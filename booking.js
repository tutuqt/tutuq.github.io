function selectLocation(location, button) {
    document.querySelectorAll('#location-buttons .btn').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    document.getElementById('selected-location').value = location;
}

function selectType(type, button) {
    document.querySelectorAll('#type-buttons .btn').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    document.getElementById('selected-type').value = type;
}

document.addEventListener('DOMContentLoaded', function() {
    const url = 'https://api.jsonbin.io/v3/b/6641a122e41b4d34e4f2f3af';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const movies = data.record;
            const urlParams = new URLSearchParams(window.location.search);
            const movieTitle = urlParams.get('title');
            const movie = movies.find(m => m.title === movieTitle);

            if (movie) {
                document.getElementById('movie-title').textContent = movie.title;
                document.getElementById('movie-image').src = movie.image;

                const timeButtons = document.getElementById('time-buttons');
                movie.times.forEach(time => {
                    const button = document.createElement('button');
                    button.type = 'button';
                    button.classList.add('btn', 'btn-secondary');
                    button.value = time;
                    button.textContent = time;
                    button.addEventListener('click', function() {
                        document.querySelectorAll('.time-buttons button').forEach(btn => btn.classList.remove('selected'));
                        button.classList.add('selected');
                    });
                    timeButtons.appendChild(button);
                });

                const bookingForm = document.getElementById('booking-form');
                bookingForm.addEventListener('submit', function(event) {
                    event.preventDefault();

                    const selectedTimeButton = document.querySelector('.time-buttons button.selected');
                    if (!selectedTimeButton) {
                        alert('Please select a time.');
                        return;
                    }
                    const selectedTime = selectedTimeButton.value;
                    const selectedLocation = document.getElementById('selected-location').value;

                    window.location.href = `order.html?title=${encodeURIComponent(movie.title)}&time=${encodeURIComponent(selectedTime)}&location=${encodeURIComponent(selectedLocation)}&image=${encodeURIComponent(movie.image)}`;
                });
            } else {
                alert('Movie not found!');
            }
        })
        .catch(error => {
            console.error('Error loading the movies:', error);
            alert('Failed to load movies. Please check the console for more information.');
        });
});
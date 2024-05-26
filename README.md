# tutuq.github.io
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Movie Ticket Booking</title>
    <link rel="stylesheet" href="styles.css">
    <script>
        document.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 0) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        function toggleDropdown() {
            const dropdownContent = document.getElementById('dropdown-content');
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            } else {
                dropdownContent.style.display = 'block';
            }
        }
    </script>
</head>
<body>
    <header>
        <nav>
            <a href="index.html">
                <img src="./logo.jpg" alt="Logo" class="logo">
            </a>
            <ul class="nav-links">
                <li><a href="index.html">Эхлэл</a></li>
                <li><a href="movies.html">Захиалга</a></li>
                <li><a href="login.html">Нэвтрэх</a></li>
            </ul>
            <div class="dropdown">
                <button class="dropdown-btn" onclick="toggleDropdown()">☰</button>
                <div id="dropdown-content" class="dropdown-content">
                    <a href="index.html">Эхлэл</a>
                    <a href="movies.html">Захиалга</a>
                    <a href="login.html">Нэвтрэх</a>
                </div>
            </div>
        </nav>
    </header>
    
    <section class="background-video">
        <video autoplay muted loop>
            <source src="./bgvid.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <h1>Манай дэлгэцнээ</h1>
    </section>
    
    <section class="featured-movies">
        <div class="movie-container"></div>
    </section>
    
    <footer>
        <p>© Prime Cineplex 2024</p>
    </footer>
    
    <script src="script.js"></script>
</body>
</html>

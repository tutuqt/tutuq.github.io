const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
    user: 'your_postgres_user',
    host: 'localhost',
    database: 'your_database_name',
    password: '1226',
    port: 5432,
});

app.get('/api/movies', async (req, res) => {
    try {
        const moviesResult = await pool.query('SELECT * FROM movies');
        const movieTimesResult = await pool.query('SELECT * FROM movie_times');
        
        const movies = moviesResult.rows.map(movie => ({
            ...movie,
            times: movieTimesResult.rows
                .filter(time => time.movie_id === movie.id)
                .map(time => time.time),
        }));

        res.json(movies);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

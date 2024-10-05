const movies=[
  {
    "title": "Deadpool & Wolverine",
    "overview": "Deadpool teams up with Wolverine for a chaotic, action-packed adventure.",
    "rating": "8.5",
    "duration": "120 min",
    "releaseDate": "2025-05-10",
    "genre": ["Action", "Comedy", "Adventure"],
    "poster": "https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg"
  },
  {
    "title": "Transformers One",
    "overview": "The origin story of the Transformers and their war on Cybertron.",
    "rating": "7.3",
    "duration": "130 min",
    "releaseDate": "2024-07-18",
    "genre": ["Action", "Sci-Fi", "Adventure"],
    "poster": "https://image.tmdb.org/t/p/original/tAwfoDyKiYa4KQdUp3DTMrEs4En.jpg"
  },
  {
    "title": "The Wild Robot",
    "overview": "A robot awakens on a deserted island and embarks on a journey of discovery.",
    "rating": "7.8",
    "duration": "110 min",
    "releaseDate": "2026-04-02",
    "genre": ["Animation", "Adventure", "Family"],
    "poster": "https://image.tmdb.org/t/p/original/62zw627mH74rng9zc4tFfaR54KW.jpg"
  },
  {
    "title": "Kill",
    "overview": "A mysterious assassin embarks on a deadly mission, leaving a trail of bodies.",
    "rating": "6.9",
    "duration": "95 min",
    "releaseDate": "2023-09-15",
    "genre": ["Thriller", "Action"],
    "poster": "https://image.tmdb.org/t/p/original/okVLmXL5y18dfN2R4ufMZEGaeCd.jpg"
  },
  {
    "title": "It Ends With Us",
    "overview": "Based on the bestselling novel, a story of love, loss, and resilience.",
    "rating": "8.2",
    "duration": "115 min",
    "releaseDate": "2024-11-08",
    "genre": ["Drama", "Romance"],
    "poster": "https://image.tmdb.org/t/p/original/zAqBIeO71BFL7bAtP5TFzVjVamy.jpg"
  },
  {
    "title": "Inception",
    "overview": "A thief with the ability to enter people's dreams takes on one last job.",
    "rating": "8.8",
    "duration": "148 min",
    "releaseDate": "2010-07-16",
    "genre": ["Action", "Sci-Fi", "Thriller"],
    "poster": "https://image.tmdb.org/t/p/original/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg"
  },
  {
    "title": "Interstellar",
    "overview": "A team of explorers travels through a wormhole in space in search of a new home for humanity.",
    "rating": "8.6",
    "duration": "169 min",
    "releaseDate": "2014-11-07",
    "genre": ["Adventure", "Drama", "Sci-Fi"],
    "poster": "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg"
  },
  {
    "title": "The Godfather",
    "overview": "The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.",
    "rating": "9.2",
    "duration": "175 min",
    "releaseDate": "1972-03-24",
    "genre": ["Crime", "Drama"],
    "poster": "https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg"
  },
  {
    "title": "Avengers",
    "overview": "Earth's mightiest heroes must come together to stop an alien invasion.",
    "rating": "8.1",
    "duration": "143 min",
    "releaseDate": "2012-05-04",
    "genre": ["Action", "Adventure", "Sci-Fi"],
    "poster": "https://image.tmdb.org/t/p/original/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg"
  },
  {
    "title": "The Lord of the Rings",
    "overview": "A young hobbit embarks on a quest to destroy an ancient, powerful ring.",
    "rating": "8.9",
    "duration": "178 min",
    "releaseDate": "2001-12-19",
    "genre": ["Adventure", "Fantasy"],
    "poster": "https://image.tmdb.org/t/p/original/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg"
  },
  {
    "title": "The Shawshank Redemption",
    "overview": "Two imprisoned men bond over a number of years, finding solace and eventual redemption.",
    "rating": "9.3",
    "duration": "142 min",
    "releaseDate": "1994-10-14",
    "genre": ["Drama"],
    "poster": "https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg"
  },
  {
    "title": "Borderlands",
    "overview": "Based on the popular video game, a group of unlikely heroes must save the universe.",
    "rating": "7.0",
    "duration": "125 min",
    "releaseDate": "2024-08-02",
    "genre": ["Action", "Adventure", "Sci-Fi"],
    "poster": "https://image.tmdb.org/t/p/original/mKOBdgaEFguADkJhfFslY7TYxIh.jpg"
  },
  {
    "title": "Hounds of War",
    "overview": "A gripping war drama depicting the battle for survival in a brutal conflict zone.",
    "rating": "7.5",
    "duration": "130 min",
    "releaseDate": "2023-12-20",
    "genre": ["Drama", "War"],
    "poster": "https://image.tmdb.org/t/p/original/blqiNjJefmY10Wx6y2vgJJWljJj.jpg"
  },
  {
    "title": "Beetlejuice",
    "overview": "After a family tragedy, three generations of the Deetz family return home to Winter River. Still haunted by Betelgeuse, Lydia's life is turned upside down when her teenage daughter, Astrid, accidentally opens the portal to the Afterlife.",
    "rating": "7.5",
    "duration": "92 mins",
    "releaseDate": "2024-09-04",
    "genre": ["Comedy", "Fantasy", "Horror"],
    "poster": "https://image.tmdb.org/t/p/original/A1dZ6faTjg0e6HYftBmEKujuXGQ.jpg"
  },
  {
    "title": "Joker",
    "overview": "While struggling with his dual identity, Arthur Fleck not only stumbles upon true love, but also finds the music that's always been inside him.",
    "rating": "8.1",
    "duration": "190 min",
    "releaseDate": "1995-10-20",
    "genre": ["Romance", "Drama"],
    "poster": "https://image.tmdb.org/t/p/original/reNf6GBzOe48l9WEnFOxXgW56Vg.jpg"
  },
  {
    "title": "Venom",
    "overview": "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
    "rating": "9.0",
    "duration": "152 min",
    "releaseDate": "2008-07-18",
    "genre": ["Action", "Crime", "Drama"],
    "poster": "https://image.tmdb.org/t/p/original/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg"
  }
]


    module.exports=movies;
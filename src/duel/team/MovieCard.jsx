// Task 3 · MovieCard component
// Props: movie = { id, title, image, synopsis, rating, showtimes }.
// Returns an <article> with an <img src alt> (the alt is the title), an <h3> with
// the title only, and a separate element with the rating.
export default function MovieCard({ movie }) {
  return (
    <article>
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <span>★ {movie.rating}</span>
    </article>
  );
}

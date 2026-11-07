export default function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <img alt={movie.title} src={movie.image} />
      <h3>{movie.title}</h3>
      <p>★ {movie.rating}</p>
    </article>
  );
}

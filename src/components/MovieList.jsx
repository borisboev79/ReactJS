import Movie from "./Movie";
import Heading from "./Heading";

export default function MovieList(props) {
  console.log(props);

  return (
    
    <div className="movie-list">

      <Heading>{props.headingText}</Heading>
      
      <section>

        <Movie movieData={props.movieDB[0]} />
        <Movie movieData={props.movieDB[1]} />
        <Movie movieData={props.movieDB[2]} />
      
      </section>
    </div>
  );
}

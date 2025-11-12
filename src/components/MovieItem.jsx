import Card from 'react-bootstrap/Card';
const MovieItem = (props) => {
    return (
    <div>

        {/* card component from bootstrap */}
        <Card className = "text-center">
            <Card.Body>

                {/* display movie title passed as a prop */}
                <Card.Title>{props.myMovies.title}</Card.Title>
                {/* display movie poster */}
                <img src={props.myMovies.poster}></img>
            </Card.Body>
        {/* footer section displaying the year */}
        <Card.Footer className="text-muted">{props.myMovies.year}</Card.Footer>
        </Card>
    </div>
    );
}

{/* export component */}
export default MovieItem;
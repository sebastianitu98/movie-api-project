import MovieElement from "../MovieElement/MovieElement"

const ResultsSection = ({data}) => {
    return(
        <div className="grid grid-cols-5 gap-2 mx-auto">
            {data && data.map(movie => <MovieElement movie={movie} key={movie.id}/>)}
        </div>
    )
}

export default ResultsSection
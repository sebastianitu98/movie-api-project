import MovieElement from "../MovieElement/MovieElement"


const ResultsSection = ({data}) => {

    return(
        <div className="flex flex-wrap gap-3 justify-center mx-auto">
            {data && data.map(movie => <MovieElement movie={movie} key={movie.id} />)}
        </div>
    )
}

export default ResultsSection
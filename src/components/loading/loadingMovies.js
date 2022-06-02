import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingMovies = () => {
    return (Array(3)
        .fill({})
        .map((_item, index) => {
            return (
                <div key={index} className="container">
                    <div className="movie">
                        <div>
                            <Skeleton className='mb-4' height={400} width={400} />
                            <h3>
                                <Skeleton className='mb-2' height={30} width={400} />
                            </h3>
                        </div>
                    </div>
                </div>

            );
        }))

}

export default LoadingMovies;
import { useEffect } from "react";

export default function MoviesPage() {
    useEffect(() => {
        document.title = 'Películas'
    }, [])
    return (
        <div>
            <h1>Movies Page</h1>
            <p>Welcome to the movies page!</p>
        </div>
    );
}

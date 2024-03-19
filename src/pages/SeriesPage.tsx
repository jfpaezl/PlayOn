import { useEffect } from "react";

export default function SeriesPage() {
    useEffect(() => {
        document.title = 'Series'
    }, [])
    return (
        <div>
            <h1>Series Page</h1>
            <p>Welcome to the series page!</p>
        </div>
    );
}
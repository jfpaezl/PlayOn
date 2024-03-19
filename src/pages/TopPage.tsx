import { useEffect } from "react";

export default function TopPage() {
    useEffect(() => {
        document.title = 'Top Page'
    }, [])
    return (
        <div>
            <h1>Top Page</h1>
            <p>Welcome to the top page!</p>
        </div>
    );
}
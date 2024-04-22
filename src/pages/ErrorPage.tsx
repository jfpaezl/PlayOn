import { useEffect } from "react"

export default function ErrorPage() {
    useEffect(() => {
        document.title = '404 - Not Found'
        window.location.href = '/';
    }, [])
    return (
        <div>
            <h1>404 - Not Found</h1>
        </div>
    )
}

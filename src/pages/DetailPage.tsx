import { useEffect } from "react"
import Layout from "../components/Layout"
import Chapters from "../components/containes/detail/Chapters"
import PlayDetail from "../components/containes/detail/PlayDetail"

export default function Detailspage() {
    useEffect(() => {
        document.title = 'Detalles'
    }, [])

    return (
        <Layout>
            <PlayDetail/>
            <Chapters/>
        </Layout>
    )
}
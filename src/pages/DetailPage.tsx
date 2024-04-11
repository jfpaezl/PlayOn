import Layout from "../components/Layout"
import Chapters from "../components/containes/detail/Chapters"
import PlayDetail from "../components/containes/detail/PlayDetail"

export default function Detailspage() {
    return (
        <Layout>
            <PlayDetail/>
            <Chapters/>
        </Layout>
    )
}
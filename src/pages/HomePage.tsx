import { useEffect } from "react";
import Layout from "../components/Layout"
import Hero from "../components/containes/home/Hero";
import Main from "../components/containes/home/Main";

export default function HomePage() {
    useEffect(() => {
        document.title = 'PlayOn'
    }, [])
    return (
        <Layout>
            <Hero />
            <Main />
        </Layout>
    );
}
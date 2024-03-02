import Layout from "../components/Layout"
import Hero from "../components/containes/home/Hero";
import Main from "../components/containes/home/Main";

export default function HomePage() {
    return (
        <Layout>
            <Hero />
            <Main />
        </Layout>
    );
}
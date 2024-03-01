import Footer from "./layout/Footer";
import Header from "./layout/Header";

export default function Layout({ ...props }) {
    return (
        <>
            <Header />
            <main className="container content">
                {props.children}
            </main>
            <Footer />
        </>
    )
}
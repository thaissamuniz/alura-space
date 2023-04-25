import Header from "../../components/Header";
import Menu from "../../components/Menu";
import styles from './style.module.scss';
import Banner from '../../components/Banner';
import Footer from "../../components/Footer";
import Galery from "../../components/Galery";
import Popular from "../../components/Popular";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
                <div className={styles.galery}>
                    <Galery />
                    <Popular />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Home;
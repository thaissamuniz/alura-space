import Header from "../../components/Header";
import Menu from "../../components/Menu";
import styles from './style.module.scss';
import Banner from '../../components/Banner';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
            </main>
        </>
    )
}

export default Home;
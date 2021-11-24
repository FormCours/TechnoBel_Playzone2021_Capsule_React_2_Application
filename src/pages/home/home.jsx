import Title from '../../components/title/title';
import imgDella from './images/della_duck.jpg';

const Home = () => {
    return (
        <main>
            <Title text='Home' />
            <img src={imgDella} alt='Della Duck'/>
        </main>
    );
};

export default Home;
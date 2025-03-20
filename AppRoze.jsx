import DownloadApp from './src/components/DownloadApp';
import Header from './src/components/layouts/header/Header';
import Main from './src/components/Main';
import Services from './src/components/Services';
import StartDriving from './src/components/StartDriving';
import TravelWithUs from './src/components/TravelWithUs';
import Values from './src/components/Values';
import Footer from './src/components/layouts/Footer';
const AppRoze = () => {

    return (
        <>
            <Header />
            <Main />
            <StartDriving />
            <Services />
            <DownloadApp />
            <Values />
            <TravelWithUs />
            <Footer />
        </>

    )
}

export default AppRoze; 
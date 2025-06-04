import DownloadApp from './DownloadApp';
import Main from './Main';
import Services from './Services';
import StartDriving from './StartDriving';
import TravelWithUs from './TravelWithUs';
import Values from './Values';
import Layout from '../../../components/layouts/Layout';
const AppRoze = () => {

    return (
        <Layout>
            <Main />
            <StartDriving />
            <Services />
            <DownloadApp />
            <Values />
            <TravelWithUs />
        </Layout>

    )
}

export default AppRoze; 
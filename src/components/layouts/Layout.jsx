import Footer from "./Footer";
import Header from "./header/Header";

const Layout = ({children}) => {
    return (
        <div>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;
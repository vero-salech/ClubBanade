import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";

export const Layout = () => {
    return (
        <div className="bg-white text-gray-900 font-sans antialiased overflow-x-hidden selection:bg-accent selection:text-black">
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

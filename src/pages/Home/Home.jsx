import { CategoriesSection } from "./components/CategoriesSection/CategoriesSection";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { HeroVideo } from "./components/HeroVideo/HeroVideo";
import { VideosSection } from "./components/VideosSection/VideosSection";
import { Footer } from "../../components/Footer/Footer";
export const Home = () => {
    return (
        <div className="home-page">
            <div className="hero">
                <HeroVideo/>
                <HeroSection/>
                <VideosSection/>
                <CategoriesSection/>
                <Footer/>
            </div>
        </div>
    );
}
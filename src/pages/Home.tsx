import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Sports } from "../components/Sports";
import { Spaces } from "../components/Spaces";

export const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Sports />
            <Spaces />
        </main>
    );
};

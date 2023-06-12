import GridNews from "../components/homepage/GridNews";
import Slider from "../components/homepage/Slider";
import SwiperTags from "../components/homepage/SwiperTags";
import usePosts from "../hooks/usePosts";

const HomePage = () => {
    const testSort = false;
    const testString = "";

    usePosts({ testString, testSort });

    return (
        <div className="w-100 d-flex align-items-center justify-content-center flex-column">
            <GridNews />
            <SwiperTags />
            <Slider titulo={"Noticias Recientes"} />
        </div>
    );
};

export default HomePage;

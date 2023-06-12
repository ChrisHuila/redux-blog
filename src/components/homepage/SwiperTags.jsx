import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import useSwiperTags from "../../hooks/useSwiperTags";

import "./swipertags.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperTags = () => {
    const { allposts } = useSelector(state => state.postReducer);
    const { numberSwiper, tags } = useSwiperTags({ allposts });

    return (
        <div className="swiperTag-container">
            <h2 style={{ margin: "2rem 0" }}>Tags</h2>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                spaceBetween={10}
                // createElements={true}
                slidesPerView={numberSwiper()}
                // prettier-ignore
            >
                {tags?.map(tag => (
                    <SwiperSlide
                        key={tag}
                        className="SwiperSlide-tag">
                        <div className="swiperTag-button_div">
                            <button className="swiperTag-button">{tag}</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperTags;

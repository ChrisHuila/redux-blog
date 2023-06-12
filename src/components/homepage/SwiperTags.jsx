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
            <Swiper
                navigation={true}
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={13}>
                {tags?.map(tag => (
                    <SwiperSlide key={tag}>
                        <div className="">
                            <button className="swiperTag">{tag}</button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperTags;

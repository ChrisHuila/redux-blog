import { useMemo, useEffect, useState } from "react";

const useSwiperTags = ({ allposts }) => {
    const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    const [width, setWidth] = useState(getWidth());

    useEffect(() => {
        const resizeListener = () => {
            setTimeout(() => (width === getWidth() ? null : setWidth(getWidth()), 150));
        };
        window.addEventListener("resize", resizeListener);

        return () => {
            window.removeEventListener("resize", resizeListener);
        };
    }, [width]);

    const numberSwiper = () => {
        if (width) {
            if (width > 1100) {
                return 8;
            } else if (width > 850) {
                return 7;
            } else if (width > 621) {
                return 6;
            } else if (width > 570) {
                return 5;
            } else {
                return 4;
            }
        }
    };

    const sortedTags = useMemo(() => {
        if (allposts.length === 0) return;
        const tagsArray = [];

        allposts?.forEach(post => post.taggs?.forEach(tag => (!tagsArray.includes(tag) ? tagsArray.push(tag) : null)));
        console.log(tagsArray);

        // return [...tagsArray].sort((a, b) => a.localeCompare(b));
        // prettier-ignore
        return ["batalla", "strange", "primer", "tagg", "comedia", "cine", "misterio", "real", "misterio", "drama", "naruto", "spider", "bankai", "ejercicio", "arte", "cine"];
    }, [allposts]);

    return { numberSwiper, tags: sortedTags };
};

export default useSwiperTags;

import React from 'react'
import '../../assets/css/slick.css'
import Slider from "react-slick";
import defaultData from '../../data/defaultData'
import useData from '../../hooks/useData';
const SlideShow = () => {

    const getElement = (item) => {
        return (
            <div className="media-pic" key={item.id}>
                <img
                    src={item.imgURL}
                    alt=""
                    className="img-fluid"
                />
            </div>
        )
    }
    const path = 'http://localhost:3500/slideShows';
    const { list } = useData(path, defaultData.slideShows, 'Slide Show', getElement);

    const settings = {
        dots: true,
        infinite: true,
        autoplaySpeed: 2000,
        speed: 1000,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
        initialSlide: 0,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            {list}
        </Slider>
    );
}

export default SlideShow;
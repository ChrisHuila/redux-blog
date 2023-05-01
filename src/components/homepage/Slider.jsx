// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
  // Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../homepage/homepage.css";
import { useGetWidth } from "../../hooks/useGetWidth";
import { Navigation } from "swiper";

export default function SlideEntries({titulo}) {

  const {width} = useGetWidth()

  const getNumber = () => {
    if(width > 1200){
        return 4;
    }else if (width > 800) {
        return 3;
    }else if (width > 596){
        return 2;
    } else{
        return 1;
    }
}

  return (
   
    <div className="w-100 px-2" >
    <h2 className="mt-5 px-2 fw-bold" >{titulo ? titulo : ''}</h2>
    
      <Swiper
        slidesPerView={getNumber()}
        spaceBetween={30}
        className="mySwiper"
        navigation={true}
        modules={[Navigation]}
      >

          <SwiperSlide >
            <div className="box-imagen-slide" >
                
              <img src="https://d9zuehkdkxba0.cloudfront.net/wp-content/uploads/2020/01/drone.jpg" />
           
              <div className="content d-flex flex-column align-items-start py-1 justify-content-between" >
              
              <div className="w-100 d-flex align-items-center justify-content-between" >
              <h5 className="text-dark">Titulo</h5>
                <small className="text-muted text-end">12/06/2022</small>
              </div>

                <div className="w-100 d-flex align-items-start justify-content-start h-100" >
                  <strong className="text-start h5" >Lorem, ipsum dolor sit amet 
                    consectetur adipisicing elit.
                    </strong>
                </div>
              
              </div>
              
    
            </div>
          </SwiperSlide>

          <SwiperSlide >
            <div className="box-imagen-slide" >
              <img src="https://d9zuehkdkxba0.cloudfront.net/wp-content/uploads/2020/01/drone.jpg" />
              <div className="content d-flex flex-column align-items-start py-1 justify-content-between" >
              <div className="w-100 d-flex align-items-center justify-content-between" >
              <h5 className="text-dark">Titulo</h5>
                <small className="text-muted text-end">12/06/2022</small>
              </div>
                <div className="w-100 d-flex align-items-start justify-content-start h-100" >
                  <strong className="text-start h5" >Lorem, ipsum dolor sit amet 
                    consectetur adipisicing elit.
                    </strong>
                </div>
              </div>
              
    
            </div>
          </SwiperSlide>

          <SwiperSlide >
            <div className="box-imagen-slide" >
              <img src="https://d9zuehkdkxba0.cloudfront.net/wp-content/uploads/2020/01/drone.jpg" />
              <div className="content d-flex flex-column align-items-start py-1 justify-content-between" >
              <div className="w-100 d-flex align-items-center justify-content-between" >
              <h5 className="text-dark">Titulo</h5>
                <small className="text-muted text-end">12/06/2022</small>
              </div>
                <div className="w-100 d-flex align-items-start justify-content-start h-100" >
                  <strong className="text-start h5" >Lorem, ipsum dolor sit amet 
                    consectetur adipisicing elit.
                    </strong>
                </div>
              </div>
              
    
            </div>
          </SwiperSlide>

          <SwiperSlide >
            <div className="box-imagen-slide" >
              <img src="https://d9zuehkdkxba0.cloudfront.net/wp-content/uploads/2020/01/drone.jpg" />
              <div className="content d-flex flex-column align-items-start py-1 justify-content-between" >
              <div className="w-100 d-flex align-items-center justify-content-between" >
              <h5 className="text-dark">Titulo</h5>
                <small className="text-muted text-end">12/06/2022</small>
              </div>
                <div className="w-100 d-flex align-items-start justify-content-start h-100" >
                  <strong className="text-start h5" >Lorem, ipsum dolor sit amet 
                    consectetur adipisicing elit.
                    </strong>
                </div>
              </div>
              
    
            </div>
          </SwiperSlide>
       
      </Swiper>
    
    </div>
   
  );
}

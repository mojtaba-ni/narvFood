// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar,EffectFade, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import pizza from '../../image/burgerslide-final.png';
import AvatarF from '../fame_avatar'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default () => {
    const MenuPopular = [
        {   id : 1,
            image :pizza ,
            title : 'پیتزا رست بیف',
            desc : 'فست فود چیلی'
        },
        {   id : 2,
            image : pizza  ,
            title : 'پیتزا رست بیف',
            desc : 'فست فود چیلی'
        },
        {   id : 3,
            image : pizza  ,
            title : 'پیتزا رست بیف',
            desc : 'فست فود چیلی'
        },
        {   id : 4,
            image : pizza  ,
            title : 'پیتزا رست بیف',
            desc : 'فست فود چیلی'
        },
        {   id : 5,
            image : pizza  ,
            title : 'پیتزا رست بیف',
            desc : 'فست فود چیلی'
        },
        {   id : 6,
            image : pizza  ,
            title : 'پیتزا رست بیف',
            desc : 'فست فود چیلی'
        },
        {   id : 7,
            image : pizza  ,
            title : 'پیتزا رست بیف',
            desc : 'فست فود چیلی'
        },
        
    ]
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, EffectFade,A11y]}
      //effect="fade"
      spaceBetween={0}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {MenuPopular.map( (item) =>(
            <SwiperSlide key={item.id}>
                <AvatarF avatar_title={item.title}
                avatar_desc={item.desc} avatar_image={item.image}/>
            </SwiperSlide>
        ))}
   
    
    </Swiper>
  );
};
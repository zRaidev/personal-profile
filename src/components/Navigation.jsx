import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

function Navigation () {
  const freeModeBoolean = true
  return (
    <nav className={`text-[#ffffffc3] text-lg font-medium uppercase pl-5 mb-12 `}>
      <Swiper
        slidesPerView='2.8'
        spaceBetween={30}
        freeMode={freeModeBoolean}
        pagination={{
          clickable: true
        }}
        modules={[FreeMode]}
        className='mySwiper'
      >
        <SwiperSlide className='!w-auto'>
          <a href='#merch'>Merch</a>
        </SwiperSlide>
        <SwiperSlide className='!w-auto'>
          <a href='#latest-videos'>Latest videos</a>
        </SwiperSlide>
        <SwiperSlide className='!w-auto'>
          <a href='#amazon-products'>Amazon Products</a>
        </SwiperSlide>
        <SwiperSlide className='!w-auto'>
          <a href='#spotify'>Spotify</a>
        </SwiperSlide>
        <SwiperSlide className='!w-auto'>
          <a href='#management'>Management</a>
        </SwiperSlide>
      </Swiper>
    </nav>
  )
}

export default Navigation

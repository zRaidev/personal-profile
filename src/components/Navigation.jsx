import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

function Navigation () {
  const freeModeBoolean = true
  const isXSmallDevice = useMediaQuery({ query: '(max-width: 385px)' })
  const isSmallDevice = useMediaQuery({ query: '(max-width: 450px)' })

  const isDevice = () => {
    if (isXSmallDevice) {
      return 2.3
    } else if (isSmallDevice) {
      return 2.6
    } else {
      return 2.95
    }
  }

  return (
    <nav className={`text-[#ffffffc3] text-lg font-medium uppercase pl-5 mb-12 `}>
      <Swiper
        slidesPerView={isDevice()} // 2.8 default
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

import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import YoutubeFrame from './YoutubeFrame.jsx'

const videoData = [
  {
    urlId: 'dgvVvIM6g9o',
    videoName: 'VIDEO EXAMPLE #1 - You can use your video'
  },
  {
    urlId: 'lTRI8kEeX1U',
    videoName: 'VIDEO EXAMPLE #2 - You can use your video'
  },
  {
    urlId: 'PcjvmYjFres',
    videoName: 'VIDEO EXAMPLE #3 - You can use your video'
  },
  {
    urlId: '7ZgHFipO9iw',
    videoName: 'VIDEO EXAMPLE #4 - You can use your video'
  },
  {
    urlId: 'VYcfS8ZeTJE',
    videoName: 'VIDEO EXAMPLE #5 - You can use your video'
  },
  {
    urlId: 'LHQuHBsg2Ow',
    videoName: 'VIDEO EXAMPLE #6 - You can use your video'
  },
  {
    urlId: 'amHVGaHPQmw',
    videoName: 'VIDEO EXAMPLE #7 - You can use your video'
  }
]
function YoutubeVideos ({ id }) {
  const freeModeBoolean = true

  const isXSmallDevice = useMediaQuery({ query: '(max-width: 385px)' })
  const isSmallDevice = useMediaQuery({ query: '(max-width: 450px)' })

  const isDevice = () => {
    if (isXSmallDevice) {
      return 1.04
    } else if (isSmallDevice) {
      return 1.1
    } else {
      return 1.3
    }
  }

  return (
    <section id={id} className='text-white'>
      <div className=''>
        <h2 className='uppercase text-2xl font-bold mb-2'>Latest videos</h2>
      </div>
      <Swiper // 1.04 for 385px, 1.1 for 450px, 1.3 for 768px
        slidesPerView={isDevice()} // find a way to move this depending the screen size (media query)
        spaceBetween={0}
        freeMode={freeModeBoolean}
        pagination={{
          clickable: true
        }}
        modules={[FreeMode]}
        className='mySwiper'
      >
        {videoData.map((x, i) => {
          return (
            <SwiperSlide key={i}>
              <YoutubeFrame
                VideoName={x.videoName}
                urlId={x.urlId}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default YoutubeVideos

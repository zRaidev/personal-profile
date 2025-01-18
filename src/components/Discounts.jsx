// DISCOUNTS SECTION OR MERCH
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

import LinkCard from './LinkCard.jsx'
import Img1 from '../assets/images/Discounts/merch-1.webp'
import Img2 from '../assets/images/Discounts/merch-2.webp'
import Img3 from '../assets/images/Discounts/merch-3.webp'
import Img4 from '../assets/images/Discounts/merch-4.webp'

const cardsInfo = [
  {
    img: Img1,
    text: 'Merch #1',
    subtxt: '10% OFF',
    link: 'https://www.amazon.com'
  },
  {
    img: Img2,
    text: 'Merch #2',
    subtxt: '10% OFF',
    link: 'https://www.amazon.com'
  },
  {
    img: Img3,
    text: 'Merch #3',
    subtxt: '10% OFF',
    link: 'https://www.amazon.com'
  },
  {
    img: Img4,
    text: 'Merch #4',
    subtxt: '10% OFF',
    link: 'https://www.amazon.com'
  }
]

function Discounts () {
  const freeModeBoolean = true
  return (
    <section id='merch' className='text-[white] uppercase mb-6'>
      <h2 className='text-2xl font-bold mb-2'>Merchandising</h2>
      <Swiper
        slidesPerView='1.3'
        spaceBetween={0}
        freeMode={freeModeBoolean}
        pagination={{
          clickable: true
        }}
        modules={[FreeMode]}
        className='mySwiper'
      >
        <SwiperSlide>
          <LinkCard
            text={cardsInfo[0].text}
            img={cardsInfo[0].img}
            subtxt={cardsInfo[0].subtxt}
            link={cardsInfo[0].link}
          />
          <div className='h-4' />
          <LinkCard
            text={cardsInfo[1].text}
            img={cardsInfo[1].img}
            subtxt={cardsInfo[1].subtxt}
            link={cardsInfo[1].link}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LinkCard
            text={cardsInfo[2].text}
            img={cardsInfo[2].img}
            subtxt={cardsInfo[2].subtxt}
            link={cardsInfo[2].link}
          />
          <div className='h-4' />
          <LinkCard
            text={cardsInfo[3].text}
            img={cardsInfo[3].img}
            subtxt={cardsInfo[3].subtxt}
            link={cardsInfo[3].link}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Discounts

// DISCOUNTS SECTION OR MERCH
import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

import LinkCard from './LinkCard.jsx'

function LinkCardSection ({ sectionTitle, jsonFile, id }) {
  const freeModeBoolean = true
  // fetch data
  const [cardsInfo, setCardInfo] = useState()
  const [slides, setSlides] = useState()

  useEffect(() => {
    fetch(jsonFile)
      .then(res => res.json())
      .then(data => {
        setCardInfo(data)
      })
  }, [jsonFile])

  // Iterations for the cards
  useEffect(() => {
    if (!cardsInfo) return

    const slides = []
    for (let i = 0; i < cardsInfo.length; i++) {
      if (cardsInfo[i]) {
        slides.push(
          <SwiperSlide key={i}>
            <LinkCard
              text={cardsInfo[i].text}
              img={cardsInfo[i].img}
              subtxt={cardsInfo[i].subtxt}
              link={cardsInfo[i].link}
            />
            <div className='h-4' />
            {cardsInfo[i + 1] && (
              <LinkCard
                text={cardsInfo[i + 1].text}
                img={cardsInfo[i + 1].img}
                subtxt={cardsInfo[i + 1].subtxt}
                link={cardsInfo[i + 1].link}
              />
            )}
          </SwiperSlide>
        )
        i++ // Incrementar i adicionalmente para saltar el siguiente elemento ya procesado
      }
    }
    setSlides(slides)
  }, [cardsInfo])

  const isXSmallDevice = useMediaQuery({ query: '(max-width: 385px)' })
  const isSmallDevice = useMediaQuery({ query: '(max-width: 450px)' })

  const isDevice = () => {
    if (isXSmallDevice) {
      return 1.15
    } else if (isSmallDevice) {
      return 1.3
    } else {
      return 1.55
    }
  }

  return (
    <section id={id} className='text-[white] uppercase'>
      <h2 className='text-2xl font-bold mb-2'>{sectionTitle}</h2>
      <Swiper
        slidesPerView={isDevice()}
        spaceBetween={0}
        freeMode={freeModeBoolean}
        pagination={{
          clickable: true
        }}
        modules={[FreeMode]}
        className='mySwiper'
      >
        {slides}
      </Swiper>
    </section>
  )
}

export default LinkCardSection

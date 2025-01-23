import { useState, useEffect } from 'react'
import SpotifyCard from './SpotifyCard.jsx'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'

function SpotifyCardsSection ({ sectionTitle, jsonFile }) {
  const [playlists, setPlaylists] = useState()
  const [slides, setSlides] = useState()
  const freeModeBoolean = true

  useEffect(() => {
    fetch(jsonFile)
      .then(res => res.json())
      .then(data => setPlaylists(data))
  }, [])

  useEffect(() => {
    if (!playlists) return

    const slides = []
    for (let i = 0; i < playlists.length; i++) {
      if (playlists[i]) {
        slides.push(
          <SwiperSlide key={i}>
            <SpotifyCard
              link={playlists[i].link}
              name={playlists[i].name}
              author={playlists[i].author}
              img={playlists[i].img}
            />
            <div className='h-4' />
            {playlists[i + 1] && (
              <SpotifyCard
                link={playlists[i + 1].link}
                name={playlists[i + 1].name}
                author={playlists[i + 1].author}
                img={playlists[i + 1].img}
              />
            )}
          </SwiperSlide>
        )
        i++ // Incrementar i adicionalmente para saltar el siguiente elemento ya procesado
      }
    }
    setSlides(slides)
  }, [playlists])

  return (
    <section id='merch' className='text-[white] uppercase'>
      <h2 className='text-2xl font-bold mb-2'>{sectionTitle}</h2>
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
        {slides}
      </Swiper>
    </section>
  )
}

export default SpotifyCardsSection

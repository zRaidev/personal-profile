import { useState, useRef } from 'react'
import Player from '../assets/icons/player.svg'

function YoutubeFrame ({ VideoName, urlId }) {
  const iframeRef = useRef(null)
  const [visibility, setVisibility] = useState(null)

  const onClickVisibility = () => {
    playVideo()
    setTimeout(() => {
      setVisibility(true)
    }, 100) // Pequeña espera para que el iframe procese el mensaje.
  }

  const playVideo = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      )
    }
  }

  return (
    <article className='relative'>
      <div
        className={`relative w-[327px] h-[183px] rounded-lg ${visibility && 'hidden'}`}
        onClick={onClickVisibility}
      >
        <div className='absolute top-2.5 left-3 w-[19rem]'>
          <h3
            className='whitespace-nowrap overflow-hidden text-ellipsis'
            style={{
              textShadow: '2px 2px 5px rgba(0, 0, 0, .8)'
            }}
          >
            {VideoName}
          </h3>
        </div>
        <img src={Player} alt='play video' className='w-44 flex absolute -bottom-2 right-0 left-0 m-auto' />
        <img
          src={`https://img.youtube.com/vi/${urlId}/hqdefault.jpg`} alt='youtube thumbail'
          className='absolute top-0 left-0 -z-10 w-[327px] h-[183px] rounded-lg object-cover'
        />
      </div>
      {visibility && (
        <iframe
          ref={iframeRef}
          width='327px'
          height='183px'
          src={`https://www.youtube.com/embed/${urlId}?enablejsapi=1&autoplay=1`} // Habilitar API y autoplay
          className='rounded-lg'
          allow='autoplay; encrypted-media'
          allowFullScreen
        />
      )}
    </article>
  )
}

export default YoutubeFrame

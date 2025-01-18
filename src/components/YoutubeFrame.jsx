import Player from '../assets/icons/player.svg'

function YoutubeFrame ({ VideoName, url }) {
  const stopAutoPlay = '?autoplay=1'
  return (
    <article className='relative' onClick={className='display:none'}>
      <div className='absolute w-[327px] h-[183px] bg-black rounded-lg'>
        <h3 className='mt-2.5 ml-4'>{VideoName}</h3>
        <img src={Player} alt='play video' className='w-44 flex absolute bottom-0 right-0 left-0 m-auto' />
      </div>
      <iframe
        width='327px' height='183px'
        src={`${url}${stopAutoPlay}`}
        className='rounded-lg'
      />
    </article>
  )
}

export default YoutubeFrame

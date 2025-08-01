import Icons from './HeroIcons.jsx'

function Hero ({ targetBlank, textColor }) {
  return (
    <header className='relative mb-6'>
      <div className='relative'>
        <div className='absolute top-0 w-screen h-44 bg-gradient-to-b from-[#c2ab8e7b] via-transparent to-transparent' />
        <img src='/images/profile.webp' alt='profile image' className='w-screen max-h-[55vh] object-cover object-top' />
        <div className='absolute -bottom-0.5 w-screen h-44 bg-gradient-to-t from-[#c2ab8e] to-transparent' />
      </div>
      <div className='w-full flex justify-center absolute bottom-3'>
        <Icons color={textColor} targetBlank={targetBlank} />
      </div>
    </header>
  )
}

export default Hero

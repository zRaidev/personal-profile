import profileImg from '../assets/images/profile-card.webp' // create the img file

function ProfileCardSection ({ name }) {
  return (
    <section className='pr-8'>
      <div className='w-full h-48 flex justify-center relative'>
        <div className='top-0 w-full h-[40%] bg-black opacity-10 absolute z-10 rounded-tr-xl rounded-tl-xl' /> {/*BLACK TOP BG*/}
        <div className='top-[40%] w-full h-[60%] bg-black opacity-5 absolute z-10 rounded-br-xl rounded-bl-xl' /> {/*PRIMARY BOTTOM BG*/}
        <div className='flex flex-col justify-center absolute'>
          <div className='flex justify-center'>
            <img
              src={profileImg} alt='prfile-image'
              className='rounded-full w-24 z-20 relative mt-3'
            />
          </div>
          <h2 className='text-white text-center font-semibold z-20 relative mt-3 text-xl'>{name}</h2>
        </div>
      </div>
    </section>
  )
}

export default ProfileCardSection

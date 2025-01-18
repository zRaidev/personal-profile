import YoutubeFrame from './YoutubeFrame.jsx'

function YoutubeVideos () {
  return (
    <section className='text-white'>
      <div className='pr-5 mb-4'>
        <div className='w-full h-px bg-[#0000001f]' />
      </div>
      <div className=''>
        <h2 className='uppercase text-2xl font-bold mb-2'>Latest videos</h2>
      </div>
      <YoutubeFrame
        VideoName='Video example #1'
        url='https://www.youtube.com/embed/tgbNymZ7vqY'
      />
    </section>
  )
}

export default YoutubeVideos

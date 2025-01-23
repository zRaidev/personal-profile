function SpotifyCard ({ link, name, author, img }) {
  return (
    <a href={link}>
      <article className='!flex w-[17rem] h-24 bg-[--dark-primary] text-white font-semibold rounded-lg'>
        <img src={img} alt={name + ' spotify playlist image'} className='w-24 h-24 object-cover rounded-tl-lg rounded-bl-lg' />
        <div className='flex flex-col justify-between pl-3 py-2.5 w-52'>
          <div className='flex flex-col gap-[3px]'>
            <p className='inline text-sm'>{name}</p>
            <p className='inline text-xs opacity-45'>{author}</p>
          </div>
          <div>
            <button className='text-xs font-semibold border-2 py-1 px-2 rounded-2xl text-left'>Play</button>
          </div>
        </div>
      </article>
    </a>
  )
}

export default SpotifyCard

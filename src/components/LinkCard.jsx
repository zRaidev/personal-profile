function LinkCard ({ text, img, subtxt, link }) {
  return (
    <a href={link}>
      <article className='!flex w-[17rem] h-24 bg-[--dark-primary] font-semibold rounded-lg'>
        <img src={img} alt={text + ' image'} className='w-24 h-24 object-cover rounded-tl-lg rounded-bl-lg' />
        <div className='flex flex-col justify-center align-middle p-3 w-52'>
          <p className='inline text-sm'>{text}</p>
          <p className='inline text-xs'>{subtxt}</p>
        </div>
      </article>
    </a>
  )
}

export default LinkCard

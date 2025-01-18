import Discounts from './components/Discounts.jsx'
import Hero from './components/Hero.jsx'
import Navigation from './components/Navigation.jsx'
import YoutubeVideos from './components/YoutubeVideos.jsx'

function App () {
  const targetBlank = false // true = open in other window
  const textColor = '#ffffff'
  return (
    <div>
      <Hero textColor={textColor} targetBlank={targetBlank} />

      <main className='pl-5'>
        <Navigation />
        <Discounts />
        <YoutubeVideos />
      </main>
    </div>
  )
}

export default App

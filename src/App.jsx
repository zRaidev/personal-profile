import LinkCardSection from './components/LinkCardSection.jsx'
import Hero from './components/Hero.jsx'
import Navigation from './components/Navigation.jsx'
import YoutubeVideos from './components/YoutubeVideos.jsx'
import SectionSeparator from './components/SectionSeparator.jsx'
import SpotifyCardsSection from './components/SpotifyCardsSection.jsx'
import ProfileCardSection from './components/ProfileCardSection.jsx'
import LinkCard from './components/LinkCard.jsx'
import Footer from './components/Footer.jsx'

function App () {
  const targetBlank = false // true = open in other window
  const textColor = '#ffffff'

  return (
    <div>
      <Hero textColor={textColor} targetBlank={targetBlank} />

      <main className='pl-5'>
        <Navigation />
        <LinkCardSection
          sectionTitle='Merchandising'
          jsonFile='/data/Discounts.json'
          id='merch'
        />
        <SectionSeparator />

        <YoutubeVideos id='latest-videos' />
        <SectionSeparator />

        <LinkCardSection
          sectionTitle='Amazon products'
          jsonFile='/data/AmazonProducts.json'
          id='amazon-products'
        />
        <SectionSeparator />

        <SpotifyCardsSection
          sectionTitle='Spotify Playlists'
          jsonFile='/data/SpotifyCards.json'
          id='spotify'
        />
        <SectionSeparator />

        <ProfileCardSection
          name='Maria Flores'
        />
        <SectionSeparator />

        <LinkCard
          width='w-[94%]'
          text='Your Business'
          img='images/business.webp'
          link='https://www.google.com'
        />
        <SectionSeparator />
      </main>
      <Footer />
    </div>
  )
}

export default App

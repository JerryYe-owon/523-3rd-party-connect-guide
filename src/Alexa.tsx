import { getImageUrl } from './utils/image'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

const Alexa = () => {
  return (
    <div className="mx-auto max-w-2xl">
      <h2>How do I connect to Alexa?</h2>
      <h3>Preparation</h3>
      <div className='context'>1. Make sure the smart device has been added to the EdgeAnt App and that the device is online.</div>
      <div className='context'>2. Make sure the Alexa App is installed.</div>
      <div className='note'>Note: In the App, change the name of the device to an easily identifiable name such as Alexa; names are usually in English, such as "Living Room"</div>

      <h3>Link Skill</h3>
      <div className='context'>1. Tap on “Skills” in the Alexa app -{'>'} more.</div>
      <LazyLoadImage src={getImageUrl('alexa-skill', 'webp')} alt={'alexa-skill'} effect="blur" className="my-3 h-auto w-full" />
      <div className='context'>2. Then search for "Smartlife". Tap "Enable" to enable the Skill.</div>
      <LazyLoadImage src={getImageUrl('alexa-enable', 'webp')} alt={'alexa-enable'} effect="blur" className="my-3 h-auto w-full" />
      <div className='context'>3. If you have already installed the Smartlife app on your phone, please select <span className='highlight'>'Use another account'</span>. If not, please skip this step.</div>
      <LazyLoadImage src={getImageUrl('alexa-use-another-account', 'webp')} alt={'another-account'} effect="blur" className="my-3 h-auto w-full" />
      <div className='context'>4. Select the region of your EdgeAnt APP account, and enter your EdgeAnt APP account.</div>
      <LazyLoadImage src={getImageUrl('region', 'webp')} alt={'alexa-region'} effect="blur" className="my-3 h-auto w-full" />
      <div className='context'>5. Select EdgeAnt, then tap "Link devices".</div>
      <LazyLoadImage src={getImageUrl('link', 'webp')} alt={'alex-link'} effect="blur" className="my-3 h-auto w-full" />
      <div className='context'>6. Log in to your EdgeAnt account to authorize it with Alexa. Now you can start your smart home journey.</div>

      <h3>Common commands</h3>
      <div className='context'>Control the device via voice commandsNow you can control your smart device with Echo. You can control your device with the following commands:</div>
      <ul className='highlight'>- Alexa, what's the temperature of [thermostat name]</ul>
      <ul className='highlight'>- Alexa, set [thermostat name] to [target temperature]</ul>
      <ul className='highlight'>- Alexa, set [thermostat name] to Heat/Cool/Auto mode</ul>
    </div>
  )
}

export default Alexa

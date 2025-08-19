import { getImageUrl } from './utils/image'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

const Google = () => {
  return (
    <div className="mx-auto max-w-2xl">
      <h2>How to link to Google Assistant?</h2>
      <h3>Preparation</h3>
      <div className='context'>1. Make sure the smart device has been added to the EdgeAnt App and that the device is online.</div>
      <div className='context'>2. Make sure the Alexa App is installed.</div>
      
      <h3>Link Skill</h3>
      <div className='context'>1. Click on "Personal Center" in the upper right corner in Google Assistant APP.</div>
      <LazyLoadImage src={getImageUrl('google-center', 'webp')} alt={'alexa-skill'} className="my-3 h-auto w-full" />
      <div className='context'>2. Go to “Devices” -{'>'} “Add devices” -{'>'} “Link a smart home device”.</div>
      <LazyLoadImage src={getImageUrl('google-device-0', 'webp')} alt={'alexa-skill'} className="my-3 h-auto w-full" />
      <LazyLoadImage src={getImageUrl('google-device-1', 'webp')} alt={'alexa-skill'} className="my-3 h-auto w-full" />
      <LazyLoadImage src={getImageUrl('google-device-2', 'webp')} alt={'alexa-skill'} className="my-3 h-auto w-full" />
      <div className='context'>3. Then search for “Smartlife”and tap it.</div>
      <LazyLoadImage src={getImageUrl('google-enable', 'webp')} alt={'alexa-skill'} className="my-3 h-auto w-full" />
      <div className='context'>4. If you have already installed the Smartlife app on your phone, please select <span className='highlight'>'Use another account'</span>. If not, please skip this step.</div>
      <LazyLoadImage src={getImageUrl('google-use-another-account', 'webp')} alt={'alexa-skill'} className="my-3 h-auto w-full" />
      <div className='context'>5. Select the region of your EdgeAnt APP account, and enter your EdgeAnt APP account.</div>
      <LazyLoadImage src={getImageUrl('link', 'webp')} alt={'alexa-skill'} className="my-3 h-auto w-full" />
      <div className='context'>6. Select EdgeAnt, then tap “Link devices”.</div>
      <LazyLoadImage src={getImageUrl('region', 'webp')} alt={'alexa-skill'} className="my-3 h-auto w-full" />
      <div className='context'>7. Log in to your EdgeAnt account to authorize it with Google. Now you can start your smart home journey.</div>

      <h3>Common commands</h3>
      <div className='context'>Control the device via voice commandsNow you can control your smart device with Google. You can control your device with the following commands:</div>
      <ul className='highlight'>- Google, what's the temperature of [thermostat name]</ul>
      <ul className='highlight'>- Google, set [thermostat name] to [target temperature]</ul>
      <ul className='highlight'>- Google, set [thermostat name] to Heat/Cool/Auto mode</ul>
    </div>
  )
}

export default Google

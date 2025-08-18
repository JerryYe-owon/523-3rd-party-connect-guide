import { getImageUrl } from './utils/image'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

const Alexa = () => {
  return (
    <div className="mx-auto max-w-2xl">
      <h2>How do I connect to Alexa?</h2>
      <div>Preparation</div>
      <div>1. Make sure the smart device has been added to the EdgeAnt App and that the device is online. 2. Make sure the Alexa App is installed.</div>
      <div>Note: In the App, change the name of the device to an easily identifiable name such as Alexa; names are usually in English, such as "Living Room"</div>
      <LazyLoadImage src={getImageUrl('alexa-skill', 'webp')} alt={'alexa-skill'} effect="blur" className="my-3 h-auto w-full" />
      <div>2. Then search for "Smartlife". Tap "Enable" to enable the Skill.</div>
      <LazyLoadImage src={getImageUrl('alexa-enable', 'webp')} alt={'alexa-enable'} effect="blur" className="my-3 h-auto w-full" />
      <LazyLoadImage src={getImageUrl('alexa-use-another-account', 'webp')} alt={'another-account'} effect="blur" className="my-3 h-auto w-full" />
      <LazyLoadImage src={getImageUrl('region', 'webp')} alt={'alexa-region'} effect="blur" className="my-3 h-auto w-full" />
      <LazyLoadImage src={getImageUrl('link', 'webp')} alt={'alex-link'} effect="blur" className="my-3 h-auto w-full" />
    </div>
  )
}

export default Alexa

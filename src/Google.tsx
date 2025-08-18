import { getImageUrl } from './utils/image'

const Google = () => {
  return (
    <div className="mx-auto max-w-2xl">
      <h2>How to link to Google Assistant?</h2>
      <div>Preparation</div>
      <div>1. Make sure the smart device has been added to the EdgeAnt App and that the device is online. 2. Make sure the Google Assistant App is installed.</div>
      <img src={getImageUrl('google-center', 'webp')} alt={'alexa-skill'} className="my-3 h-auto w-full" />
      <img src={getImageUrl('google-device-0', 'webp')} alt={'alexa-skill'} className="my-3 h-auto w-full" />
      <img src={getImageUrl('google-device-1', 'webp')} alt={'alexa-skill'} className="my-3 h-auto w-full" />
      <img src={getImageUrl('google-device-2', 'webp')} alt={'alexa-skill'} className="my-3 h-auto w-full" />
      <img src={getImageUrl('google-enable', 'webp')} alt={'alexa-skill'} className="my-3 h-auto w-full" />
      <img src={getImageUrl('google-use-another-account', 'webp')} alt={'alexa-skill'} className="my-3 h-auto w-full" />
      <img src={getImageUrl('link', 'webp')} alt={'alexa-skill'} className="my-3 h-auto w-full" />
      <img src={getImageUrl('region', 'webp')} alt={'alexa-skill'} className="my-3 h-auto w-full" />
    </div>
  )
}

export default Google

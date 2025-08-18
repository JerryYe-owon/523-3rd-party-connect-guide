export const getImageUrl = (name: string, ext: string = 'png') => {
  return new URL(`../assets/${name}.${ext}`, import.meta.url).href
}

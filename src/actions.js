export const SELECT_IMAGE = 'SELECT_IMAGE'

export const selectImage = (image) => {
  return {
    type: SELECT_IMAGE,
    image
  }
}

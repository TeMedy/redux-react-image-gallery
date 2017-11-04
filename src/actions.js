export const SELECT_IMAGE = 'SELECT_IMAGE'

export const selectImage = (image) => {
  return {
    type: SELECT_IMAGE,
    image
  }
}

export const LOAD_IMAGES = 'LOAD_IMAGES'

export const loadImages = () => {
  return {
    type: LOAD_IMAGES
  }
}

export const TEST = 'TEST'

export const test = () => {
  return {
    type: TEST
  }
}

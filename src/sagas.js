import { fetchImages } from './flickr.js'
import { put, take, fork } from 'redux-saga/effects'
import { test, LOAD_IMAGES } from './actions.js'

function* loadImages(){
  try{
    console.log('---1');
    const images = yield fetchImages();
    console.log('---2');
    yield put({type: 'IMAGES_LOADED', images});
    console.log('---3');
    yield put({type: 'SELECT_IMAGE', image: images[0]})
  }catch(error) {
    console.log(error)
  }
}

export function* whatchForLoadImages(){
  while(true){
    yield take(LOAD_IMAGES);
    yield fork(loadImages);
  }
}

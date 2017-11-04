const API_ENDPOINT = 'https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=ba61f9c6b7c18d89ca60eaf221113fae&gallery_id=72157689861291606&per_page=5&page=1&format=json&nojsoncallback=1&api_sig=0dfec5f190c2c0bf103f80d8f745f3c7';

export const fetchImages = () => {
  return fetch(API_ENDPOINT).then(function (response) {
    return response.json().then(function (json) {
      return json.photos.photo.map(
        ({farm, server, id, secret}) => `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
      );
    })
  })
};

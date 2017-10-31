import React, {Component} from 'react'
import { connect } from 'react-redux'

const flickrImages = [
  "http://c1.staticflickr.com/5/4073/4802439506_3e723debfd_b.jpg",
  "https://farm2.staticflickr.com/1581/25283151224_50f8da511e.jpg",
  "https://farm2.staticflickr.com/1653/25265109363_f204ea7b54.jpg",
  "https://farm2.staticflickr.com/1571/25911417225_a74c8041b0.jpg",
  "https://farm2.staticflickr.com/1450/25888412766_44745cbca3.jpg"
];

export class Gallery extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch({type: 'TEST'});
    console.log(props);
    this.state = {
      images: flickrImages,
      selectedImage: flickrImages[0]
    }
  }

  componentDidMount() {
    //const API_KEY = '0586620c7e45c59ec7ad3fb9c83247ef';
    //const API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.interestingness.+getList&api_key=${API_KEY}&format=json&nojsoncallback=1&per_page=5`;+
    //const API_ENDPOINT = 'https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=d744c1e0a3e63c555a94c99cbacb3e17&gallery_id=72157689861291606&per_page=5&page=1&format=json&nojsoncallback=1&api_sig=0dd6051c071567d21100536d303d05a3';
    const API_ENDPOINT = 'https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=7b410b0828a05256eddec004b2b4f75f&gallery_id=72157689861291606&per_page=5&page=1&format=json&nojsoncallback=1&api_sig=63acbe55965fee170beb4e5488772e30';

    fetch(API_ENDPOINT).then((response) => {
      return response.json().then((json) => {
        const images = json.photos.photo.map(({farm, server, id, secret}) => {
            return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
        });

        this.setState({images, selectedImage: images[0]});
      })
    })
  }

  handleThumbClick(selectedImage){
    this.setState({
      selectedImage
    });
  }


  render() {
    const {images, selectedImage} = this.state;
    return (
      <div className="image-gallery">
        <div className="gallery-image">
          <div>
            <img src={selectedImage} />
          </div>
        </div>
        <div className="image-scroller">
          {images.map((image, index) => (
            <div key={index} onClick = {this.handleThumbClick.bind(this, image)}>
              <img src={image}/>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default connect()(Gallery);

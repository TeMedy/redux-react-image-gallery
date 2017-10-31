const defaultState = {
  images: [
    "http://c1.staticflickr.com/5/4073/4802439506_3e723debfd_b.jpg",
    "https://farm2.staticflickr.com/1581/25283151224_50f8da511e.jpg",
    "https://farm2.staticflickr.com/1653/25265109363_f204ea7b54.jpg",
    "https://farm2.staticflickr.com/1571/25911417225_a74c8041b0.jpg",
    "https://farm2.staticflickr.com/1450/25888412766_44745cbca3.jpg"
  ],
  selectedImage: "http://c1.staticflickr.com/5/4073/4802439506_3e723debfd_b.jpg",
};


export default function images(state = defaultState, action){
  switch (action.type){
    case 'TEST':
      console.log('This is a test action.');
      console.log(state, action);
      return state;
    case 'SELECT_IMAGE':
      return {...state, selectedImage: action.image};
    default:
      return state;
  }
}

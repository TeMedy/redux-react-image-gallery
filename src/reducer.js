export default function images(state, action){
  switch (action.type){
    case 'TEST':
      console.log('This is a test action.');
      console.log(state, action); 
      return state;
    default:
      return state;
  }
}

// const imageUrl = (width, height) =>
//   "https://images.unsplash.com/photo-1789948731559-5d113d8744b6?w=" + width + "&h=" + height + "&fit=crop&auto=format"

const imageUrl = ({photo, width, height, sat = 0}) => {
  "https://images.unsplash.com/" + photo + "?w=" + width + "&h=" + height + "&fit=crop&auto=format" + sat


}



export default imageUrl

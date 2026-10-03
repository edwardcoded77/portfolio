


const img1 = "https://images.unsplash.com/photo-1664997296099-5a0b63ab0196"
const img2 = "https://images.unsplash.com/photo-1774390469799-5b82471f79f0"
const img3 = "https://images.unsplash.com/photo-1782568886372-381b6fd00624"



const galleryUrl = (img, w, h , hue, bri ) => {
    return img + "?w=" + w + "&h=" + h + "&hue=" + hue + "&bri=" + bri + "&auto=format&fit=crop"
    
}


function Gallery(){
    return (
        <div className="grid">
            <img src={galleryUrl(img1,300,200,10,-20)} alt ="gallery img1"/>
            <img src={galleryUrl(img2,300,200,-30,-20 )} alt ="gallery img2"/>
            <img src={galleryUrl(img3,300,200,-90,-20)} alt ="gallery img3"/>
        </div>
    )}



    export default Gallery
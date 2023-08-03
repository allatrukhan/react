import './Image.css';

function Image({img, alt}) {

    return (
      <div class="gallery">
        <img src={img} alt={alt} />
      </div>
      
    );
  }
  export default Image;
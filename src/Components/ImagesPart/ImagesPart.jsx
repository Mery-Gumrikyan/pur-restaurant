import "./images.css";

// import ImagesItems from "./ImageItems";

function ImagesPart() {
  const images = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg",
    "/images/photo5.jpg",
    "/images/photo6.jpg",
    "/images/photo7.jpg",
    "/images/photo8.jpg",
    "/images/photo9.jpg",
    "/images/photo10.jpg",
    "/images/photo11.jpg",
    "/images/photo12.jpg",
  ];

  return (
    <div className="images centralize" id="images">
      <h2 className="heading">Լուսանկարներ</h2>
      <div className="imagesWrapper">
        {images.map((img) => (
          <img src={img} key={img} alt="Pur Restaurant" className="img"></img>
        ))}
      </div>
    </div>
  );
}

export default ImagesPart;

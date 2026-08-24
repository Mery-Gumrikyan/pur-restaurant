function ImagesItems({ images }) {
  return (
    <div className="imagesWrapper">
      {images.map((img) => (
        <img src={img} key={img} alt="Pur Restaurant" className="img"></img>
      ))}
    </div>
  );
}

export default ImagesItems;

function DishesItems({ dishes }) {
  return (
    <div className="dishesWrapper">
      {dishes.map((item) => (
        <div key={item.id} className="dishesItem">
          <img src={item.img} alt={item.name} className="dishesItemImg" />
          <div className="dishesItemTextPart">
            <h5 className="dishesItemName">{item.name}</h5>
            <p className="dishesItemDescription">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DishesItems;

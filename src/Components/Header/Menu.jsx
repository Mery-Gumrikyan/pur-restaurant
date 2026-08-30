function Menu({ isMobile, display }) {
  const menu = [
    { name: "Գլխավոր", id: "main" },
    { name: "Ճաշատեսակներ", id: "dishes" },
    { name: "Լուսանկարներ", id: "images" },
    { name: "Մեր Մասին", id: "about" },
  ];

  return (
    <>
      <nav
        className={`menu ${isMobile ? "mobileMenu" : "webMenu"} ${!display && "noDisplay"}`}
      >
        {menu.map((item) => (
          <a href={`/#${item.id}`} key={item.id} className="menuItem">
            {item.name}
          </a>
        ))}
      </nav>
    </>
  );
}

export default Menu;

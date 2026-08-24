import { Link } from "react-router";

function Menu({ isMobile, display }) {
  const menu = [
    { name: "Գլխավոր", id: "main" },
    { name: "Ճաշատեսակներ", id: "dishes" },
    { name: "Լուսանկարներ", id: "images" },
    { name: "Մեր Մասին", id: "about" },
  ];

  return (
    <>
      <ul
        className={`menu ${isMobile ? "mobileMenu" : "webMenu"} ${!display && "noDisplay"}`}
      >
        {menu.map((item) => (
          <li key={item.id} className="menuItem">
            <Link to={`/#${item.id}`} className="menuItem">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Menu;

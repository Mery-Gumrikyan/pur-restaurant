import DishesItems from "./DishesItems";

import "./dishes.css";

function Dishes() {
  const dishes = [
    {
      id: 1,
      img: "/images/file.jpg",
      name: "Ֆիլե Մինիոն",
      description:
        "Չկրկնվող ու յուրօրինակ համերի համար համեցեք ՝ Ծաղկաձորի Փուռ ընտանեկան ռեստորան",
    },
    {
      id: 2,
      img: "/images/dzvp.jpg",
      name: "Լոլիկով Ձվաձեղ",
      description:
        "Ծաղկաձորում օրը սկսելու լավագույն տարեբերակը Համեցեք ՓՈՒՌ ընտանեկան ռեստորան",
    },
    {
      id: 3,
      img: "/images/kartofil.jpg",
      name: "Փռի կարտոֆիլ",
      description:
        "Համեցեք ՓՈՒՌ ընտանեկան ռեստորան վայելելու սիրելի վայրում՝ փռում պատրաստված կարտոֆիլը",
    },
    {
      id: 4,
      img: "/images/xash.jpg",
      name: "Խաշ",
      description:
        "Համեցեք ՓՈՒՌ ռեստորան՝ համտեսելու ամենահամեղ խաշը ամենասիրելի մարդկանց հետ",
    },
    {
      id: 5,
      img: "/images/hav.jpg",
      name: "Հարբած Հավ",
      description:
        "Երբևէ փորձե՞լ եք փռում գարեջրով եփված թարմ տեղական հավ։ Եթե ոչ, ապա ժամանակն է",
    },
    {
      id: 6,
      img: "/images/xashlama.jpg",
      name: "Խաշլամա",
      description:
        "Հայկական խոհանոցի յուրահատուկ համերը կգտնեք Ծաղկաձորի ՓՈՒՌ ընտանեկան ռեստորանում",
    },
    {
      id: 7,
      img: "/images/apur.jpg",
      name: "Ապուր",
      description:
        "Գունեղ ու անչափ ախորժելի Համեցեք Ծաղկաձորի ՓՈՒՌ ընտանեկան ռեստորան ջերմ և մտերմիկ",
    },
    {
      id: 8,
      img: "/images/harisa.jpg",
      name: "Հարիսա",
      description:
        "Վայելեք հայկական անավդական հարիսան թթվի տեսականիով. այն էլ`Փուռ ռեստորանի բաղադրատոմսով",
    },
  ];

  return (
    <div className="dishes centralize" id="dishes">
      <h2 className="heading">Ճաշատեսակներ</h2>
      <DishesItems dishes={dishes} />
    </div>
  );
}

export default Dishes;

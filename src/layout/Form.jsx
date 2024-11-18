import { useState } from "react";

import PlusIcon from "../assets/plus-solid.svg";
import MinusIcon from "../assets/minus-solid.svg";

const Form = () => {
  const [search, setSearch] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleQuantity = (action) => {
    switch (action) {
      case "add":
        setQuantity(quantity + 1);
        break;
      case "remove":
        if (quantity > 0) {
          setQuantity(quantity - 1);
        }
        break;
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddProduct();
      }}
      className="bg-black/20 p-5 rounded-2xl lg:col-span-2 lg:row-span-1 flex flex-col gap-4"
    >
      <label htmlFor="addProduct" className="font-bold text-lg ">
        Agrega productos a tu carrito
      </label>

      <div className="flex gap-4">
        <span className="font-bold">Cantidad:</span>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => handleQuantity("remove")}
            className="w-6 h-6 grid place-items-center bg-neutral-800/80  rounded-full hover:bg-neutral-400/40"
          >
            <img className="w-3 h-3" src={MinusIcon} alt="Minus a product" />
          </button>
          <span>{quantity}</span>
          <button
            type="button"
            onClick={() => handleQuantity("add")}
            className="w-6 h-6 grid place-items-center bg-neutral-800/80  rounded-full hover:bg-neutral-400/40"
          >
            <img className="w-3 h-3" src={PlusIcon} alt="Add a product" />
          </button>
        </div>
      </div>

      <div className=" flex gap-3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          id="addProduct"
          className="w-full rounded-full py-2 px-4 text-neutral-900 bg-white/90"
        />
        <button
          type="submit"
          className="bg-neutral-800/80 px-5 rounded-full hover:bg-neutral-400/40"
        >
          Agregar
        </button>
      </div>
    </form>
  );
};

export default Form;

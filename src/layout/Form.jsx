import { useState } from "react";

import PlusIcon from "../assets/plus-solid.svg";
import MinusIcon from "../assets/minus-solid.svg";

const Form = () => {
  const [search, setSearch] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [zero, setZero] = useState(false);
  const [validate, setValidate] = useState(true);

  const handleQuantity = (action) => {
    switch (action) {
      case "add":
        setQuantity(quantity + 1);
        setZero(false);
        break;
      case "remove":
        if (quantity > 0) {
          setQuantity(quantity - 1);
          setZero(false);
        }
        break;
    }
  };

  const [loading, setLoading] = useState(false);

  const fetchData = (idProduct) => {
    setLoading(true);
    setValidate(true);
    fetch(`https://fakestoreapi.com/products/${idProduct}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response;
      })
      .then((response) => response.json())
      .then((response) => {
        const data = { ...response, quantity: quantity };
        console.log(data);
      })
      .catch(() => {
        setValidate(false);
      })
      .finally(() => {
        setSearch("");
        setQuantity(0);
        setLoading(false);
      });
  };

  const validateIdProduct = () => {
    if (search == "") {
      setValidate(false);
    } else {
      if (quantity == 0) {
        setZero(true);
        return;
      }
      const idProduct = Number(search);
      if (idProduct > 0 && idProduct < 21) {
        fetchData(idProduct);
        setValidate(true);
      } else {
        setValidate(false);
      }
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        validateIdProduct();
      }}
      className="bg-black/20 p-5 rounded-2xl lg:col-span-2 lg:row-span-1 flex flex-col gap-4"
    >
      <label htmlFor="addProduct" className="font-bold text-lg ">
        Agrega productos a tu carrito
      </label>

      <div className="flex gap-4 items-center">
        <span className="font-bold">Cantidad:</span>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => handleQuantity("remove")}
            className="w-6 h-6 grid place-items-center bg-neutral-800/80 dark:bg-neutral-500 rounded-full hover:bg-neutral-400/40  dark:hover:bg-neutral-700"
          >
            <img className="w-3 h-3" src={MinusIcon} alt="Minus a product" />
          </button>
          <span>{quantity}</span>
          <button
            type="button"
            onClick={() => handleQuantity("add")}
            className="w-6 h-6 grid place-items-center bg-neutral-800/80 dark:bg-neutral-500 rounded-full hover:bg-neutral-400/40 dark:hover:bg-neutral-700"
          >
            <img className="w-3 h-3" src={PlusIcon} alt="Add a product" />
          </button>
        </div>
        {zero && (
          <span className="text-red-400 ">
            Elija una cantidad para continuar
          </span>
        )}
      </div>

      <div className=" flex gap-3">
        {/* TODO: add message of error on input */}
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            if (e.target.value.length > 0) {
              setValidate(true);
            }
          }}
          id="addProduct"
          autoComplete="off"
          placeholder="Ingrese el ID del producto (1-20)"
          className={`w-full rounded-full py-2 px-4 text-neutral-900   ${validate ? "bg-white/90" : "bg-red-400/60"}`}
        />
        <button
          type="submit"
          className={`bg-neutral-800/80 px-5 rounded-full bg-neutral-800/80 dark:bg-neutral-500 rounded-full hover:bg-neutral-400/40  dark:hover:bg-neutral-700 ${loading && "animate-pulse"}`}
        >
          Agregar
        </button>
      </div>
    </form>
  );
};

export default Form;

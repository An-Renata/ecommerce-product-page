import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
function ProductProvider({ children }) {
  const [quantity, setQuantity] = useState(1);
  const [isHoverCart, setIsHoverCart] = useState(false);
  const [addProduct, setAddProduct] = useState(1);

  function handleIncrement() {
    setQuantity((value) => value + 1);
  }

  function handleDecrement() {
    if (quantity === 1) return;

    setQuantity((value) => value - 1);
  }

  function handleOnClick() {
    setIsHoverCart((val) => !val);
  }

  return (
    <ProductContext.Provider
      value={{
        quantity,
        handleDecrement,
        handleIncrement,
        isHoverCart,
        handleOnClick,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

function useProduct() {
  const context = useContext(ProductContext);

  if (context === undefined) {
    throw new Error("useProduct must be used within a ProductProvider");
  }

  return context;
}

export { ProductProvider, useProduct };

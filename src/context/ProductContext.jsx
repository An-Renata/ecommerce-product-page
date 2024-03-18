import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
function ProductProvider({ children }) {
  const [quantity, setQuantity] = useState(1);
  const [isHoverCart, setIsHoverCart] = useState(false);
  const [addProduct, setAddProduct] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

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

  function handleAddToCart() {
    setIsLoading(true);

    // imitating a delay to show the loading and posting data to the server
    setTimeout(() => {
      setAddProduct((val) => val + quantity);
      setQuantity(1);
      setIsLoading(false);
    }, 2000);
  }

  return (
    <ProductContext.Provider
      value={{
        quantity,
        handleDecrement,
        handleIncrement,
        isHoverCart,
        handleOnClick,
        handleAddToCart,
        isLoading,
        addProduct,
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

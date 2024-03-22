import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

// eslint-disable-next-line react/prop-types
function ProductProvider({ children }) {
  const [addQuantity, setQuantity] = useState(1);
  const [isHoverCart, setIsHoverCart] = useState(false);

  const [addProduct, setAddProduct] = useState({
    quantity: 0,
    title: "Fall limited edition sneakers",
    price: 125,
    img: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  function handleIncrement() {
    setQuantity((value) => value + 1);
  }

  function handleDecrement() {
    if (addQuantity === 1) return;

    setQuantity((value) => value - 1);
  }

  function handleOnClick() {
    setIsHoverCart((val) => !val);
  }

  function handleAddToCart() {
    setIsLoading(true);

    // imitating a delay to show the loading and posting data to the server
    setTimeout(() => {
      setAddProduct({
        ...addProduct,
        quantity: addProduct.quantity + addQuantity,
        img: "../images/image-product-1-thumbnail.jpg",
      });
      setQuantity(1);
      setIsLoading(false);
    }, 2000);
  }

  function handleClearCart() {
    setAddProduct({
      ...addProduct,
      quantity: 0,
    });
  }

  return (
    <ProductContext.Provider
      value={{
        addQuantity,
        handleDecrement,
        handleIncrement,
        isHoverCart,
        handleOnClick,
        handleAddToCart,
        isLoading,
        addProduct,
        handleClearCart,
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

function ImagesComponent() {
  return (
    <figure>
      <div style={{ padding: "0 80px" }}>
        <img
          style={{ borderRadius: "10px" }}
          src="../public/images/image-product-1.jpg"
          alt="product image"
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "20px",
          }}
        >
          <img
            src="../public/images/image-product-1-thumbnail.jpg"
            alt="product"
            style={{ width: "20%", borderRadius: "10px" }}
          />
          <img
            src="../public/images/image-product-2-thumbnail.jpg"
            alt="product"
            style={{ width: "20%", borderRadius: "10px" }}
          />
          <img
            src="../public/images/image-product-3-thumbnail.jpg"
            alt="product"
            style={{ width: "20%", borderRadius: "10px" }}
          />
          <img
            src="../public/images/image-product-4-thumbnail.jpg"
            alt="product"
            style={{ width: "20%", borderRadius: "10px" }}
          />
        </div>
      </div>
    </figure>
  );
}

export default ImagesComponent;

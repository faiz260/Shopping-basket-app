import React from "react"
import { useSelector } from "react-redux"
import { store, add } from "../Store/index"
import { ProductItem } from "../global"

const Product = () => {

  const products = useSelector((state: ProductItem[]) => state)

  return (
    <div>
      {products.map((product: ProductItem) => (
        <button
          key={product.id}
          disabled={product.added}
          onClick={() => {
            store.dispatch(add(product))
          }}
          style={{
            width: `${100 / products.length}%`,
            position: "relative",
            height: 200
          }}
        >
          <span
            style={{
              backgroundImage: `url(${product.imageUrl})`,
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              backgroundSize: "cover",
              backgroundPosition: "center 40%"
            }}
          />
          <span >
            {product.title}
          </span>
        </button>
      ))}
    </div>
  )
}

export { Product }

import React, { useEffect, useState } from "react";
import { getProducts, getProductsCount } from "../../functions/product";
import ProductCard from "../cards/ProductCard";
import LoadingCard from "../cards/LoadingCard";
import { Pagination } from "antd";
import laptop from "../../images/hp.jpg";
import { Card, Tooltip } from "antd";
const BestSellers = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productsCount, setProductsCount] = useState(0);
  const [page, setPage] = useState(1);

  return (
    <>
      <div className="container">
        {loading ? (
          <LoadingCard count={3} />
        ) : (
          <div className="row">
            <div className="col-md-4">
              <Card
                cover={
                  <img
                    src={laptop}
                    style={{ height: "150px", objectFit: "cover" }}
                    className="p-1"
                  />
                }
              ></Card>
            </div>
            ))
          </div>
        )}
      </div>
    </>
  );
};

export default BestSellers;

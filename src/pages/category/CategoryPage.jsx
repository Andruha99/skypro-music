import React from "react";
import { useParams } from "react-router-dom";
import { CATEGORIES } from "../../constants";

export const CategoryPage = () => {
  const params = useParams();
  const category = CATEGORIES.find(
    (category) => category.id === Number(params.id)
  );
  return <h1>{category.nameCategory}</h1>;
};

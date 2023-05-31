import React from "react";
import Container from "../Shared/Container/Container";
import { categories } from "../../data/categoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {
  return (
    <>
      <Container>
        <div className="pt-4  flex flex-row items-center justify-between overflow-x-auto">
          {
            categories.map((item, index) => <CategoryBox label={item.label} icon={item.icon} key={index}>
              {item.label}
            </CategoryBox>)
          }
        </div>
      </Container>
    </>
  );
};

export default Categories;

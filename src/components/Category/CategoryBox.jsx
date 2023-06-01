import queryString from "query-string";
import React from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";

const CategoryBox = ({ label, icon: Icon }) => {
  //   const [params, setParams] = useSearchParams();
  //   const value = params.get("category");
  const navigate = useNavigate();
  //   console.log(value);

  const handleClickByCategory = () => {
    let currentQuary = {};
    if (params) {
      currentQuary = queryString.parse(params.toString());
    }
    const updateQuary = {
      ...currentQuary,
      category: label,
    };
    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: updateQuary,
      },
      {
        skipNull: true,
      }
    );
    navigate(url);
  };
  return (
    <div
      onClick={handleClickByCategory}
      className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500 cursor-pointer"
    >
      <Icon size={26}></Icon>
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;

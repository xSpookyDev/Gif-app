import { useState} from "react";
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);

  const OnAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
        
      <h1 className="text-6xl text-blue-900">GifExpertApp</h1>
      <AddCategory onNewCategory={OnAddCategory} />
      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};

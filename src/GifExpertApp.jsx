import { useState } from "react"
import { AddCategory } from "./components/AddCategory"



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one punch', 'dragon ball'])
    
    const OnAddCategory =()=>{
        
       // setCategories([ ...categories, "valorant"])
       setCategories(cat => ['valorant', ...categories])
       
    }

  return (
    <>
        {/* title*/}
    <h1>GifExpertApp</h1>

        {/* input*/}
    <AddCategory setCategories={setCategories}></AddCategory>

        {/* Gifs List*/}
    
    
    <ol>
        {categories.map(category => {
            return <li key={category}>{category}</li>
        })}
        <li></li>
        <li></li>
        <li></li>
    </ol>
    </>
  )
}

import React from "react";

function CategoryFilter({ categories , selectedFilter, onFilterClicked}) {
  function handleClick(event){
    const filterCategory = event.target.name;
    onFilterClicked(filterCategory);
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button 
        className={selectedFilter === category ? "selected": ""}
        key={category} 
        name={category} 
        onClick={handleClick}>{category}</button>
      ))
      }
    </div>
  );
}

export default CategoryFilter;

import { useRouter } from 'next/router';
import { useState } from 'react';

const CategoryMenu = ({ categories, activeCategory, setActiveCategory }) => {
  const router = useRouter();
  
  const handleClick = (category) => {
    setActiveCategory(category);
    router.push(`/?category=${category}`);
  };
  
  return (
    <div>
      <span>Filter by category: </span>
      <select value={activeCategory} onChange={(e) => handleClick(e.target.value)}>
        <option value="">All</option>
        {categories && categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryMenu;

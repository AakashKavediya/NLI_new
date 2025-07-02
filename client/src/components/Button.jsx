import React from 'react';

const Button = ({ onClick, label, type, isActive }) => {
  const buttonClasses = `font-poppins font-bold py-2 px-4 rounded 
    bg-white text-[#fafaf9]
     
    ${isActive ? 'bg-black text-[#fafaf9]' : 'bg-[#fafaf9] text-white'}
    `;

  return (
    <button className={buttonClasses} onClick={onClick} type={type}>
      {label}
    </button>
  );
};

export default Button;

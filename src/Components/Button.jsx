import React from 'react'
import { arrowRight } from '../assets/icons'

const Button = ({label,iconURL,backgroundColor,textColor,borderColor,fullWidth}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border rounded-full font-montserrat text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor} `
        : ` bg-coral-red  text-white border-x-coral-red`
    } ${fullWidth && 'w-full'}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrowRight"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
}

export default Button
'use client'
import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon }: CustomButtonProps) => {
  return (
    <button
       disabled={false}
       type={btnType || "button"}
       className={`custom-btn ${containerStyles}  hover:secondary-orange`}
       onClick={handleClick}
    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton

import React from 'react'

interface CarousalBoxProps{
    Image:string;
}
const CarousalBox:React.FC<CarousalBoxProps> = ({Image}) => {
  return (
    <div className='w-[120px] h-[50px] '>
            <img className='w-full h-full object-contain' src={Image} alt="carousal image for streaming sources" />
    </div>
  )
}

export default CarousalBox
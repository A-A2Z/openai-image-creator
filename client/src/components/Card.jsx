import React from 'react'
import { download } from '../assets';
import { downloadImage } from '../utils';
const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className='rounded-xl group relative shadow-card hover:shadow-cardhover card'>
      <img
        className='w-full h-auto obeject-cover rounded-xl'
        src={photo}
        alt={prompt}
       />
       <div className='group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md'>
          <p className='text-white text-md overflow-y-auto prompt'>{prompt}</p>
          <div className='mt-5 flex justify-between items-center gap-2'>
            <div className='flex items-center gap-2'>
              <div className='bg-green-700 text-white w-7 h-7 rounded-full flex justify-center items-center font-bold'>
                {name[0]}
              </div>
              <p className='text-white font-bold'>{name}</p>
            </div>
            <button 
              type='button' 
              onClick={() => downloadImage(_id, photo)}
              className='outline-none bg-transparent border-none'
            >
              <img
                className='w-6 h-6 object-contain'
                src={download}
                alt='download'
              />
            </button>
          </div>
       </div>
    </div>
  )
}

export default Card
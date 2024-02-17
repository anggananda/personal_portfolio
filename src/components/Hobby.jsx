import React, {useState, useEffect} from 'react'
import hobbyList from '../data/hobby.json'

const Hobby = () => {
  const [data, setData] = useState([])
  useEffect(() =>{
    setData(hobbyList.hobby)
  },[])
  console.log(data)

  return (
    <div id='hobby' className='pt-[5rem] flex justify-center items-center px-6'>
      <div className='w-full max-w-[1100px]'>
        <div className="flex justify-center items-center flex-col">
          <h1 className='font-bold text-xs md:text-sm uppercase text-[#A96A68]'>My Hobby</h1>
          <p className='font-semibold md:text-lg'>Some hobbies that I sometimes do</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
          {data.map(e =>(
            <div key={e.id} className="shadow-md rounded-md p-4 flex flex-col items-center gap-4">
                <h1 className='text-center font-semibold uppercase text-xs md:text-sm'>{e.name}</h1>
                <div className='w-full rounded-md overflow-hidden'>
                  <img className='w-full rounded-md hover:scale-105' src={`./img/${e.img}`} alt="" />
                </div>
                <p className='font-light text-xs md:text-sm text-justify'>{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hobby
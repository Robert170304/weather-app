import React from 'react'
import { UilSlidersVAlt } from '@iconscout/react-unicons'

function TopBtns(props) {

    const [isPending, startTransition] = React.useTransition()

    function openModal() {
        props.setShowMore(true)
    }

    const cities = [
        {
            id: 1,
            title: 'London',
        },{
            id: 2,
            title: 'Sydney',
        },{
            id: 3,
            title: 'Tokyo',
        },{
            id: 4,
            title: 'Paris',
        },
    ]

  return (<>
    <div className='top-btns flex items-center justify-around my-6'>
        {cities.map((city, id) => {
            return <button key={id} 
            className='text-white text-lg font-medium mx-1.5'
            onClick={() => props.setQuery({q: city.title})}>{city.title}</button>
        })}
        <UilSlidersVAlt className="text-white cursor-pointer mx-1.5" onClick={openModal}/>
    </div>
    </>
  )
}

export default TopBtns
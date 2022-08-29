import React from 'react'

function TopButtun() {

  const cities = [
    {
      id: 1,
      title: 'London'
    },
    {
      id: 2,
      title: 'Paris'
    },
    {
      id: 3,
      title: 'New York'
    },
    {
      id: 4,
      title: 'Sidney'
    },
  ]
  return (
    <div className="flex items-center my-6 justify-around">
      {cities.map((city) => (
        <button key={city.id} className="text-white text-lg font-medium">{city.title}</button>
      ))}
    </div>
  )
}

export default TopButtun
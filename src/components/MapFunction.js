// import React from 'react'

// const MapFunction = () => {
//     const arr = ["ReactJs", "NodeJs", "ExpressJs", "AngularJs"]
//   return (
//     <div>
//       {
//         arr.map(
//             (value,index) => <li key={index}>{value}</li>
//         )
//       }
//     </div>
//   )
// }

// export default MapFunction

import React from 'react'

const MapFunction = () => {
  const arrObject = [
    { id: 1, title: "ReactJs" },
    { id: 2, title: "NodeJs" },
    { id: 3, title: "AngularJs" },
    { id: 4, title: "ExpressJs" },
  ]

  return (
    <div>
      {arrObject.map(
        (value) => (<li key={value.id}>{value.title}</li>)
      )}
    </div>
  )
}

export default MapFunction


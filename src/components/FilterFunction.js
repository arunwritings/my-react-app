import React from 'react'

// const FilterFunction = () => {
//     const names = ['Hari','Krishna','Kohli','Kumar'];
//     const filtered = names.filter(name => name.includes('K'))
//   return (
//     <div>
//       {
//         filtered.map(item => <li>{item}</li>)
//       }
//     </div>
//   )
// }

const FilterFunction = () => {
    const arr = [10,20,30,40,50];
    const filtered = arr.filter(item => item>25)
    return (
        <div>
            {
                filtered.map(item => <li>{item}</li>)
            }
        </div>
    );

}


export default FilterFunction

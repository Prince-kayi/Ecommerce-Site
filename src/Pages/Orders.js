 import React from "react"
 const Blog=()=> {

  const list = [
    {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
    },
    {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
    },
    ];

    const numbers=[1,2,3,4,5,6,7]
    const newNumbers=numbers.map(function(number){
      return number *5;
    })
    console.log(newNumbers);
  return (

    <div className='blog-list'>
   
      {list.map((item,inex)=>{
        return(
     <div key={item.objectID}>
       <span> <a href ={item.url}>{item.title}</a></span>
       <h1>{item.num_comments}</h1>
       <h4>{item.points}</h4>




     </div>

        )

      })}
    </div>
  )
}
export default Blog
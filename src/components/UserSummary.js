import { useEffect, useState } from 'react'

function UserSummary({data}) {

    const [showMore, setShowMore] = useState(false)

  const toggleButton = async(e) => {
      e.preventDefault()
      console.log('show more')
      setShowMore(true)
    }


useEffect(()=>{

})
return (
    <div>
        {
        (data == null) ? console.log('there is no data') : 
        (
        <ul>
        <li>{data.name.first} {data.name.last}, ({data.name.title}) </li> 
        <li>{data.email}</li>  
        </ul>
        ) 
        }

    <input type="button" value="More" onClick={(e) => toggleButton(e)}/>
        {
        (showMore) ? (
        <ul>
        <li>{data.cell}</li> 
        <li>{data.gender}</li> 
        <li>{data.picture.thumbnail}</li> 
        </ul>
        ) 
        : setShowMore(false)
        }

       
    </div>
          
)
}

export default UserSummary
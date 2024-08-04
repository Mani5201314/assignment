import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
const data = () => {

    let [val, setval] = useState("")
    
    useEffect(() => {
        axios.get("").then(res => {
            console.log(res)
            setval(res.data)
        })
    },[])
    

  return (
    <div>
      
    </div>
  )
}

export default data

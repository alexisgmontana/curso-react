
import { useEffect, useState } from "react"
import { RiSurroundSoundLine } from "react-icons/ri"

const ConsumiendoApi = () => {

    const [ posts, setPosts ] = useState([])

    useEffect( ()=>{

        const getData = fetch("https://jsonplaceholder.typicode.com/posts")

        getData
        .then( (res)=> res.json() )
        .then( (res) => setPosts(res) )
        .catch( (err)=> console.log("then: ", err) )

    } , [])

    console.log(posts)

  return (
    <div>ConsumiendoApi</div>
  )
}

export default ConsumiendoApi
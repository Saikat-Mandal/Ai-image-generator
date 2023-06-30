/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React , {useState , useEffect} from 'react'
import Card from '../components/Card'
import Main from '../components/Main'
import Loader from '../components/Loader'
import Formfield from '../components/Formfield'

const RenderCards = ({data , title}) =>{
  if(data?.length > 0) {
    return data.map(post=><Card key={post.id} {...post}/>  )
  }

  return (
    <h2>{title}</h2>
  )
}


function Home() {
  const [loading , setLoading] = useState(false)
  const [allPost , setAllPost] = useState(null)
  const [searchText , setSearchText] = useState("")
  return (
    <>
      <Main/>
      <div className='flex flex-col px-6 md:px-8'>
        <label htmlFor="searchImg">Search posts</label>
        <input type="search" name='searchImg' placeholder='search for anything...' className='p-2 rounded-md border-2'/>
      </div>
      <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
      {
        searchText ?(
          <RenderCards data={[]} title="No search results found"/>
        ) : ( <RenderCards data={[]} title="No posts found" />)
      }

      </div>
    </>
   
  )
}

export default Home
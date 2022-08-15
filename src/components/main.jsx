import React, {useEffect, useState} from 'react'
import { getPoke, getImg } from "../functions/functions"

const Main = () => {

  const [pokes, setPokes] = useState(null)
  const [imgs, setImgs] = useState([])
  const [str, setStr] = useState('')

  useEffect(()=>{
    getPoke(setPokes)
  },[])

  useEffect(()=>{
    getImg(setImgs)
  },[])

  let nArr= [],
  result=[]
  if(pokes !==  null){
    nArr = pokes.slice(0,(pokes.length))
    result = nArr.filter(item => item.name.match(str))
  }

  return (
    <>
      <header className='header'>
            <h1>PokeApp</h1>

        <input placeholder={'Find Pokemon'} list="pokemon" onChange={e => {
          setStr(e.target.value)
        }}></input>
        <datalist id="pokemon">
        {pokes !== null ? (
            pokes.map(poke => (
              <option value={poke.name}/>
            ))) : null}
        </datalist>
      </header>

      <div className='indication'>
        <p>Select a Pokemon to see its Stats</p>
      </div>

      <div className='content'>
      {pokes !== null ? (
        result.map((item) => ( 
          <div className='item' key={item.index}>
            <a id ="character" href={`/character/${item.index}`}><img id="character" src={imgs[item.index-1]} alt=""/></a>
            <a id ="character" href={`/character/${item.index}`}>{item.name}</a>
          </div>
        ))
      ) : ("Error al cargar los pokemon")}
      </div>
    </>
  )
}

export default Main
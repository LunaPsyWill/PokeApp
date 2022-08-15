import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getSpecificPoke, getImg, getStat } from "../functions/functions"
import DataTable from 'react-data-table-component'

    

const Character = () => {
  const params = useParams(),
  id = params.id

  const [pokes, setPokes] = useState({})
  const [imgs, setImgs] = useState({})
  const [stats, setStats] = useState([])
  
  useEffect(()=>{
    getSpecificPoke(id, setPokes)
  },[id])

  useEffect(()=>{
    getImg(setImgs)
  },[])

  useEffect(()=>{
    getStat(id, setStats)
  },[id])

  const columns = [
    {
      name : 'Name',
      selector : row => row.name,
      sortable : true
    },
    {
      name : 'Value',
      selector : row => row.base_stat,
      sortable : true,
      grow: 1.5
    }
  ]

  return (
    <>
      <div className='cont-character'>
      <h3>Personaje: {pokes.name}</h3>
      <img src={imgs[id-1]} alt=""/>

      <div className='dataTbl'>
      <DataTable 
        columns={columns}
        data = {stats}
      />
      </div>
      </div>
    </>
  )
}

export default Character
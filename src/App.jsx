import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from './features/gitUserSlice'


const App = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => {
    // console.log(state.app);
    return state.app
    
    
    
  })
  console.log(data)
  if (data.loading) {
    return (
      <h2>Loading.................</h2>
    )
  }
  if (data.error != null) {
    return (
      <h3>{data.error}</h3>
    )

  }
  return (
    <div>
      Thunk RTK
      <button onClick={() => { dispatch(getAllData()) }}>get github user</button>
      {
        data.users.map((val,index) => {
          return (
            <div>
              <li key={val.id}>Name:{val.login}</li>


            </div>
          )
          
        })
        
      }

    </div>
  )
}

export default App

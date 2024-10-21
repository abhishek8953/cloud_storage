import { useState } from 'react'

import './App.css'
import {FolderUpload} from './FolderUpload'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FolderUpload/>
    
    </>
  )
}

export default App

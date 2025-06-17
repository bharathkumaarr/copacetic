import Welcome from './components/layouts/Welcome'
import Layout from './components/layouts/Layout'
import Dashboard from './components/layouts/Dashboard'
import Challenge from './components/layouts/Challenge'
import { useState, useEffect } from 'react'

import WORDS from './utils/VOCAB.json'
import {getWordByIndex, PLAN} from './utils'

function App() {
  const [selectedPage, setSelectedPage]  = useState(0)
  // const selectedPage = 2 //zero for welcome, one for dashboard, two is for challenge

  const [name, setName] = useState('')
  const [day, setDay] = useState(1)
  const [datetime, setDatetime] = useState(null)
  const [history, setHistory] = useState([])
  const [attempts, setAttempts] = useState(0)

  const daysWords = PLAN[day].map((idx)=>{
    return getWordByIndex(WORDS, idx).word
  })
  


  function handleChangePage(pageIndex) {
    setSelectedPage(pageIndex)
  }

  function handleCreateAccount() {
    if (!name) {return}
    localStorage.setItem('username', name)
    handleChangePage(1)
  }
  useEffect(()=>{
    //callback function triggered on page load
    if (!localStorage) {return} //exit if no acces to localstorage

    if (localStorage.getItem('username') ) {
      setName(localStorage.getItem('username'))

      setSelectedPage(1)    
    }
  }, [ ])

  const pages = {
    0: <Welcome handleCreateAccount={handleCreateAccount} username="hello world" name={name} setName={setName} />,
    1: <Dashboard name={name} attempts={attempts} PLAN={PLAN} day={day} handleChangePage={handleChangePage} daysWords={daysWords} datetime={datetime}/>,
    2: <Challenge/>
  }


  return (
    <Layout> 
      {pages[selectedPage]}
    </Layout>

  )
}

export default App

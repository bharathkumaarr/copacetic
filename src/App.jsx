import Welcome from './components/layouts/Welcome'
import Layout from './components/layouts/Layout'
import Dashboard from './components/layouts/Dashboard'
import Challenge from './components/layouts/Challenge'
import { useState, useEffect } from 'react'

function App() {
  const [selectedPage, setSelectedPage]  = useState(0)
  // const selectedPage = 2 //zero for welcome, one for dashboard, two is for challenge

  const [name, setName] = useState('')

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
    1: <Dashboard name={name}/>,
    2: <Challenge/>
  }


  return (
    <Layout> 
      {pages[selectedPage]}
    </Layout>

  )
}

export default App

import Welcome from './components/layouts/Welcome'
import Layout from './components/layouts/Layout'
import Dashboard from './components/layouts/Dashboard'
import Challenge from './components/layouts/Challenge'
function App() {
  const selectedPage = 1 //zero for welcome, one for dashboard, two is for challenge

  const pages = {
    0: <Welcome/>,
    1: <Dashboard/>,
    2: <Challenge/>
  }
  return (
    <Layout> 
      {pages[selectedPage]}
    </Layout>

  )
}

export default App

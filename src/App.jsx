import Welcome from './components/layouts/Welcome'
import Layout from './components/layouts/Layout'
import Dashboard from './components/layouts/Dashboard'
import Challenge from './components/layouts/Challenge'
function App() {

  return (
    <Layout> 
      <Welcome/>
      <Dashboard/>
      <Challenge/>
    </Layout>

  )
}

export default App



import Layout from './components/Layout'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'



function App() {
    return (
        <Router>
            {/* <AuthProvider>
                */}
            <Layout>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/estadisticas' element={<Dashboard/>} />
                </Routes>
            </Layout>
            {/* 
            </AuthProvider> */}
            {/* si */}
        </Router>
    )
}

export default App

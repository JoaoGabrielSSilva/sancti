import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Layout from './components/Layout'
import SaintDetail from './pages/SaintDetail'
import Timeline from './pages/Timeline'
import BibleView from './pages/BibleView'
import CatechismView from './pages/CatechismView'



function App() {
    return (
        <BrowserRouter> 
            <Layout >
                <Routes >
                    <Route path="/" element={<Home />} />
                    <Route path="/saint/:id" element={<SaintDetail />} />
                    <Route path="/timeline" element={<Timeline />} />
                    <Route path="/bible" element={<BibleView />} />
                    <Route path="/catechism" element={<CatechismView />} />
                </Routes>
            </Layout>    
        </BrowserRouter>
    )
}

export default App
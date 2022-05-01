import { Routes, Route } from 'react-router-dom';
import Layout from './layout'
import Index from './pages/index'
import About from './pages/about'

export default (
  <Layout>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="about" element={<About />} />
    </Routes>
  </Layout>
)
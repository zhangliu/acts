import { Routes, Route } from 'react-router-dom';
import Layout from './layout'
import Index from './pages/index'
import About from './pages/about'
import Person from './pages/person'
import PersonDetail from './pages/person/detail'

export default (
  <Layout>
    <Routes>
      <Route path="/" element={<Person />} />
      <Route path="/person" element={<Person />} />
      <Route path="/person/detail" element={<PersonDetail />} />
      <Route path="about" element={<About />} />
    </Routes>
  </Layout>
)
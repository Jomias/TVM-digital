import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './pages/Contact/index';
import HomePage from './pages/HomePage/index';
import Industries from './pages/Industries/index';
import OurTeam from './pages/OurTeam/index';
import WhyChooseUs from './pages/WhyChooseUs/index';
import Works from './pages/Works/index';
import { FormProvider } from './context/FormContext';
import { PageProvider } from './context/PageContext';
import NotFound from './components/UI/NotFound';
import ManageNav from './components/ManageNav';
import Manage from './pages/Manage/index'
import ServiceList from './pages/Manage/Services/ServiceList';

function App() {
  return (
    <PageProvider>
      <FormProvider>
        <BrowserRouter>
          <Header />
          <ManageNav />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/whychooseus" element={<WhyChooseUs />} />
            <Route exact path="/ourteam" element={<OurTeam />} />
            <Route exact path="/industries" element={<Industries />} />
            <Route exact path="/works" element={<Works />} />
            <Route exact path="/manage" element={<Manage />} />
            <Route exact path="/manage/services" element={<ServiceList />} />
            <Route exact path="/manage/partners" element={<div>partners</div>} />
            <Route exact path="/manage/industries" element={<div>industries</div>} />
            <Route exact path="/manage/leaders" element={<div>leaders</div>} />
            <Route exact path="/manage/reasons" element={<div>reasons</div>} />
            <Route exact path="/manage/benefits" element={<div>benefits</div>} />
            <Route exact path="/manage/projects" element={<div>projects</div>} />
            <Route exact path="/manage/recents" element={<div>recents</div>} />
            <Route exact path="/manage/proprietarys" element={<div>proprietarys</div>} />
            <Route exact path="/manage/slideShows" element={<div>slideShows</div>} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </FormProvider>
    </PageProvider>
  );
}

export default App;

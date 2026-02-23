import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster as HotToaster } from 'react-hot-toast';
import LandingPage from './pages/LandingPage';
import MapPage from './pages/MapPage';
import NotFound from './pages/NotFound';
import { Web3Provider } from './lib/web3';

const App = () => (
  <Web3Provider>
    <TooltipProvider>
      <Toaster />
      <HotToaster position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </Web3Provider>
);

export default App;
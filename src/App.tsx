import React from 'react';
import { SanskritiProvider, useSanskriti } from './context/SanskritiContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { StoriesPage } from './pages/StoriesPage';
import { SpecialityPage } from './pages/SpecialityPage';
import { LivingHeritagePage } from './pages/LivingHeritagePage';
import { HeritageWatchPage } from './pages/HeritageWatchPage';
import { OfflinePacksPage } from './pages/OfflinePacksPage';
import { SchoolModePage } from './pages/SchoolModePage';
import { AboutPage } from './pages/AboutPage';

import { SearchModal } from './components/modals/SearchModal';
import { ItineraryDrawer } from './components/modals/ItineraryDrawer';
import { AccessibilityModal } from './components/modals/AccessibilityModal';
import { DestinationDetailModal } from './components/modals/DestinationDetailModal';
import { StoryDetailModal } from './components/modals/StoryDetailModal';
import { Home, Compass, BookOpen, Sparkles, Calendar } from 'lucide-react';

const MainAppContent: React.FC = () => {
  const { currentPage, setCurrentPage, setIsItineraryOpen, itinerary } = useSanskriti();

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'explore':
        return <ExplorePage />;
      case 'stories':
        return <StoriesPage />;
      case 'speciality':
        return <SpecialityPage />;
      case 'living-heritage':
        return <LivingHeritagePage />;
      case 'heritage-watch':
        return <HeritageWatchPage />;
      case 'offline-packs':
        return <OfflinePacksPage />;
      case 'school-mode':
        return <SchoolModePage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F3E5CC] text-[#543B25] relative selection:bg-[#B59A70]/30 selection:text-[#543B25]">
      
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {renderActivePage()}
      </main>

      {/* Global Modals & Drawers */}
      <SearchModal />
      <ItineraryDrawer />
      <AccessibilityModal />
      <DestinationDetailModal />
      <StoryDetailModal />

      {/* Refined Heritage Footer */}
      <Footer />

      {/* Mobile Bottom Quick Navigation Bar (Ensures Home, Explore, Stories & Speciality are always accessible) */}
      <nav 
        className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FBF4E6]/95 backdrop-blur-md border-t border-gold/50 shadow-lg py-2 px-3 flex items-center justify-around"
        aria-label="Mobile Navigation"
      >
        <button
          type="button"
          onClick={() => setCurrentPage('home')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-medium transition-colors ${
            currentPage === 'home' ? 'text-olive font-bold' : 'text-text-secondary'
          }`}
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </button>

        <button
          type="button"
          onClick={() => setCurrentPage('explore')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-medium transition-colors ${
            currentPage === 'explore' ? 'text-olive font-bold' : 'text-text-secondary'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>Explore</span>
        </button>

        <button
          type="button"
          onClick={() => setCurrentPage('stories')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-medium transition-colors ${
            currentPage === 'stories' ? 'text-olive font-bold' : 'text-text-secondary'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Stories</span>
        </button>

        <button
          type="button"
          onClick={() => setCurrentPage('speciality')}
          className={`flex flex-col items-center gap-0.5 text-[10px] font-medium transition-colors ${
            currentPage === 'speciality' ? 'text-olive font-bold' : 'text-text-secondary'
          }`}
        >
          <Sparkles className="w-4 h-4 text-saffron" />
          <span>Speciality</span>
        </button>

        <button
          type="button"
          onClick={() => setIsItineraryOpen(true)}
          className="flex flex-col items-center gap-0.5 text-[10px] font-medium text-text-secondary relative"
        >
          <Calendar className="w-4 h-4 text-olive" />
          <span>My Day</span>
          {itinerary.length > 0 && (
            <span className="absolute -top-1 right-2 w-3.5 h-3.5 rounded-full bg-terracotta text-white text-[9px] font-bold flex items-center justify-center">
              {itinerary.length}
            </span>
          )}
        </button>
      </nav>

    </div>
  );
};

export function App() {
  return (
    <SanskritiProvider>
      <MainAppContent />
    </SanskritiProvider>
  );
}

export default App;

// Import the HomePage component and Sidebar
import HomePage from '../HomePage/HomePage';
import Sidebar from '../../SideBar/Sidebar';

// Home component receives showSideBar (boolean) and searchQuery (string) as props
function Home({ showSideBar, searchQuery }) {
  return (
    <div className="home-page">

      {/* Sidebar section: rendered only if showSideBar is true */}
      <div className="sidebar">
        {showSideBar && <Sidebar />}
      </div>

      {/* Main content area that renders HomePage */}
      <div className="homepage">
        <HomePage showSideBar={showSideBar} searchQuery={searchQuery} />
      </div>

    </div>
  );
}

export default Home;

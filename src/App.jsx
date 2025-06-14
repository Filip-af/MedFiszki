import { Routes, Route, Link } from 'react-router-dom'
import { HomeIcon, PlusIcon, BookOpenIcon } from '@heroicons/react/24/outline'
import Home from './pages/Home'
import Create from './pages/Create'
import Review from './pages/Review'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-primary">MedFiszki</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/" className="btn btn-primary flex items-center gap-2">
                <HomeIcon className="w-5 h-5" />
                Home
              </Link>
              <Link to="/create" className="btn btn-primary flex items-center gap-2">
                <PlusIcon className="w-5 h-5" />
                Create
              </Link>
              <Link to="/review" className="btn btn-primary flex items-center gap-2">
                <BookOpenIcon className="w-5 h-5" />
                Review
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/review" element={<Review />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App 
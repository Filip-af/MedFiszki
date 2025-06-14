import { Link } from 'react-router-dom'
import { PlusIcon, BookOpenIcon } from '@heroicons/react/24/outline'

function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to MedFiszki
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your personal medical flashcard companion. Create, manage, and review your medical knowledge with ease.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Link
          to="/create"
          className="card hover:shadow-lg transition-shadow flex items-center gap-4"
        >
          <div className="bg-primary/10 p-3 rounded-lg">
            <PlusIcon className="w-8 h-8 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-1">Create Flashcards</h2>
            <p className="text-gray-600">
              Add new flashcards with questions and answers
            </p>
          </div>
        </Link>

        <Link
          to="/review"
          className="card hover:shadow-lg transition-shadow flex items-center gap-4"
        >
          <div className="bg-secondary/10 p-3 rounded-lg">
            <BookOpenIcon className="w-8 h-8 text-secondary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-1">Review Cards</h2>
            <p className="text-gray-600">
              Test your knowledge with interactive flashcards
            </p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home 
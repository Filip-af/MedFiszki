import { useState, useEffect } from 'react'
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'

function Review() {
  const [cards, setCards] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem('flashcards') || '[]')
    setCards(savedCards)
    
    // Extract unique categories
    const uniqueCategories = [...new Set(savedCards.map(card => card.category))]
    setCategories(uniqueCategories)
  }, [])

  const filteredCards = selectedCategory === 'all'
    ? cards
    : cards.filter(card => card.category === selectedCategory)

  const currentCard = filteredCards[currentIndex]

  const handleNext = () => {
    setShowAnswer(false)
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length)
  }

  const handlePrevious = () => {
    setShowAnswer(false)
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length)
  }

  if (filteredCards.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          No flashcards available
        </h2>
        <p className="text-gray-600">
          Create some flashcards first to start reviewing!
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Review Flashcards</h1>
        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value)
            setCurrentIndex(0)
            setShowAnswer(false)
          }}
          className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="card min-h-[400px] flex flex-col">
        <div className="flex-grow">
          <div className="text-center mb-4">
            <span className="inline-block px-2 py-1 text-sm bg-primary/10 text-primary rounded">
              {currentCard.category}
            </span>
          </div>
          
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              {currentCard.question}
            </h2>
            {showAnswer && (
              <p className="text-gray-600 text-lg">
                {currentCard.answer}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={handlePrevious}
            className="btn btn-primary flex items-center gap-2"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Previous
          </button>
          
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="btn btn-secondary flex items-center gap-2"
          >
            {showAnswer ? (
              <>
                <XMarkIcon className="w-5 h-5" />
                Hide Answer
              </>
            ) : (
              <>
                <CheckIcon className="w-5 h-5" />
                Show Answer
              </>
            )}
          </button>

          <button
            onClick={handleNext}
            className="btn btn-primary flex items-center gap-2"
          >
            Next
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="text-center text-gray-600">
        Card {currentIndex + 1} of {filteredCards.length}
      </div>
    </div>
  )
}

export default Review 
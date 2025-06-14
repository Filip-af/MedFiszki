import { useState } from 'react'
import { PlusIcon, TrashIcon } from '@heroicons/react/24/outline'

function Create() {
  const [cards, setCards] = useState([])
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [category, setCategory] = useState('')

  const handleAddCard = (e) => {
    e.preventDefault()
    if (!question || !answer || !category) return

    const newCard = {
      id: Date.now(),
      question,
      answer,
      category,
    }

    setCards([...cards, newCard])
    setQuestion('')
    setAnswer('')
    setCategory('')

    // Save to localStorage
    const savedCards = JSON.parse(localStorage.getItem('flashcards') || '[]')
    localStorage.setItem('flashcards', JSON.stringify([...savedCards, newCard]))
  }

  const handleDeleteCard = (id) => {
    const updatedCards = cards.filter(card => card.id !== id)
    setCards(updatedCards)
    localStorage.setItem('flashcards', JSON.stringify(updatedCards))
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Create Flashcards</h1>

      <form onSubmit={handleAddCard} className="card space-y-4">
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            placeholder="e.g., Anatomy, Pharmacology"
          />
        </div>

        <div>
          <label htmlFor="question" className="block text-sm font-medium text-gray-700">
            Question
          </label>
          <textarea
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            placeholder="Enter your question here..."
          />
        </div>

        <div>
          <label htmlFor="answer" className="block text-sm font-medium text-gray-700">
            Answer
          </label>
          <textarea
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            placeholder="Enter the answer here..."
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary flex items-center gap-2"
        >
          <PlusIcon className="w-5 h-5" />
          Add Flashcard
        </button>
      </form>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Your Flashcards</h2>
        <div className="grid gap-4">
          {cards.map((card) => (
            <div key={card.id} className="card relative">
              <button
                onClick={() => handleDeleteCard(card.id)}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
              >
                <TrashIcon className="w-5 h-5" />
              </button>
              <div className="space-y-2">
                <span className="inline-block px-2 py-1 text-sm bg-primary/10 text-primary rounded">
                  {card.category}
                </span>
                <h3 className="font-medium">{card.question}</h3>
                <p className="text-gray-600">{card.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Create 
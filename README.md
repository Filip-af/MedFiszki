# MedFiszki - Medical Flashcards App

A clean, minimal, and user-friendly flashcard web application designed for medical students. Create, manage, and review medical knowledge with ease.

## Features

- Create and manage flashcards with categories
- Interactive review system
- Clean and modern UI
- Persistent storage using localStorage
- Mobile-responsive design

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router
- Heroicons

## Development Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/MedFiszki.git
cd MedFiszki
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Building for Production

1. Build the project:
```bash
npm run build
```

2. Preview the production build:
```bash
npm run preview
```

## Deploying to GitHub Pages

1. Update the `vite.config.js` file to match your repository name:
```js
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Update this line
})
```

2. Add the following to your `package.json`:
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  },
  "devDependencies": {
    "gh-pages": "^6.1.0"
  }
}
```

3. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

4. Deploy to GitHub Pages:
```bash
npm run deploy
```

5. Configure GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Set the source to "gh-pages" branch
   - Save the changes

Your app will be available at `https://yourusername.github.io/MedFiszki/`

## Usage

1. **Create Flashcards**
   - Navigate to the Create page
   - Add a category for your flashcard
   - Enter the question and answer
   - Click "Add Flashcard"

2. **Review Flashcards**
   - Go to the Review page
   - Select a category or review all cards
   - Use the navigation buttons to move between cards
   - Click "Show Answer" to reveal the answer
   - Click "Hide Answer" to hide it again

## Contributing

Feel free to submit issues and enhancement requests!
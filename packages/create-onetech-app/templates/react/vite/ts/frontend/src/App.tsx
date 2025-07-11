import { useState, type JSX } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0)

  const increment = (): void => {
    setCount((prev) => prev + 1)
  }

  return (
    <div className="text-center font-sans flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="flex justify-center items-center gap-8 py-6">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={viteLogo}
            className="w-24 h-24 hover:drop-shadow-xl transition-transform duration-300 hover:scale-110"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={reactLogo}
            className="w-24 h-24 hover:drop-shadow-xl transition-transform duration-300 hover:scale-110"
            alt="React logo"
          />
        </a>
      </div>

      <h1 className="text-4xl font-bold mb-6">Vite + React + TypeScript</h1>

      <div className="bg-white dark:bg-[#1a1a1a] rounded-xl p-8 shadow-md inline-block">
        <button
          onClick={increment}
          className="bg-[#646cff] text-white px-6 py-2 rounded-lg font-semibold text-base transition-colors duration-300 hover:bg-[#747bff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#646cff]"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          Edit <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

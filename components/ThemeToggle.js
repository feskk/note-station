// components/ThemeToggle.js
export default function ThemeToggle({ darkMode, toggleTheme }) {
    return (
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    )
  }
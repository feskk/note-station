// components/NoteInput.js
'use client'
import { useState } from 'react'

export default function NoteInput({ onAddNote }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !content.trim()) return

    // Créer l'objet note avec la structure correcte
    const newNote = {
      title: title.trim(),
      content: content.trim(),
      date: new Date().toISOString(),
      id: Date.now() // Ajouter un ID unique
    }

    // Appeler la fonction onAddNote avec la nouvelle note
    if (onAddNote) {
      onAddNote(newNote)
    }

    // Réinitialiser les champs
    setTitle('')
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titre de la note"
          className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
      </div>
      <div className="mb-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Contenu de la note"
          className="w-full p-2 border rounded-lg h-32 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Ajouter la note
      </button>
    </form>
  )
}
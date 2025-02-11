// components/NoteList.js
import NoteItem from './NoteItem'

export default function NoteList({ notes, onDeleteNote }) {
  return (
    <div className="space-y-4">
      {notes.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          Aucune note pour le moment
        </p>
      ) : (
        notes.map(note => (
          <NoteItem
            key={note.id}
            note={note}
            onDelete={onDeleteNote}
          />
        ))
      )}
    </div>
  )
}
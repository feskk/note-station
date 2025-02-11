// components/NoteItem.js
export default function NoteItem({ note, onDelete }) {
    // Vérification que note existe et a les propriétés requises
    if (!note || !note.title || !note.content) {
      return null;
    }
  
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
            {note.title}
          </h3>
          <button
            onClick={() => onDelete && onDelete(note.id)}
            className="text-red-500 hover:text-red-600"
          >
            Supprimer
          </button>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          {note.content}
        </p>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {note.date ? new Date(note.date).toLocaleDateString('fr-FR') : ''}
        </span>
      </div>
    );
  }
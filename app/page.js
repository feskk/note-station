'use client'
import { useState } from "react";
import NoteInput from "@/components/NoteInput";
import Header from "@/components/Header";
import NoteItem from "@/components/NoteItem";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const [notes, setNotes] = useState([]); // Stocke les notes
  const [darkMode, setDarkMode] = useState(false);

  // Fonction pour ajouter une note
  const addNote = (newNote) => {
    // Ajouter un ID unique et la date à la nouvelle note
    const noteWithId = {
      ...newNote,
      id: Date.now(),
      date: new Date().toISOString()
    };
    setNotes([...notes, noteWithId]);
  };

  // Fonction pour supprimer une note
  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  // Fonction pour basculer le thème
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
        <div className="max-w-4xl mx-auto">
          <Header />
          <NoteInput onAddNote={addNote} />
          
          {/* Affichage des notes */}
          <div className="space-y-4">
            {notes.length === 0 ? (
              <p className="text-center text-gray-500 dark:text-gray-400">
                Aucune note pour le moment
              </p>
            ) : (
              notes.map((note) => (
                <NoteItem 
                  key={note.id} 
                  note={note}
                  onDelete={deleteNote}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

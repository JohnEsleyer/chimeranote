'use client'

import { useState } from "react";
import { Folder, FileText, Plus, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [notes, setNotes] = useState(["Welcome", "New Note"]);
  const [activeNote, setActiveNote] = useState("Welcome");
  const [content, setContent] = useState<{ [key: string]: string }>({ "Welcome": "# Welcome\nThis is your first note!" });

  const addNote = () => {
    const newNote = `Note ${notes.length + 1}`;
    setNotes([...notes, newNote]);
    setContent({ ...content, [newNote]: "# New Note" });
    setActiveNote(newNote);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-4 flex flex-col">
        <h2 className="text-lg font-bold mb-4">Chimera Note</h2>
        <Button className="w-full mb-4" onClick={addNote}>
          <Plus className="w-4 h-4 mr-2" /> New Note
        </Button>
        <div className="flex-1 overflow-y-auto">
          {notes.map((note) => (
            <div
              key={note}
              className={`p-2 cursor-pointer rounded ${
                activeNote === note ? "bg-gray-700" : "hover:bg-gray-800"
              }`}
              onClick={() => setActiveNote(note)}
            >
              <FileText className="w-4 h-4 inline-block mr-2" />
              {note}
            </div>
          ))}
        </div>
        <Button variant="ghost">
          <Settings className="w-4 h-4 mr-2" /> Settings
        </Button>
      </div>

      {/* Editor */}
      <div className="flex-1 bg-gray-100 p-6 overflow-auto">
        <textarea
          className="w-full h-full p-4 bg-white border rounded-lg shadow-sm focus:outline-none"
          value={content[activeNote]}
          onChange={(e) =>
            setContent({ ...content, [activeNote]: e.target.value })
          }
        />
      </div>
    </div>
  );
}

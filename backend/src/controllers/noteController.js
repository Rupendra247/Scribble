import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
    // console.log("started");
  } catch (error) {
    console.error("Error in getAllNotes Controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    await newNote.save;
    res.status(201).json({ message: "Note created successfuly" });
  } catch (error) {
    console.error("Error in createNote Controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export function updateNote(req, res) {
  res.status(200).json({ message: "Note updated successfuly" });
}

export function deleteNote(req, res) {
  res.status(200).json({ message: "Note deleted successfuly" });
}

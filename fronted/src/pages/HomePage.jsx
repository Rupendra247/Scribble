//rafce
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import NavBar from "../components/NavBar";
import RateLimitedUI from "../components/RateLimitedUI";
import NoteCard from "../components/NoteCard";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loding, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/notes");
        // const data = await res.json();
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log(error);
        console.log("error fetching notes");
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("failed to load ");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);
  return (
    <div>
      <NavBar />
      {isRateLimited && <RateLimitedUI />}
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loding && (
          <div className="text-center text-primary py-10">loading notes...</div>
        )}
        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <div>
                {/* {note.title} | {note.title} */}
                <NoteCard key={note._id} note={note} />
              </div>
            ))}
          </div>
        )}
      </div>
      {/* <p>Home page</p> */}
    </div>
  );
};

export default HomePage;

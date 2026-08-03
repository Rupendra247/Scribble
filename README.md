# Ask My Note

A simple Notes REST API built with Node.js, Express, and MongoDB (Mongoose).

## What this project does so far

A backend-only application that lets you **create, read, update, and delete notes** stored in MongoDB. There is no frontend yet — you interact with it through API endpoints (e.g. Postman, curl, or a browser).

## Tech stack

| Technology | What it is used for |
| --- | --- |
| Node.js | JavaScript runtime (runs the server) |
| Express | Web framework for handling routes and HTTP requests |
| Mongoose | ODM (Object Data Modeling) to talk to MongoDB |
| MongoDB Atlas | Cloud-hosted database (free cluster) |
| dotenv | Loads environment variables from a `.env` file |
| nodemon | Auto-restarts the server when you change code |

## Project structure

```
ask-my-note/
├── .gitignore            # Files git should ignore (node_modules, .env)
├── backend/
│   ├── package.json      # Dependencies + scripts (dev / start)
│   └── src/
│       ├── server.js         # Entry point — starts the Express server
│       ├── config/
│       │   └── db.js         # Connects to MongoDB
│       ├── models/
│       │   └── Note.js       # Mongoose schema & model for a Note
│       ├── routes/
│       │   └── notesRoutes.js # Defines the /api/notes endpoints
│       └── controllers/
│           └── noteController.js # Logic for each endpoint
```

## How the code flows

1. **`server.js`** loads environment variables (`dotenv`), connects to the database, and starts the server.
2. **`config/db.js`** uses Mongoose to connect to MongoDB using the `MONGO_URI` from the `.env` file.
3. When you hit an endpoint like `GET /api/notes`, Express passes the request to the matching route in **`routes/notesRoutes.js`**.
4. The route calls the controller function in **`controllers/noteController.js`**, which reads/writes data through the **Note model** (`models/Note.js`).

## API endpoints

| Method | Endpoint | What it does | Status |
| --- | --- | --- | --- |
| GET | `/api/notes` | Get all notes | ✅ Working |
| POST | `/api/notes` | Create a new note | ⚠️ In progress |
| PUT | `/api/notes/:id` | Update a note | ❌ Placeholder |
| DELETE | `/api/notes/:id` | Delete a note | ❌ Placeholder |

**Note:** The update and delete controllers only return placeholder messages right now — the actual logic hasn't been written yet. The POST controller also needs a small fix (`newNote.save` should be `newNote.save()`).

## Setup & run locally

### Prerequisites
- Node.js installed
- A MongoDB Atlas account (or local MongoDB)
- A `.env` file with your credentials

### Steps

1. **Install dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Create the `.env` file** (in `backend/src/.env`)
   ```
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/notes_db
   PORT=5001
   ```
   > Replace `<username>` and `<password>` with your real MongoDB credentials. Never commit this file.

3. **Run the server**
   ```bash
   npm run dev     # with nodemon (auto-restart on changes)
   # or
   npm start       # plain node
   ```

4. **Test it**
   ```bash
   curl http://localhost:5001/api/notes
   ```

## Notes to remember

- `"type": "module"` in `package.json` lets you use `import` instead of `require`.
- `npm run dev` uses `nodemon`, `npm start` uses plain `node` (used for deployment).
- The `.env` file and `node_modules/` are ignored by git via `.gitignore` so secrets and dependencies are never committed.
- An "endpoint" = URL + HTTP method (e.g. `GET /api/notes`).

## What's next

- [ ] Complete POST controller (`newNote.save()` fix)
- [ ] Implement PUT and DELETE logic
- [ ] Build the frontend in the `fronted/` folder

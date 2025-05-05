# Kanban Task Dashboard

A Kanban-style task management dashboard built with React. Users can create, view, drag & drop tasks between columns, and persist changes using a mock REST API (json-server).

---

## 🔧 Setup Instructions

### Step 1 – Install all dependencies
npm install



### Step 2 – Start the mock API server (json-server)
npx json-server --watch db.json --port 3001


### Step 3 – Start the React development server
npm start


## 🧩 Features

### 3-column Kanban Board: To Do, In Progress, Done

### Add new tasks with title, description, and status

### Drag and drop tasks between columns

### Persist data using a mock API

### Responsive and attractive UI

## 🗂 Project Structure
├── public/
├── src/
│   ├── components/
│   │   ├── Column.js
│   │   ├── TaskCard.js
│   │   └── TaskForm.js
│   ├── App.js
│   ├── App.css
│   ├── constants.js
│   └── index.js
├── db.json
└── README.md

## 📦 Dependencies

### React

### axios

### react-dnd

### react-dnd-html5-backend

### json-server (dev only)

## 📄 License

### This project is open-source and free to use.

## 📝 Self-Evaluation

a. Half-Page Summary

This Kanban-style task management app allows users to view, create, and update tasks in a visually intuitive drag-and-drop board. Tasks are stored and managed using a mock API (json-server). The project is fully client-side and responsive, making it easy to use on both desktop and mobile. Strengths include the use of modern React libraries like react-dnd, component modularity, and simple yet functional styling. Some improvements could be made in user experience, such as adding notifications, task editing, or filtering options.

b. Self-Criticism

While the application meets the basic functional requirements, some parts of the code can be optimized. For example, form validation is minimal, and error handling could be more robust across the API calls. The drag-and-drop logic, while functional, can be enhanced for better user feedback and animations. Additionally, the UI could benefit from more advanced styling or theming.

c. Improvements

Given more time, I would:

Add editing and deleting capabilities for tasks

Improve form validation and user feedback

Add task filtering and search

Improve accessibility and keyboard navigation

Use a more structured state management solution like Redux or Context API

d. Technology Rating

React: 9/10

axios: 9/10

react-dnd: 7/10

json-server: 9/10

Overall, I feel confident with the tools used, and this project provided a good opportunity to reinforce my skills in building interactive, API-driven UIs.
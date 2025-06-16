# TaskTrek

TaskTrek is a simple and modern Kanban-style task management application built with React. Organize your tasks, assign tags, and track their progress across different stages: To Do, Doing, and Done.

## Website

[TaskTrek](https://task-manager-devs31.netlify.app/)

## Features

- **Add Tasks:** Quickly add new tasks with a title, status, and multiple tags.
- **Tagging:** Assign tags (HTML, CSS, Javascript, React) to tasks for better organization.
- **Column View:** Tasks are separated into "To Do", "Doing...", and "Done" columns.
- **Delete Tasks:** Remove tasks easily with a single click.
- **Persistent Storage:** All tasks are saved to your browser's `localStorage` and persist across sessions.
- **Responsive UI:** Clean and modern interface for an efficient workflow.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or above recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

Clone the repository:

```bash
git clone https://github.com/Devanshs31/TaskTrek.git
cd TaskTrek/project
```

Install dependencies:

```bash
npm install
# or
yarn install
```

### Running the App

Start the development server:

```bash
npm run dev
# or
yarn dev
```

### Building for Production

```bash
npm run build
# or
yarn build
```

Preview the production build:

```bash
npm run preview
# or
yarn preview
```

## Folder Structure

```
project/
│
├── public/
├── src/
│   ├── components/
│   │   ├── Tag.jsx / Tag.css
│   │   ├── TaskCard.jsx / TaskCard.css
│   │   ├── TaskColumn.jsx / TaskColumn.css
│   │   └── TaskForm.jsx / TaskForm.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```


**Built with React & Vite**

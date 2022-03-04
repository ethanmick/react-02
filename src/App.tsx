import './App.css'

interface Todo {
  text: string
}

const todos: Todo[] = [
  { text: 'Learn React' },
  { text: 'Learn TypeScript' },
  { text: 'Go outside' }
]

const App = () => (
  <ul>
    {todos.map((todo) => (
      <li>{todo.text}</li>
    ))}
  </ul>
)

export default App

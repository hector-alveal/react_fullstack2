import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [libros, setLibros] = useState([
    {id: 1, titulo: "Don Quijote de la Mancha", contenido: "El viejito que se vuelve loco con el molino"},
    {id: 2, titulo: "El Hobbit", contenido: "Un pequeño que salva al mundo y se roba un anillo"},
    {id: 3, titulo: "La Biblia", contenido: "El pulento haciendo milagros"}
  ])

  return (
    <div className='container mt-3'>
      <div className='row'>
        {
          libros.map(libro => (
            <div className='col-md-4' key={libro.id}>
              <Card titulo={libro.titulo} contenido={libro.contenido}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App

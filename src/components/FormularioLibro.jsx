import { useEffect, useState } from "react"

function FormularioLibro( {agregar, libroEditando, editar, setLibroEditando} ) {
    const [titulo,setTitulo] = useState("")
    const [contenido,setContenido] = useState("")

    //descargar informacion de otro lugar, usar funcion useEffect
    useEffect( ()=> {
        if(libroEditando){
            setTitulo(libroEditando.titulo)
            setContenido(libroEditando.contenido)
        }
    },[libroEditando])// 

    
    const handleSubmit = (event)=>{
        event.preventDefault()
        if(!titulo || !contenido) return
        
        if(libroEditando){
            editar( {...libroEditando,titulo,contenido} ) 
            setLibroEditando(null) 
        }else{
            agregar( {id: Date.now(),titulo,contenido} )
        }

        setTitulo("")
        setContenido("")
    }

    return (
        <form className="mb-4" onSubmit={handleSubmit}>
            <input className="form-control mb-2" 
            type="text" 
            value={titulo}
            placeholder="Ingrese título" 

            onChange={(e)=> setTitulo(e.target.value) } />
            <input className="form-control mb-2" 
            type="text"
            value={contenido} 
            placeholder="Ingrese contenido" onChange={(e)=> setContenido(e.target.value) } />
            
            <button type="submit" className={libroEditando ? "btn btn-warning":"btn btn-success"}>
                {libroEditando ? "Actuaizar libro" : "Agregar libro"}
            </button>
        </form>
    )
}

export default FormularioLibro
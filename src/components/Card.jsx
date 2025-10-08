//Vamos a crear una card en React

function Card(props){
    return (
        <div className="card mb-3" style={ {width:"18rem"} }>
            {props.imagen &&(//Validacion: se valida si hay imagen
                <img  src={props.imagen} alt={props.titulo} className="card-img-top"/>//si hay imagen, muestra la imagen
            )}
            <div className="card-body">
                <h3 className="card-title">{props.titulo}</h3>
                <p className="card-text">{props.contenido}</p>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-warning" onClick={props.modificar}>Editar</button>
                    <button className="btn btn-danger" onClick={props.eliminar}>Eliminar</button>
                </div>
            </div>
        </div>
    )
}

export default Card;
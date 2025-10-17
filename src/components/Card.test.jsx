import { fireEvent, render, screen } from "@testing-library/react"
import Card from "./Card"
import { beforeEach, expect, vi } from "vitest"

//cada describe es el comienzo de las pruebas 
describe("Testing Card", ()=>{

    const mockCard = {
        // crear constante que serviran para realizar pruebas 
        numero: "132",
        titulo: "Ditto", 
        contenido: "Pokemon imitador",
        imagen: "ditto.jgp"
    }
    const mockModigicar = vi.fn()
    const mockEliminar = vi.fn()

    beforeEach(()=>{ //esta funcion limpia cosas mock
        vi.clearAllMocks()
    })




    it("CPH-Card1: Muestra titulo, contenido y numero correctamente", ()=>{
        // render carga los datos
        render(<Card {...mockCard} // los tres puntos ... 
                    modificar={mockModigicar} 
                    eliminar={ mockEliminar} />)
        expect(screen.getByText("Ditto")).toBeInTheDocument() // investigar que tobe se utiliza para cada prueba (como en titulo) 
        expect(screen.getByText(/Pokemon imitador/)).toBeInTheDocument()  // /algo/ logica que no importa lo que este eso pero sea parte del texto
        expect(screen.getByText(/132/)).toBeInTheDocument()  
    })

    it("CPH-Card2: debe mostrar imagen con src y alt correctos", ()=>{ // alt  texto alternativo
    // render carga los datos
        render(<Card {...mockCard}
                    modificar={mockModigicar} 
                    eliminar={ mockEliminar} />)
        
        const img = screen.getByRole("img")
        expect(img).toHaveAttribute("src","ditto.jpg")
        expect(img).toHaveAttribute("alt","Ditto")
    })

    it("CPH-Card3: debe llamar a eliminar al hacer click en el boton correctamente", ()=>{ 
        render(<Card {...mockCard}  
                    modificar={mockModigicar} 
                    eliminar={ mockEliminar} />)
        
        const btnEliminar = screen.getByRole("button",{name:/eliminar/i}) // /eliminar/i identifica el texto sin importar si tienen mayuscula
        fireEvent.click(btnEliminar)
        expect(mockEliminar).toHaveBeenCalledTimes(1)
    })
    
    it("CPH-Card4: debe llamar a modificar al hacer click en el boton correctamente", ()=>{ 
        render(<Card {...mockCard}  
                    modificar={mockModigicar} 
                    eliminar={ mockEliminar} />)
        
        const btnModificar = screen.getByRole("button",{name:/editar/i}) // /eliminar/i identifica el texto sin importar si tienen mayuscula
        fireEvent.click(btnModificar)
        expect(mockModificar).toHaveBeenCalledTimes(1)
    })
    
    it("CPH-Card5: debe renderizar aunque falte la imagen", ()=>{ 
        render(<Card {...mockCard}
                    imagen=""
                    modificar={mockModigicar} 
                    eliminar={ mockEliminar} />)
        
        const img = screen.queryByRole("img")
        expect(img).not.toHaveAttribute("src","")
    })
    
    it("CPH-Card6: no debe fallar si no pasan funciones eliminar o modificar", ()=>{ 
        render(<Card {...mockCard} />) 
        expect(screen.getByText("Ditto")).toBeInTheDocument()
    })



})
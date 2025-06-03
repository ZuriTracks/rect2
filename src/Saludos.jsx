import Datos from "./Datos";
function Saludos(props){
    const alumno = {
        nombre: "Andres",
        apellido: "Soto",
        curso: "Desarrollo web",
    };

    return (
        <div>

            <h1>Saludos desde el componente saludos</h1>
            <h2>Nombre: {props.nombre}</h2>
            <h2>Apellido: {props.apellido}</h2>
            <Datos alumno={alumno} />
        </div>
    );
}
export default Saludos;
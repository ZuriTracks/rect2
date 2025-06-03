function Datos(props){
    //destructurar datos del alumno desde las props
    const {nombre, apellido, curso} = props.alumno;
    return(

        <div>
            <h2>Datos del alumno</h2>
            <h2>Nombre: {nombre}</h2>
            <h2>Apellido: {apellido}</h2>
            <h2>Curso: {curso}</h2>
        </div>
    );
}
export default Datos;
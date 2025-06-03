function Datos(props){
    const {alumno} = props;
    
    return(

        <div>
            <h2>Datos del alumno</h2>
            <h2>Nombre: {alumno.nombre}</h2>
            <h2>Apellido: {alumno.apellido}</h2>
            <h2>Curso: {alumno.curso}</h2>
        </div>
    );
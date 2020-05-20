let modelo = require('./estudiantesModel');
const Sequelize = require('sequelize');
// Borra estudiante
const deleteEstudiante = function (req,res) {
    if(modelo.erase(req.params.id)){
        res.status(200).
        json({msg:`id: ${req.params.id} deleted
succesfully`})
    } else {
        res.status(500).
        json({error:`could not delete id:
${req.params.id}`})
    }
};
//Muestra los estudiante
const getEstudiante = function(req, res){
    console.log(req.params.id);
    modelo.findByID(req.params.id).then((estudiante) => {
        res.status(200).json(estudiante);
    }).catch(err => {
        res.status(500).json({error: "No encontrado"});
    });
};
//Funcion que muestra todos los estudiantes
const getAllEstudiantes = function(req, res){
    modelo.findAll().then((estudiantes) =>{
        res.status(200).json(estudiantes);
    }).catch(err =>{
        res.status(500).json({error: "No encontrado"});
    });
};
// Crea estudiantes
const createEstudiante = function(req, res){
    let r=modelo.add(req.body);
    if(r){
        res.status(200).json(r);
    }else{
        res.status(500).json({error: "No se pudo crear"});
    }
}
//Actualiza estudiante
const updateEstudiante = function(req, res){
    let r = modelo.save(req.params.id, req.body);
    if(r){
        res.status(200).json(r);
    }else{
        res.status(500).json({error: "No existe"});
    }
}
//Exporta las funciones
exports.getAllEstudiantes = getAllEstudiantes;
exports.getEstudiante = getEstudiante;
exports.createEstudiante = createEstudiante;
exports.updateEstudiante = updateEstudiante;
exports.deleteEstudiante = deleteEstudiante;



/*const estudiantes = [
    {
        id: 1,
        nombre: 'Abraham',
        matricula: 1136738,
        semestre: '2016-2',
        creditosCursados: 250
    },
    {
        id: 2,
        nombre: 'Yamany',
        matricula: 1136739,
        semestre: '2017-2',
        creditosCursados: 240
    },
    {
        id: 3,
        nombre: 'Jonny',
        matricula: 1136740,
        semestre: '2017-2',
        creditosCursados: 230
    },
    {
        id: 4,
        nombre: 'Karla',
        matricula: 1136741,
        semestre: '2017-2',
        creditosCursados: 240
    },
    {
        id: 5,
        nombre: 'Abner',
        matricula: 1136742,
        semestre: '2017-2',
        creditosCursados: 230
    }
];*/
/*const findById = function (id) {
    return estudiantes.find((e) => {
        return e.id == id;
    });
};
const findByMatricula = function (matricula) {
    return estudiantes.find((e) => {
        return e.matricula == matricula;
    });
};
const findAll = function() {
    return estudiantes;
};
exports.findById = findById;
exports.findByMatricula = findByMatricula;
exports.findAll = findAll;*/

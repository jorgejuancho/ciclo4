const Estudiante = require("../models/estudiantes.model");

let response = {  
    msg: "",
    exito: false,
  };
  
  exports.create = function (req, res) {
    let estudiante = new Estudiante({
      id_estudiante: req.body.id_estudiante,
      nombre: req.body.nombre,
      apellido_p: req.body.apellido_p,
      apellido_m: req.body.apellido_m,
      telefono: req.body.telefono,
      mail: req.body.mail,
      edad: req.body.edad
    });
  
    estudiante.save(function (err) {
      if (err) {
        console.error(err),
          (response.exito = false),
          (response.msg = "Error al guardar el estudiante");
        res.json(response);
        return;
      }
  
      (response.exito = true),
        (response.msg = "El estudiante se guardó correctamente");
      res.json(response);
    });
  };

  exports.find = function(req,res){
    Estudiante.find(function(err, estudiantes){
        res.json(estudiantes)
    })
  }
  exports.findOne = function(req,res){
    Estudiante.findOne({_id: req.params.id},function(err, estudiante){
        res.json(estudiante)
    })
  }  

  exports.update = function(req,res){
    let estudiante = {
      id_estudiante: req.body.id_estudiante,
      nombre: req.body.nombre,
      apellido_p: req.body.apellido_p,
      apellido_m: req.body.apellido_m,
      telefono: req.body.telefono,
      mail: req.body.mail,
      edad: req.body.edad
    }
  
    Estudiante.findByIdAndUpdate(req.params.id, {$set: estudiante}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar el estudiante"
            res.json(response)
            return;
        }
  
        response.exito = true,
        response.msg = "El estudiante se modifico correctamente"
        res.json(response)
    })
  }

  exports.remove = function(req,res){
    Estudiante.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar el estudiante"
            res.json(response)
            return;
        }
  
        response.exito = true,
        response.msg = " estudiante eliminado correctamente"
        res.json(response)
    })
  }
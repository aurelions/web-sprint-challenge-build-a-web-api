// Write your "projects" router here!
const express = require('express');
const projectsModel = require("./projects-model")
const PjMw = require("./projectsMw.js");


const router = express.Router();

router.get('/', (req, res, next) => {
    projectsModel.get()
    .then((projects) => {
      res.status(200).json(projects)//users)
    })
    .catch((err) => {
      next(err)
    })
  });


  router.get("/:id", PjMw.validateProjectID(), (req, res) => {
    res.status(200).json(req.project);
})


router.post("/", PjMw.validateProjectBody(), (req,res, next) => {
    projects.insert(req.body)
    .then(project =>{
        res.status(201).json(project);
    })
    .catch(err =>{
        next(err)
    })
})

router.put("/:id", PjMw.validateProjectID(), mw.validateProjectBody(), (req,res, next) => {
    projects.update(req.params.id, req.body)
    .then(project =>{
        res.status(200).json(project);
    })
    .catch(err =>{
        next(err)
    })
})


router.delete("/:id", PjMw.validateProjectID(), (req,res, next) => {
    projects.remove(req.params.id)
    .then(project =>{
        res.status(200).json(project);
    })
    .catch(err =>{
        next(err)
    })
})


router.get('/:id/actions', PjMw.validateProjectID(), (req,res, next) => {
    projects.getProjectActions(req.params.id)
    .then(actions =>{
        res.status(200).json(actions);
    })
    .catch(err =>{
        next(err)
    })
})

module.exports = router
const projects = require('./projects-model')

function validateProjectID() {
    return (req, res, next) => {
        projects.getById(req.params.id)
        .then(project => {
            if(project) {
                req.project = project
                next()
            }else{
                return res.status(404).json({message: 'Project ID not found!'})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'Oops, we could not find the project!'})
        })
    }
}

function validateProjectBody(){
    return (req, res, next) => {
        if(!req.body.name || !req.body.description){
            return res.status(400).json({message: 'You need to enter all required fields!'})
        }
        next()
    }
}

module.exports = {validateProjectID, validateProjectBody}
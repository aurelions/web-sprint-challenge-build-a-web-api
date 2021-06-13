// Write your "actions" router here!
const actions = require('./actions-model')
const express = require('express')
const router = express.Router()
const mw = require('./actionsMW')

router.get('/', (req, res, next) => {
    actions.get()
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(err => {
        next(err)
    })
    router.get('/:id', mw.validateActionID, (req, res) => {
        res.status(200).json(req.action)
    })
})


router.post('/', mw.validateActionBody, (req, res, next) => {
    actions.insert(req.body)
    .then(action => {
        res.status(201).json(action)
    })
    .catch(err => {
        next(err)
    })
})

router.put('/:id', mw.validateActionID, validateActionBody, (req, res, next) => {
    actions.update(req.params.id, req.body)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        next(err)
    })
})

router.delete('/:id', mw.validateActionID, (req, res, next) => {
    actions.remove(req.params.id)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        next(err)
    })
})
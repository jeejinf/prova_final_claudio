const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Rota para exibir todos os funcionários
router.get('/', employeeController.getAllEmployees);

// Rota para exibir um funcionário pelo código
router.get('/id/:code', employeeController.getEmployeeByCode);

// Rota para entrar na página de um novo funcionário
router.get('/cadastro', (req, res, next) => {
	res.render("registerEmployee")
})

// Rota para criar um novo funcionário
router.post('/cadastro', employeeController.createEmployee);

/* // Rota para atualizar um funcionário
router.put('/:code', employeeController.updateEmployee); */

/* // Rota para excluir um funcionário
router.delete('/:code', employeeController.deleteEmployee); */

module.exports = router;

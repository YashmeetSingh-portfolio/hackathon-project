const { Router } = require('express');

const router = Router();

const {  codeExplain } = require('../controller/codeExplainController');

router.post('/code-explain', codeExplain);


module.exports = router;
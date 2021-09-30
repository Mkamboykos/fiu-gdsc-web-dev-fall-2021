const express = require ( 'express' );
const router = express.Router ();

router.get ('./User', async (request, response) => {
    const {Username, Password} = request.body;

});

module.exports = router;
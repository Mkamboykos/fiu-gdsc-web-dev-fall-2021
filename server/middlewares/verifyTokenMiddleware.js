const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next){

    const headersExist = req.headers['cookie']

    // check if headers for cookies exists
    if (headersExist){ 

        // check if there are more then one cookie
        const authHeaders = headersExist.split(' ')

        if (authHeaders){
            // iterate through every cookie, find 'access' cookie
            for (let i=0; i < authHeaders.length; i++){  
                console.log([...authHeaders][i])
                if (([...authHeaders][i].includes('access')) === true){
                    if (i !== authHeaders.length -1){
                        authHeaderAccessSlided = [...authHeaders][i].slice(7).slice(0, -1)
                        req.accessToken = authHeaderAccessSlided;
                    }else if (i === authHeaders.length - 1){
                        authHeaderAccessSlided = [...authHeaders][i].slice(7)
                        req.accessToken = authHeaderAccessSlided;
                    }else{
                        const authHeader = req.headers['cookie']
                        req.accessToken = authHeader;
                    }
                }
            }
        }

        // verify access token (sliced)
        jwt.verify(req.accessToken, process.env.ACCESS_TOKEN_SECRET, (err, authData) => {

            // if access token fails verification, verify refresh token
            if (err) {

                // iterate through every cookie, find 'refresh' cookie
                for (let i=0; i < authHeaders.length; i++){  
                    if (([...authHeaders][i].includes('refresh')) === true){
                        if (i !== authHeaders.length -1){
                            authHeaderRefresh = [...authHeaders][i].slice(8).slice(0, -1)
                            req.refreshToken = authHeaderRefresh;
                        }else if (i === authHeaders.length - 1){
                            authHeaderRefresh = [...authHeaders][i].slice(8)
                            req.refreshToken = authHeaderRefresh;
                        }else{
                            const authHeader = req.headers['cookie']
                            req.refreshToken = authHeader;
                        }
                    }
                }

                jwt.verify(req.refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, verifiedRefresh) => {
                    if (err){
                        res.json({message: "Invalid Refresh Token", status: false});
                    } else if (verifiedRefresh){

                        // if refresh token passes verification, create new access token and verify
                        const accessToken = jwt.sign({verifiedRefresh}, process.env.ACCESS_TOKEN_SECRET)
                                    
                        res.cookie("access", accessToken, {
                            maxAge: 5000, // 5 seconds
                            httpOnly: true,
                        })
                        
                        jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, authData) => {
                            if (err){
                                res.json({message: "Invalid Access Token"});
                            }else if(authData){
                                console.log("New Access Token Valid")
                                req.user = authData
                                next()
                            }
                        })
                    }
                })
            }else if (authData){
                console.log("Access Token Valid ")
                // if access token is verified, pass the user information from the token to the req.user
                req.user = authData
                next()
            }
        })
    }else{
        // if both access or refresh token are missing, send 404
        res.json({message: "Tokens not present", status: false});
    }
}

module.exports = {authenticateToken};    
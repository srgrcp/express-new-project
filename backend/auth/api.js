authapi = express.Router()

authapi
    .get('/test', (req, res)=>{
        res.json({message: 'auth api works'})
    })

app.use('/api/auth', authapi)
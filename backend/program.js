require('./settings')
require('./auth/settings')
require('./auth/api')
//require(your code)

app.use(express.static('dist'))
app.use((req,res)=>{
    res.sendFile(path.join(__dirname+'/dist/index.html'))
})

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})
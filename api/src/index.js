import app from './http/index'

app.listen(process.env.APP_PORT, () => console.log(`server is running on ${process.env.APP_PORT}`))

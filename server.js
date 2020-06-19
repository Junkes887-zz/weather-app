import express from 'express' 
import axios from 'axios'

const app = express()

app.use(express.json())
app.get('/:city', (req, res) => {
    let { city } = req.params
    const apiKey = "4d8fb5b93d4af21d66a2948710284366"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    axios.get(url)
        .then(response => {
            const {main} = response.data
            return res.json({temperature: `${main.temp}°C`})
        })
})
app.listen(3333)
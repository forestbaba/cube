const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 13100;


app.use(bodyParser.urlencoded({ extended: false, limit: '5mb' }));
app.use(bodyParser.json());

app.get('/',(req, res) =>{
    return res.status(200).json({error: false, message:"Alive and running"});
})

app.post('/getRoute',(req, res) =>{
    console.log(req.body)

    if(!req.body.source || !req.body.destination){
        return res.status(400).json({error: true, message:"source and destination required"})
    }
    let source = req.body.source;
    let destination = req.body.destination;

    if(source === 'route1'){
        if(destination === 'route1'){
            return res.status(200).json({error: false, price:1000})

        }
       else if(destination ==='route2'){
            return res.status(200).json({error: false, price:1000})

        }
       else if(destination === 'route3'){
            return res.status(200).json({error: false, price:1000})

        }
       else if(destination === 'route4'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route5'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route6'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route7'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route8'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route9'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route1'){
            return res.status(200).json({error: false, price:2000})

        }
    }
    else if(source === 'route2'){
        if(destination === 'route1'){
            return res.status(200).json({error: false, price:1000})

        }
       else if(destination === 'route2'){
            return res.status(200).json({error: false, price:1000})

        }
       else if(destination === 'route3'){
            return res.status(200).json({error: false, price:1200})

        }
       else if(destination === 'route4'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route5'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route6'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route7'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route8'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route9'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route1'){
            return res.status(200).json({error: false, price:2000})

        }
    }
    else if(source === 'route3'){
        if(destination === 'route1'){
            return res.status(200).json({error: false, price:1000})

        }
       else if(destination === 'route2'){
            return res.status(200).json({error: false, price:1000})

        }
       else if(destination === 'route3'){
            return res.status(200).json({error: false, price:1000})

        }
       else if(destination === 'route4'){
            return res.status(200).json({error: false, price:1200})

        }
       else if(destination === 'route5'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route6'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route7'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route8'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route9'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route1'){
            return res.status(200).json({error: false, price:2000})

        }
    }
    else if(source === 'route4'){
        if(destination === 'route1'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route2'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route3'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route4'){
            return res.status(200).json({error: false, price:1000})

        }
       else if(destination === 'route5'){
            return res.status(200).json({error: false, price:1200})

        }
       else if(destination === 'route6'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route7'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route8'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route9'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route1'){
            return res.status(200).json({error: false, price:2000})

        }
    }
    else if(source === 'route5'){
        if(destination === 'route1'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route2'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route3'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route4'){
            return res.status(200).json({error: false, price:1200})

        }
       else if(destination === 'route5'){
            return res.status(200).json({error: false, price:1000})

        }
       else if(destination === 'route6'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route7'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route8'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route9'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route1'){
            return res.status(200).json({error: false, price:2000})

        }
    }
    else if(source === 'route6'){
        if(destination === 'route1'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route2'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route3'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route4'){
            return res.status(200).json({error: false, price:1200})

        }
       else if(destination === 'route5'){
            return res.status(200).json({error: false, price:1000})

        }
       else if(destination === 'route6'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route7'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route8'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route9'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route1'){
            return res.status(200).json({error: false, price:2000})

        }
    }
    else if(source === 'route7'){
        if(destination === 'route1'){
            return res.status(200).json({error: false, price:1500})
        }
       else if(destination === 'route2'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route3'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route4'){
            return res.status(200).json({error: false, price:1200})

        }
       else if(destination === 'route5'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route6'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route7'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route8'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route9'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route1'){
            return res.status(200).json({error: false, price:2000})

        }
    }
    else if(source === 'route8'){
        if(destination === 'route1'){
            return res.status(200).json({error: false, price:2000})
        }
       else if(destination === 'route2'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route3'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route4'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route5'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route6'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route7'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route8'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route9'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route1'){
            return res.status(200).json({error: false, price:2000})

        }
    }
    else if(source === 'route9'){
        if(destination === 'route1'){
            return res.status(200).json({error: false, price:2000})
        }
       else if(destination === 'route2'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route3'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route4'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route5'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route6'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route7'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route8'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route9'){
            return res.status(200).json({error: false, price:1000})

        }
       else if(destination === 'route1'){
            return res.status(200).json({error: false, price:2500})

        }
    }
    else if(source === 'route1'){
        if(destination === 'route1'){
            return res.status(200).json({error: false, price:2000})
        }
       else if(destination === 'route2'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route3'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route4'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route5'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route6'){
            return res.status(200).json({error: false, price:2000})

        }
       else if(destination === 'route7'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route8'){
            return res.status(200).json({error: false, price:1500})

        }
       else if(destination === 'route9'){
            return res.status(200).json({error: false, price:1000})

        }
       else if(destination === 'route1'){
            return res.status(200).json({error: false, price:1000})

        }
    }
})

app.listen(PORT, () =>{
    console.log(`App running on ${PORT}`);
})
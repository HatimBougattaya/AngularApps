let Achat = require('../model/achat');

// Récupérer tous les Achats (GET)
function getAchats(req, res){
    Achat.find((err, achats) => {
        if(err){
            res.send(err)
        }
        console.log("Achats envoyés");
        res.send(achats);
    });
}

// Récupérer un achat par son id (GET)
function getAchat(req, res){
    let achatId = req.params.id;

    Achat.findOne({id: achatId}, (err, achat) =>{
        if(err){res.send(err)}
        res.json(achat);
    })
}

// Ajout d'un achat (POST)
function postAchat(req, res){
    let achat = new Achat();
    achat.id = req.body.id;
    achat.produit = req.body.produit;
    achat.magasin = req.body.magasin;
    achat.dateAchat = req.body.dateAchat;
    achat.valid = req.body.valid;

    console.log("POST achat reçu :");
    console.log(achat)

    achat.save( (err) => {
        if(err){
            res.send('cant post achat ', err);
        }
        res.json({ message: `${achat.produit} saved!`})
    })
}

// Update d'un achat (PUT)
function updateAchat(req, res) {
    console.log("UPDATE recu achat : ");
    console.log(req.body);
    Achat.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, achat) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
          res.json({message: 'updated'})
        }

    });

}

// suppression d'un achat (DELETE)
function deleteAchat(req, res) {

    Achat.findByIdAndRemove(req.params.id, (err, achat) => {
        if (err) {
            res.send(err);
        }
        res.json({message: `${achat.produit} deleted`});
    })
}



module.exports = { getAchats, postAchat, getAchat, updateAchat, deleteAchat };

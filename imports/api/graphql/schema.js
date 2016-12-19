const schema=`
    type User{
        _id:String
        username:String
        date_naissance:String
        nom:String
        prenoms:String
        fullname:String
        sexe:String
        tel1:String
        tel2:String
        adressePostale:String
        profession:String
        civilite:String
        nationalite:String
        situationMatrimoniale:String
        typeClient:String
        codeBank:String
        codeAgence:String
        numdecompte:String
        cleRIB:String
        date_debut:String
        keyClient:String
       
    }
    type Produit{
        _id:String
        idProduit:String
        code_nature_produit:String
        desc_nature_police:String
        code_production:String
        desc_production:String
        codeProduit:String
        desc_produit:String
        code_filiale:String
    }
    type Contrat{
        _id:String
        idContrat:String
        ide_client_unique:String
        idTypePolice:String
        idStatut:String
        idAgent:String
        idProduit:String
        numero_police:String
        numero_convention:String
        numero_payeur:String
        numero_client:String
        numero_adherent:String
        date_debut_effet_police:String
        date_fin_effet_police:String
        date_fin_contrat:String
        date_resiliation:String
        periodicite_remboursement:String
        periodicite_police:String
        periodicite_rente:String
        duree_rente:String
        duree_police:String
        unite_duree_police:String
        periodicite_appels_cotisation:String
        prime_souscription:String
        prime_deces:String
        capital_de_base:String
        date_creation:String
    }
    type Agence{
        _id:String
        agence:String
        tel1:String
        tel2:String
        addresse:String
        zone:String
        pic_url:String
        mapX:Float
        mapY:Float
    }
    type DemandesPrestations{
        _id:String
        prestaNo:Int
        type:String
        souscripteurId:String
        adresse:String
        numero_police:String
        numero_payeur:String
        telephone:String
        val_AV_max:String
        val_RP_max:String
        montant:String
        luApprouver:Boolean
        dureeRemboursementMois:String
        date_creation:String
        date_fin_traitement:String
        traitement:String

    }
    type Message{
        _id:String
        messageNo:Int
        type:String
        from:String
        to:String
        text:String
        userId:String
        date_creation:String
        sent:Boolean

    }
    type Query{
        user(username:String!):User
        agence(agence:String!):Agence
        contratsDuSouscripteur(userid:String!):[Contrat]
        contrat(contratid:String!):Contrat
        listeAgence:[Agence]
        listeUsers:[User]
        listeContrats:[Contrat]
        listeProduit:[Produit]
        produit(idProduit:String!):Produit
        listeMessage:[Message]
        messagesDuSouscripteur(userId:String):[Message]
        messagesDuSouscripteurParType(userId:String,type:String):[Message]
        listeDemandePrestation:[DemandesPrestations]
        demandePrestationSouscripteur(souscripteur:String!,isRP:Boolean!,isAV:Boolean!):[DemandesPrestations]
        
    }
    schema{
        query:Query
    }
`;
export default schema;
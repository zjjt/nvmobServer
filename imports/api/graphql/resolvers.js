import {Meteor} from 'meteor/meteor';
import {Agences,Contrats,Produits,DemandesPrestations,MessagesAuClient} from '../collections.js';

const utf8=require('utf8');
const resolvers={
    Query:{
        //user comes from meteor.Accounts
        user(_,args){       
                return Meteor.users.findOne({username:args.username});         
        },
        agence(_,args){
            return Agences.findOne({agence:args.id});
        },
        contrat(_,args){
            return Contrats.findOne({idContrat:args.contratid});
        },
        contratsDuSouscripteur(_,args){
            return Contrats.find({ide_client_unique:args.userid}).fetch();
        },
        produit(_,args){
           return Produits.findOne({idProduit:args.idProduit});
        },
        listeProduit(){
           
            return Produits.find({}).fetch();
        },
        listeAgence(){
            return Agences.find({}).fetch();
        },
        listeUsers(){
            return Meteor.users.find({}).fetch();
        },
        listeContrats(){
            return Contrats.find({}).fetch();
        },
        listeDemandePrestation(){
            return DemandesPrestations.find({}).fetch();
        },
        listeMessage(){
            return MessagesAuClient.find({}).fetch();
        },
        messagesDuSouscripteur(_,args){
            return MessagesAuClient.find({userId:args.userId}).fetch();
        },
        messagesDuSouscripteurParType(_,args){
            return MessagesAuClient.find({userId:args.userId,type:args.type}).fetch();
        },
        demandePrestationSouscripteur(_,args){
            if(args.isRP){
                return DemandesPrestations.find({souscripteur:args.souscripteur,type:"Rachat_partiel"}).fetch();
            }else if(args.isAV){
                return DemandesPrestations.find({souscripteur:args.souscripteur,type:"Avance"}).fetch();
            }
           

        }
       
    },
   
};

export default resolvers;
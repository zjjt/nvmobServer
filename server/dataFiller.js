import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Random} from 'meteor/random';
import {moment} from 'meteor/momentjs:moment';
import {Baby} from 'meteor/modweb:baby-parse';
import {check} from 'meteor/check';
import {Agences,Contrats,Produits,DemandesPrestations,countCollection} from '../imports/api/collections.js';
import casual from 'casual';
import _ from 'lodash';
const utf8=require('utf8');

if(Meteor.isServer){
 /*DemandesPrestations.insert({
                prestaNo:incrementCounter('countCollection','prestaNo'),
                type:'p.type',
                souscripteur:'p.souscripteur',
                adresse:'p.adresse',
                numero_police:'p.numero_police',
                numero_payeur:'p.numero_payeur',
                telephone:'p.telephone',
                val_AV_max:'p.val_AV_max',
                val_RP_max:'p.val_RP_max',
                montant:'p.montant',
                dureeRemboursementMois:'p.nbrmois',
                date_creation:new Date(),
                date_fin_traitement:null,
                traitement:"EN_COURS"
 });*/
//for the agences we should do the same as the csv method below
/*_.times(10,()=>{
  
  return Agences.insert({
      agence: casual.first_name,
      tel1: casual.phone,
      tel2: casual.phone,
      addresse:casual.address,
      zone:casual.city,
      pic_url:casual.url,
      mapX:casual.double(),
      mapY:casual.double()
  });
});*/
//Here we insert rows from the csv file into mongo users collection
//if already present, we dont insert 
//normalement on commence les boucles a 0 juska la fin du tableau/*results.data.length*/ mais mon ordi est super lent donc
/*const IDUNIQPATH=process.env.PWD+'/CSV/IDUNIQ.csv';
Baby.parseFiles(IDUNIQPATH,{
  header:true,
  complete(results,file){
    check(results.data,Array);
    for(let i=103790;i<103792;i++){
      let user =results.data[i];
     // console.dir(user);
   if(!Accounts.findUserByUsername(user.IDE_CLIENT_UNIQUE)){
        //createUser then update it with
        Accounts.createUser({
           username:user.IDE_CLIENT_UNIQUE,
           password:user.DATE_NAISSANCE+user.IDE_CLIENT_UNIQUE,
        });
        //on recupere le _id meteor de l'utilisateur cree
        let nuser=Meteor.users.findOne({username:user.IDE_CLIENT_UNIQUE},{$fields:{'_id':1,'createdAt':0,'services':0,'username':0}}); 
        Meteor.users.update(nuser._id,{
          $set:{
                date_naissance:user.DATE_NAISSANCE,
                nom:user.NOM_CLIENT,
                prenoms:user.PRENOMS_CLIENT,
                fullname:user.NOM_CLIENT+" "+user.PRENOMS_CLIENT,
                sexe:user.SEXE,
                tel1:user.TELEPHONE,
                tel2:user.TELEPHONE_1,
                adressePostale:user.ADRESSE_POSTALE,
                profession:user.PROFESSION,
                civilite:user.CIVILITE,
                nationalite:user.NATIONALITE,
                situationMatrimoniale:user.SITUATION_MATRIMONIALE,
                typeClient:user.TYPE_CLIENT,
                codeBank:user.CODE_BANQUE,
                codeAgence:user.CODE_AGENCE,
                numdecompte:user.NUMERO_DE_COMPTE,
                cleRIB:user.CLE_RIB,
                date_debut:user.DATE_DEBUT,
                keyClient:user.KEY_CLIENT

              }
          });
      }else{
        //console.log(user.IDE_CLIENT_UNIQUE+" existe deja");
        return;
      }
    }
  }
});*/

//here we insert all the contrats within the csv file into the collection
/*const CONTRATPATH=process.env.PWD+'/CSV/CONTRATS.csv';
Baby.parseFiles(CONTRATPATH,{
  header:true,
  complete(results,file){
    check(results.data,Array);
    for(let i=150158;i<150163;i++){
      let contrat =results.data[i];
      let exist=Contrats.findOne({idContrat:contrat.IDE_CONTRAT});
      if(!exist){
        //console.dir(contrat);
        //inserts in collection
        Contrats.insert({
          idContrat:contrat.IDE_CONTRAT,
          ide_client_unique:contrat.IDE_CLIENT_UNIQUE,
          idTypePolice:contrat.IDE_TYPE_POLICE,
          idStatut:contrat.IDE_STATUT,
          idAgent:contrat.IDE_AGENT,
          idProduit:contrat.IDE_PRODUIT,
          numero_police:contrat.NUMERO_POLICE,
          numero_convention:contrat.NUMERO_CONVENTION,
          numero_payeur:contrat.NUMERO_PAYEUR,
          numero_client:contrat.NUMERO_CLIENT,
          numero_adherent:contrat.NUMERO_ADHERENT,
          date_debut_effet_police:contrat.DATE_DEBUT_EFFET_POLICE,
          date_fin_effet_police:contrat.DATE_FIN_EFFET_POLICE,
          date_fin_contrat:contrat.DATE_FIN_CONTRAT,
          date_resiliation:contrat.DATE_RESILIATION,
          periodicite_remboursement:contrat.PERIOFICITE_REMBOUSEMENT_POLICE,
          periodicite_police:contrat.PERIODICITE_POLICE,
          periodicite_rente:contrat.PERIODICITE_RENTE,
          duree_rente:contrat.DUREE_DE_RENTE,
          duree_police:contrat.DUREE_POLICE,
          unite_duree_police:contrat.UNITE_DUREE_POLICE,
          periodicite_appels_cotisation:contrat.PERIODICITE_APPELS_COTISATION,
          prime_souscription:contrat.PRIME_SOUSCRIPTION,
          prime_deces:contrat.PRIME_DECES,
          capital_de_base:contrat.CAPITAL_DE_BASE,
          date_creation:contrat.DATE_CREATION
        });
      
      }else{
        //console.log(user.IDE_CLIENT_UNIQUE+" existe deja");
        continue;
      }
    }
  }
});*/
/*const PRODUITPATH=process.env.PWD+'/CSV/PRODUITS.csv';
Baby.parseFiles(PRODUITPATH,{
  header:true,
  complete(results,file){
    check(results.data,Array);
    for(let i=0;i<results.data.length;i++){
      let produit =results.data[i];
      let exist=Produits.findOne({idProduit:produit.IDE_PRODUIT});
      if(!exist){
        //console.dir(produit);
        //inserts in collection
        Produits.insert({
          idProduit:produit.IDE_PRODUIT,
          code_nature_produit:produit.CODE_NATURE_PRODUIT,
          desc_nature_police:utf8.encode(produit.DESC_NATURE_POLICE),
          code_production:produit.CODE_PRODUCTION,
          desc_production:utf8.encode(produit.DESC_PRODUCTION),
          codeProduit:produit.CODE_PRODUIT,
          desc_produit:utf8.encode(produit.DESC_PRODUIT),
          code_filiale:produit.CODE_FILIALE
        });
      
      }else{
        //console.log(user.IDE_CLIENT_UNIQUE+" existe deja");
        continue;
      }
    }
  }
});*/
}
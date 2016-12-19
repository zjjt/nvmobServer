import {Meteor} from 'meteor/meteor';
import {Agences,Contrats,Produits,DemandesPrestations,countCollection,MessagesAuClient} from '../imports/api/collections.js';
import moment from 'meteor/momentjs:moment';
import {incrementCounter,decrementCounter} from 'meteor/osv:mongo-counter';

export default ()=>{
    Meteor.methods({
        updateEmail(user,email){
            const mail=Meteor.users.update(user,{$set:{email:email}});
            return mail;
        },
        insertPrestaDemand(p){
           return DemandesPrestations.insert({
                prestaNo:incrementCounter('countCollection','prestaNo'),
                type:p.type,
                souscripteurId:p.souscripteurId,
                adresse:p.adresse,
                numero_police:p.numero_police,
                numero_payeur:p.numero_payeur,
                telephone:p.telephone,
                val_AV_max:p.val_AV_max,
                val_RP_max:p.val_RP_max,
                montant:p.montant,
                luApprouver:p.luApprouver,
                dureeRemboursementMois:p.dureeRemboursementMois,
                date_creation:new Date(),
                date_fin_traitement:null,
                traitement:"EN_COURS"//soit EN_COURS,TERMINER
            });
        },
        insertMessage(m){
            return MessagesAuClient.insert({
                messageNo:incrementCounter('countCollection','messageNo'),
                type:m.type,//ca peut etre soit REGLDISPO,MISEDEM,ACCUSER ou DIVERS
                from:m.from,
                to:m.to,
                text:m.text,
                userId:m.userId,
                date_creation:new Date(),
                sent:false
            });
        },
        updateMessageSent(userId){
            return MessagesAuClient.update({userId:userId},{$set:{sent:true}});
        }

    });
}
import { Meteor } from 'meteor/meteor';
import contrats from './Contrats.js';
import produits from './Produits.js';
import users from './Users.js';
import demandesPrestations from './DemandesPrestations.js';
import messagesAuClient from './MessagesAuClient.js';

export default function(){
    produits();
    users();
    contrats();
    demandesPrestations();
    messagesAuClient();
};
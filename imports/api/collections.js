import {Mongo} from 'meteor/mongo';
import {attachSchema} from 'meteor/aldeed:collection2';

export const Agences=new Mongo.Collection('Agences');
export const Contrats=new Mongo.Collection('Contrats');
export const Produits=new Mongo.Collection('Produits');
export const DemandesPrestations=new Mongo.Collection('demandesPrestations');
export const countCollection=new Mongo.Collection('countCollection');
export const MessagesAuClient=new Mongo.Collection('messagesAuClient');
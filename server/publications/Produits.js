import {Produits} from '../../imports/api/collections.js';
import {Meteor} from 'meteor/meteor';

export default()=>{
    Meteor.publish('listeDesProduits',()=>{
        return Produits.find();
    });
}
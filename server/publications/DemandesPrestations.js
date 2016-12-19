import {DemandesPrestations} from '../../imports/api/collections.js';
import {Meteor} from 'meteor/meteor';

export default()=>{
    Meteor.publish('demandesPrestations',()=>{
        return DemandesPrestations.find();
    });
}
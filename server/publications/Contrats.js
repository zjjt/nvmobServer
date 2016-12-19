import {Contrats} from '../../imports/api/collections.js';
import {Meteor} from 'meteor/meteor';

export default()=>{
    Meteor.publish('contrats',()=>{
        return Contrats.find();
    });
}
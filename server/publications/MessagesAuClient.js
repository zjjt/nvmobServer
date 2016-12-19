import {MessagesAuClient} from '../../imports/api/collections.js';
import {Meteor} from 'meteor/meteor';

export default()=>{
    Meteor.publish('messagesAuClient',()=>{
        return MessagesAuClient.find();
    });
}
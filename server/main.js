import { Meteor } from 'meteor/meteor';
import '../imports/startup/server/index';
import publications from './publications';
import methods from './methods';

Meteor.startup(()=>{
    publications();
    methods();
});
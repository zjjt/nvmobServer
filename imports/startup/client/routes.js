import {FlowRouter} from 'meteor/kadira:flow-router';
import {Meteor} from 'meteor/meteor';
import {mount} from 'react-mounter';
import Bienvenue from '../../ui/pages/Bienvenue.jsx';
import MainLayout from '../../ui/Layouts/MainLayout.jsx';


FlowRouter.route('/',{
	name:'home',
	action(){
		mount(MainLayout,
			{content:()=><Bienvenue/>})
	}
});
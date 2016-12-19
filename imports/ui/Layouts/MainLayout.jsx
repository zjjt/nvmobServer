import React,{PropTypes,Component} from 'react';
import store from '../../redux/store';
import client from '../../redux/rootReducer.js';
import {ApolloProvider} from 'react-apollo';
import FlowRouter from 'meteor/kadira:flow-router';




export default class MainLayout extends Component{
	

	componentDidMount() {	
		
		
		//setInterval(createDiv,1000);
	}
	render(){
		const {content}=this.props;
			return(
			<ApolloProvider store={store} client={client}>
			{content()}
			</ApolloProvider>
		);
	}
	

}
MainLayout.propTypes={
	content:PropTypes.func.isRequired
};

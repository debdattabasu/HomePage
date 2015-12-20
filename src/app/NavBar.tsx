import * as React from "react"; 
import * as Palette from "google-material-color";
import {FlexLayout} from "../layout/FlexLayout";
import {App} from "./App";
import * as Radium from "radium"

interface NavBarButtonProps {
	color?: string; 
	text?: string;
	icon?: string;
	onClick?: React.MouseEventHandler;
}

@Radium
class NavBarButton extends React.Component<NavBarButtonProps, {}> {
		
	style = {
		container: {
			cursor: 'pointer',
			padding: '0 40px 0 40px',
			transition: 'all 150ms linear',
			backgroundImage: 'radial-gradient(rgba(0,0,0,0),rgba(0,0,0,0.2))',
			backgroundColor: this.props.color,
			':hover': {
				boxShadow: '0 -8px 0 rgba(0,0,0,0.4) inset'
			}
		}, 
		text: {
			color: 'white', 
			fontSize: NavBar.height * 0.3, 
			fontFamily: 'Raleway', 
			fontWeight: 600
		}, 
		icon: {
			width: NavBar.height * 0.45, 
			height: NavBar.height * 0.45,
			backgroundPosition: 'center', 
			backgroundSize: 'cover', 
			backgroundRepeat: 'no-repeat'
		}
	}; 
	
	render() {
		return (
			<FlexLayout style={this.style.container} align="center" onClick={this.props.onClick}>
					{typeof(this.props.text) != "undefined"? <span style={this.style.text}>{this.props.text}</span>: null}
					{typeof(this.props.icon) != "undefined"? <div style={[this.style.icon, {backgroundImage: `url(${this.props.icon})`}]}/>: null}
			</FlexLayout>
		); 
	}
}

export class NavBar extends React.Component<{}, {}> {
	
	public static height = 84;
	
	static contextTypes = {
		history: React.PropTypes.object.isRequired
	}
	
	style = {
		container: {
			backgroundColor: Palette.get('Blue Grey', '900')
		}, 
		
		shadow: {
			position: 'absolute', 
			width: '100%',
			height: '100%', 
			pointerEvents: 'none',
			zIndex: 20,
			boxShadow: 'inset  0 -8px 8px -8px rgba(0, 0, 0, 0.4)',
		},
		
		heading: {
			color: 'white', 
			paddingLeft: 24, 
			fontSize: NavBar.height * 0.5, 
			fontFamily: 'Raleway', 
			fontWeight: 400, 
			cursor: 'pointer'
		}
	}
	
	history(): HistoryModule.History {
		var ctx : any = this.context; 
		return ctx.history;
	}
	
	render() {
		
		return (
			<FlexLayout direction="row" size={NavBar.height} style={this.style.container}>
				<div style={this.style.shadow}/>
				<FlexLayout align="center" onClick={()=>this.history().pushState({}, '/')}> 
					<h1 style={this.style.heading}>DEBDATTA</h1>
				</FlexLayout>
				<FlexLayout size="flex"/>
				<NavBarButton color={Palette.get('Indigo', '300')}  
				onClick={()=>window.open("https://github.com/debdattabasu/", "_blank")} icon={require('../media/GitHub.png')}/>
				<NavBarButton color={Palette.get('Purple', '300')} onClick={()=>this.history().pushState({}, '/')} text="PROJECTS"/>
				<NavBarButton color={Palette.get('Green', '300')}  onClick={()=>this.history().pushState({}, '/about')} text="ABOUT"/>
				
			</FlexLayout>
		);
	}
	
}
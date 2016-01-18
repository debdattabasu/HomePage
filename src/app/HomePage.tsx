import * as React from "react";
import {FlexLayout} from "../layout/FlexLayout";
import {TileLayout, TileItem} from "../layout/TileLayout";
import {MediaQuery} from "../layout/MediaQuery";
import * as Palette from "google-material-color";
import * as Radium from "radium"


@Radium
export class HomePage extends React.Component<{}, {}> {

	styles={
		card: {
			backgroundColor: 'white',
			borderRadius: 2,
			boxShadow: '0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)',
			padding: '25px'
		},
		para: {
			color: '#222',
			fontFamily: 'sans-serif',
			fontSize: 15, 
			marginBottom: 10,
			marginLeft: 5, 
			marginRight: 5,
			textAlign: 'justify', 
			lineHeight: '24px'
		},
		heading: {
			color: '#222',
			fontFamily: 'Arial', 
			fontSize: 21,
			marginBottom: 15
		}, 
		pic: {
			cursor: 'pointer',
			marginBottom: 24,
			width: '100%',
			borderWidth: '6px',
			borderStyle: 'solid',
			borderColor: Palette.get('Grey', '400'), 
			backgroundPosition: 'center', 
			backgroundSize: 'cover', 
			backgroundRepeat: 'no-repeat', 
			transition: 'border-color 250ms ease-in-out'
		}, 
		button: {
			cursor: 'pointer', 
			padding: '8px 10px',
			borderWidth: '2px',
			borderStyle: 'solid',
			borderColor: Palette.get('Grey', '400'), 
			borderRadius: 2,
			transition: 'all 150ms linear',
			color: '#222', 
			fontSize: '14px',
			fontFamily: 'Arial', 
			textDecoration: 'none',
			marginLeft: 12,
			':hover': {
				borderColor: '#222'
			}
			
		}
	}

	mq = new MediaQuery(this, true);
	
	componentWillUnmount() {
		this.mq.release();
	}
	
	getImage(url: string, height: number, hover: string) {
		var img = require(`../media/${url}`); 
		return {
			height: height,
			backgroundImage: `url(${img})`, 
			':hover': {
				borderColor: hover
			}
		};
	}


	render() {
		return(
			<FlexLayout justify="center">
				<TileLayout gutterWidth={30} columnWidth={380} align="center" style={{width: '100%'}}>
					<TileItem columnSpan={1}>
						<div style={this.styles.card}>
							<h2 style={this.styles.heading}>SLIPRIFT</h2>
							<div key="3_0" style={[this.styles.pic, this.getImage('Sliprift.jpg', 320, Palette.get('Amber', '600'))]}
							onClick={()=> window.open("https://sliprift.com", "_blank")}/>
							
							<p style={this.styles.para}>
								Sliprift is an online gaming portal that allows users to get their Html5 games out to the world. It is currently work in 
								progress, and has many cool and exciting features planned. It is built using AngularJS, Node and Coffeescript.
							</p>
							<FlexLayout justify="end" style={{marginTop: 20}}>
								<a key="3_1" style={this.styles.button} href="https://sliprift.com" target="_blank"> Visit Page </a>
							</FlexLayout>
						</div>	

					</TileItem>
					<TileItem columnSpan={2}>
						<div style={this.styles.card}>
							<h2 style={this.styles.heading}>DOTBUSTER</h2>
							<div key="0_0" style={[this.styles.pic, this.getImage('Dotbuster.jpg', 420, Palette.get('Green', '600'))]} 
              onClick={()=> window.open("https://sliprift.com/game/play/dotbuster", "_blank")}/>

							<p style={this.styles.para}>
								Dotbuster is a deceptively simple, surprisingly addictive arcade game playable online. Was initially built for 
								Android and recently ported to the web using Html5 apis. The online version of the game is written in typescript 
								and uses the canvas api to render graphics. The source code is available on GitHub for inspection and experimentation.  
							</p>

							<FlexLayout justify="end" style={{marginTop: 20}}>
								<a key="0_1" style={this.styles.button} href="https://sliprift.com/game/play/dotbuster" target="_blank"> Play Online </a>
								<a key="0_2" style={this.styles.button} href="https://github.com/debdattabasu/DotbusterWeb" target="_blank"> View On GitHub </a>
							</FlexLayout>
								
						</div>
					</TileItem>

					<TileItem columnSpan={2}>
						<div style={this.styles.card}>
							<h2 style={this.styles.heading}>ROBOMVVM</h2>
							<div key="1_0" style={[this.styles.pic, this.getImage('RoboMVVM.jpg', 320, Palette.get('Purple', '600'))]} 
							onClick={()=> window.open("https://github.com/debdattabasu/RoboMVVM", "_blank")}/>
							<p style={this.styles.para}>
								RoboMVVM is an open source library that facilitates the use of the MVVM pattern in Android apps. 
								The MVVM pattern utilizes Data Binding to keep arbitrary data of arbitrary components in sync. 
							</p>
							<FlexLayout justify="end" style={{marginTop: 20}}>
								<a key="1_1" style={this.styles.button} href="https://github.com/debdattabasu/RoboMVVM" target="_blank"> View On GitHub </a>
							</FlexLayout>
						</div>	
						
					</TileItem>

					<TileItem>
						<div style={this.styles.card} >
							<h2 style={this.styles.heading}>THIS PAGE</h2>
							<div key="2_0" style={[this.styles.pic, this.getImage('React.jpg', 320, Palette.get('Blue', '400'))]}
							onClick={()=>window.open("https://github.com/debdattabasu/HomePage", "_blank")}/>
							<p style={this.styles.para}>
								My personal home page is built using Typescript and React from Facebook. The Masonry inspired layout 
								on the front page is custom built and optimized for react. Look at the source code on Github for 
								more details. 
							</p>
							<FlexLayout justify="end" style={{marginTop: 20}}>
								<a key="2_1" style={this.styles.button} href="https://github.com/debdattabasu/HomePage" target="_blank"> View On GitHub </a>
							</FlexLayout>
						</div>	
					</TileItem>

					
				</TileLayout>
			</FlexLayout>
		);
	}
}

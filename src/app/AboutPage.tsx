import * as React from "react"; 
import {FlexLayout} from "../layout/FlexLayout";
import * as Palette from "google-material-color";
import * as Radium from 'radium';


@Radium
export class AboutPage extends React.Component<{}, {}> {
	styles = {
		heading: {
			color: '#222',
			fontFamily: 'Arial',
			fontSize: 21,
			marginBottom: 20
		}, 
		para: {
			color: '#222',
			fontFamily: 'Roboto, sans-serif',
			fontSize: 15, 
			marginBottom: 20,
			textAlign: 'justify', 
			lineHeight: '24px'
		},
		
		subhead: {
			fontFamily: 'Roboto, sans-serif',
			fontSize: 15, 
			fontWeight: 'bold'
		}, 
		
		link: {
			fontFamily: 'Roboto, sans-serif',
			fontSize: 15,
			color: Palette.get('Indigo', '900'), 
			transition: 'all 150ms linear',
			marginBottom: 25,
			':hover': {
				color: Palette.get('Indigo', 'A200'), 
			}
		},
		profilePic: {
			margin: 8,
			width: 320,
			height: 422, 
			backgroundPosition: 'center', 
			backgroundSize: 'cover', 
			backgroundRepeat: 'no-repeat',
			backgroundImage: `url(${require('../media/MyFace.jpg')})`
		},
		
		card: {
			backgroundColor: 'white',
			borderRadius: 2,
			boxShadow: '0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)',
			padding: '25px 32px', 
			margin: 12
		}
	}

	render() {
		return(
			<FlexLayout direction="row" size="fill" overflow="wrap" align="start" justify="center" style={{padding:12}}> 
				<FlexLayout direction="column" size={820} style={this.styles.card}>
					<h2 style={this.styles.heading}>DEBDATTA BASU</h2>
					<FlexLayout direction="row">
						<FlexLayout direction="column" size="50%" style={{marginRight:32}}>
							<p style={this.styles.para}>
								I'm an Indian engineer that loves working with user interfaces, games, graphics and animation. I graduated in 2013
								with a B.Tech in Electronics and Communication Engineering from Indian Institute of Technology, Roorkee. I find motivation in creating beautiful
								imagery and experiences through software.
							</p>

							<p style={this.styles.para}>
								My knowledge and experience encompasses a wide range of domains related to Real Time Graphics, Game Development
								and Rich User Interfaces.
							</p>	
							
							<p style={this.styles.para}>
							 I have worked with DirectX and OpenGL, written shaders and rendering algorithms, 
								made games in Unity, created web apps with AngularJS and React, and written server code in NodeJS. 
								I am fluent in C++, C#, Java, Javascript, Coffeescript and Typescript. 
							</p>
							
							<p style={this.styles.para}>
								I am currently lead mentor for Computer Graphics and Game Programming at Backstage Pass Institute of Gaming and Technology. 
								In the past I have worked as Driver Engineer at ThinCI Semiconductors, Software Engineer at Junglee Games.  
							</p>
						</FlexLayout>
						
						<FlexLayout direction="column">
							<div style={{backgroundColor: Palette.get('Grey', '300')}}>
								<div style={this.styles.profilePic}/>
							</div>
						</FlexLayout>
						
					</FlexLayout>
				</FlexLayout>
				<FlexLayout direction="column" size={450} style={this.styles.card}>
					<h2 style={this.styles.heading}>CONTACT ME</h2>
					<div style={this.styles.subhead}> Mail </div>
					<a style={this.styles.link} href="mailto:debdatta.basu91@gmail.com" key={0}>debdatta.basu91@gmail.com</a>
					
					<div style={this.styles.subhead}> GitHub </div>
					<a style={this.styles.link} href="https://github.com/debdattabasu"  target="_blank" key={1}>https://github.com/debdattabasu</a>
					
					<div style={this.styles.subhead}> LinkedIn </div>
					<a style={this.styles.link} href="https://in.linkedin.com/in/debdattabasu" target="_blank" key={2}>in.linkedin.com/in/debdattabasu</a>
					
				</FlexLayout>
			</FlexLayout>
		);
	}
}
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
			backgroundImage: 'url(https://scontent-hkg3-1.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/11145166_963568530332104_6985097467841199592_n.jpg?oh=7057e3f4a90467ddf347e0246a68b257&oe=56D3F680)'
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
								I'm a Swedish engineer that loves working with interactivity, graphics and animation.
								I'm motivated by a need to create distracting interactive contraptions and obsessive about 
								pushing the open web into unexpected places.
							</p>
							
							<p style={this.styles.para}>
								Currently working full time on Slides, which I also co-founded. 
								It's a platform for creating, presenting and sharing presentations.
							</p>
							
							<p style={this.styles.para}>
								My work experience includes campaign sites in Flash, web apps in HTML, 
								experimental HTML5 and CSS3 projects as well as mobile development. 
								My personal projects have received a resounding amount appreciation, 
								they were served to over 140,000,000 people around the globe in the past year alone.
							</p>
							
							<p style={this.styles.para}>
								In the past I have worked as Senior Interactive Developer at Fi, Lead Interactive Developer 
								at Qwiki and Lead Interface Engineer at Squarespace.

							</p>
							
							<p style={this.styles.para}>
								During my time with Fi I led the development of both small and large-scale projects for 
								clients such as Google, BBC, Nintendo, Wacom and SAS.
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
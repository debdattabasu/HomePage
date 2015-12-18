import * as React from "react"; 
import * as Palette from "google-material-color";
import * as Radium from "radium";
import {FlexLayout} from "../layout/FlexLayout";
import {NavBar} from "./NavBar"


interface AppProps extends React.Props<App> {
	
}

@Radium
export class App extends React.Component<AppProps, {}> {
	
	
	bodyStyle = {
		backgroundColor: Palette.get('Grey', '400'),
		transition: 'background-color 250ms ease-in-out',
		':hover': {
			backgroundColor: Palette.get('Grey', '800')
		}
	}
	
	render() {
	
		return (
			<FlexLayout direction="column" size="fill">
				<NavBar/>
				<FlexLayout direction="column" size="flex" overflow="scroll" style={{backgroundColor: Palette.get('Grey', '200')}}>
					{this.props.children}
				</FlexLayout>
			</FlexLayout>
			
		);
		
	}
	
}
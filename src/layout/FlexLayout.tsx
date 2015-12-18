import * as React from "react";
import * as _ from "lodash";
import {DomEvents, ReactUtil} from "../util/ReactUtil"
import * as Radium from "radium"

export interface FlexLayoutProps extends React.Props<FlexLayout>, DomEvents {
	direction?: string;
	align?: string;
	justify?: string;
	overflow?: string;
	size?: string | number;
	style?: Object;
}


@Radium
export class FlexLayout extends React.Component<FlexLayoutProps, {}> {

	static defaultProps : FlexLayoutProps = {
		direction: "row",
		align: "stretch",
		justify: "start",
		size: "auto",
		overflow: "none",
		style: {}
	}

	render() {
		var style:any = {
			position: 'relative',
			display: 'flex',
			flexDirection: this.props.direction,
			flexWrap: 'nowrap'
		};

		var overflow = this.props.overflow;

		if(overflow == 'wrap') {
			style.flexWrap = 'wrap';
		}

		if(overflow == 'scroll') {
			var overflowMap = {
				row: 'overflowX',
				column: 'overflowY'
			}
			style[overflowMap[this.props.direction]] = 'auto';
		}

		var getAlignString = str => {
			var flexStrings = ['start', 'end'];
			if(flexStrings.indexOf(str) > -1) return `flex-${str}`;
			return str;
		};

		style.alignItems = getAlignString(this.props.align);
		style.justifyContent = getAlignString(this.props.justify);

		var size = this.props.size;

		if(typeof(size) == 'number') size = `${size}px`;

		if(size == 'flex') {
			style.flexGrow = 1;
			style.flexShrink = 1;
			style.flexBasis = 0;
		} else if(size == 'fill') {
			style.width = '100%';
			style.height = '100%';
			style.minHeight="100%";
		} else if(size != 'auto') {
			style.flexBasis = size;
		}
		
		var props = {style: [style, this.props.style]}; 
		
		ReactUtil.mergeDomEvents(props, this.props);

		return React.createElement('div', props, this.props.children);
	}
}

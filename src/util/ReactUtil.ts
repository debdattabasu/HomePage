import * as React from "react";

export interface DomEvents {
	
	// Focus Events
	onFocus?: React.FocusEventHandler;
	onBlur?: React.FocusEventHandler;
	
	//Mouse Events
	onClick?: React.MouseEventHandler;
	onContextMenu?: React.MouseEventHandler;
	onDoubleClick?: React.MouseEventHandler;
	onDrag?: React.DragEventHandler;
	onDragEnd?: React.DragEventHandler;
	onDragEnter?: React.DragEventHandler;
	onDragExit?: React.DragEventHandler;
	onDragLeave?: React.DragEventHandler;
	onDragOver?: React.DragEventHandler;
	onDragStart?: React.DragEventHandler;
	onDrop?: React.DragEventHandler;
	onMouseDown?: React.MouseEventHandler;
	onMouseEnter?: React.MouseEventHandler;
	onMouseLeave?: React.MouseEventHandler;
	onMouseMove?: React.MouseEventHandler;
	onMouseOut?: React.MouseEventHandler;
	onMouseOver?: React.MouseEventHandler;
	onMouseUp?: React.MouseEventHandler;


	// Touch Events
	onTouchCancel?: React.TouchEventHandler;
	onTouchEnd?: React.TouchEventHandler;
	onTouchMove?: React.TouchEventHandler;
	onTouchStart?: React.TouchEventHandler;

	// UI Events
	onScroll?: React.UIEventHandler;

	// Wheel Events
	onWheel?:React.WheelEventHandler;

}

export class ReactUtil {
	public static mergeDomEvents(target: any, source: any) {
		//Focus Events
		target.onFocus = source.onFocus; 
		target.onBlur = source.onBlur;
		
		//Mouse Events
		target.onClick = source.onClick;
		target.onContextMenu = source.onContextMenu;
		target.onDoubleClick = source.onDoubleClick;
		target.onDrag = source.onDrag;
		target.onDragEnd = source.onDragEnd;
		target.onDragEnter = source.onDragEnter;
		target.onDragExit = source.onDragExit;
		target.onDragLeave = source.onDragLeave;
		target.onDragOver = source.onDragOver;
		target.onDragStart = source.onDragStart;
		target.onDrop = source.onDrop;
		target.onMouseDown = source.onMouseDown;
		target.onMouseEnter = source.onMouseEnter;
		target.onMouseLeave = source.onMouseLeave;
		target.onMouseMove = source.onMouseMove;
		target.onMouseOut = source.onMouseOut;
		target.onMouseOver = source.onMouseOver;
		target.onMouseUp = source.onMouseUp;
	
		// Touch Events
		target.onTouchCancel = source.onTouchCancel;
		target.onTouchEnd = source.onTouchEnd;
		target.onTouchMove = source.onTouchMove;
		target.onTouchStart = source.onTouchStart;
	
		// UI Events
		target.onScroll = source.onScroll;
	
		// Wheel Events
		target.onWheel = source.onWheel;
	
		return target;
	
	}
	
}
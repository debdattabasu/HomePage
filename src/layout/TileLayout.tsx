import * as React from "react";
import * as _ from "lodash"
import * as Radium from "radium";

export interface TileItemProps extends React.Props<TileItem> {
  columnSpan?: number;
}


export class TileItem extends React.Component<TileItemProps, {}> {
  static defaultProps: TileItemProps = {
    columnSpan: 1,
  }
  
  render() {
    var style = {
      position: 'absolute', 
      width: this.props['width'] || 0,
      transform: `translate(${this.props['x'] || 0}px, ${this.props['y'] || 0}px)`, 
      transition: 'transform 100ms ease-in-out'
    }
    
    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
}

class TileLayoutProcessor {
  gutterWidth: number; 
  numColumns: number;
  columnHeights: number[];
  columnWidth: number;
  offsetX = 0; 
  
  constructor(width: number, gutterWidth: number, columnWidth: number, align: string) {
    var numColumns = Math.max(Math.floor((width - gutterWidth)/ (columnWidth + gutterWidth)), 1); 
    var widthDelta = Math.max(width - ((numColumns + 1) * gutterWidth + numColumns * columnWidth), 0);
    
    if(align == "center") {
      this.offsetX = 0.5 * widthDelta;
    }
    
    if(align == "end") {
      this.offsetX = widthDelta;
    }
    
    this.gutterWidth = gutterWidth;
    this.columnWidth = columnWidth;
    this.numColumns = numColumns; 
    this.columnHeights = new Array<number>(numColumns);
    
  }
  
  private getColumnHeight(column: number, columnSpan: number) {
    var columnHeight = 0;
    for(var i = 0; i < columnSpan; i ++) {
      var candidateHeight = this.columnHeights[column + i];
      if(candidateHeight > columnHeight) columnHeight = candidateHeight
    }
    return columnHeight;
  }
  
  private setColumnHeight(column: number, columnSpan: number, height: number) {
    for(var i = 0; i < columnSpan; i ++) {
      var columnIndex = column + i;
      this.columnHeights[columnIndex] = height;
    }
  }
  
  private getSuitableColumn(columnSpan: number) {
    var maxColumns = this.numColumns - columnSpan + 1;
    
    var columnHeight = Number.MAX_VALUE; 
    var column = 0; 
    
    for(var i = 0; i < maxColumns; i++) {
      var candidateHeight = this.getColumnHeight(i, columnSpan); 
      if(candidateHeight < columnHeight) {
        columnHeight = candidateHeight;
        column = i; 
      }
    }
    
    return column;
  }
  
  
  positionItem(height: number, columnSpan: number) {
    
    columnSpan = Math.floor(columnSpan);
    if(columnSpan < 1) columnSpan = 1; 
    if(columnSpan > this.numColumns) columnSpan = this.numColumns;
    
    var column = this.getSuitableColumn(columnSpan);
    var columnHeight = this.getColumnHeight(column, columnSpan); 
    
    
    var dimensions = {
      x: this.gutterWidth * (column + 1) + this.columnWidth * column + this.offsetX, 
      y: columnHeight + this.gutterWidth,
      width: this.gutterWidth * (columnSpan -1) + this.columnWidth * columnSpan
    };
    
    this.setColumnHeight(column, columnSpan, columnHeight + this.gutterWidth + height);
       
    return dimensions;
  }
  
  getHeight() {
    return this.getColumnHeight(0, this.numColumns) + this.gutterWidth; 
  }
}


export interface TileLayoutProps extends React.Props<TileLayout> {
  gutterWidth?: number;
  columnWidth?: number;
  style?: Object;
  align?: string;
}

interface TileLayoutState {
  childHeights: number[];
  width: number;
}

@Radium
export class TileLayout extends React.Component<TileLayoutProps, TileLayoutState> {
  
  static defaultProps : TileLayoutProps = {
    gutterWidth: 0, 
    columnWidth: 256, 
    style: {}, 
    align: "start"
  }

  state: TileLayoutState = {
    childHeights: [],
    width: 720
  }
  
  handleSizeChanged(node : HTMLElement) {
    if(node == null) return;
    
    var width = node.offsetWidth; 
    
    var childHeights: number[] = [];
  
    for(var i = 0; i < node.children.length; i++) {
      var child : any = node.children[i];
      childHeights.push(child.offsetHeight); 
    }
    
    var childrenChanged = ()=> {
      if(childHeights.length != this.state.childHeights.length) return true;
      for(var i = 0; i < childHeights.length; i ++) {
        if(childHeights[i] != this.state.childHeights[i]) return true; 
      }
      
      return false;
    }
  
    if(width != this.state.width || childrenChanged()) {
      this.setState({
        childHeights: childHeights, 
        width
      });
    }
  }
  
  render() {
    
    var children = React.Children.map(this.props.children, (child: React.ReactElement<any>) => 
    child.type === TileItem? child: null).filter(child => child != null);
    

    var layoutProcessor = new TileLayoutProcessor(this.state.width, this.props.gutterWidth, this.props.columnWidth, this.props.align); 
    
    var wrappedChildren = children.map((child, idx) => {
      var props = layoutProcessor.positionItem(this.state.childHeights[idx], child.props.columnSpan);
      return React.cloneElement(child, props);
    });
    
    var style = {
      position: 'relative', 
      width: this.state.width,
      height: layoutProcessor.getHeight()
    };

    
    return (
      <div style={[style, this.props.style]} ref={this.handleSizeChanged.bind(this)}>
        {wrappedChildren}
      </div>
    ); 
  }
}
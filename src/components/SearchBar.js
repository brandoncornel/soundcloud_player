import React, { Component } from 'react'
import Autocomplete from 'react-autocomplete';

export default class SearchBar extends Component {

  handleRenderItem(item, isHighlighted){
    const listStyles = {
      item: {
        padding: '2px 6px',
        cursor: 'default'
      },

      highlightedItem: {
        color: 'white',
        background: '#F38B72',
        padding: '2px 6px',
        cursor: 'default'
      }
    };

    // Render list items
    return (
      <div
        style={isHighlighted ? listStyles.highlightedItem : listStyles.item}
        key={item.id}
        id={item.id}
      >{item.title}</div>
    )
  }

  render() {
    return (
      <div className = "search">
        <Autocomplete
        ref="Autocomplete"
        inputProps = {{title:"Title"}}
        value = {this.props.autoCompleteValue}
        items = {this.props.tracks}
        getItemValue = {(item) => item.title}
        onSelect = {this.props.handleSelect}
        onChange = {this.props.handleChange}
        renderItem = {this.handleRenderItem.bind(this)}
        />
      </div>
    )
  }
}

import React, {PureComponent} from 'react';

const withHoverItem = (Component, onHover, onUnHover) => {
  class WithHoverItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isHovered: false
      };
      this.hoverHandler = this.hoverHandler.bind(this);
      this.unHoverHandler = this.unHoverHandler.bind(this);
    }

    hoverHandler(param) {
      this.setState({isHovered: true});
      if (onHover) {
        onHover(param);
      }
    }

    unHoverHandler() {
      this.setState({isHovered: false});
      if (onUnHover) {
        onUnHover();
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          onHover={this.hoverHandler}
          onUnHover={this.unHoverHandler}
          hovered={this.state.isHovered}
        />
      );
    }
  }

  return WithHoverItem;
};

export default withHoverItem;

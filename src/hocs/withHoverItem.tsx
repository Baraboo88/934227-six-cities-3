import * as React from 'react';
import {PureComponent} from 'react';
import {CardModel, CityModel} from "../utils/utils";

interface WithHoverItemProps {
  onHover?: (id: number) => void;
  onUnHover?: () => void;
  cityName?: CityModel;
  activeCity?: CityModel;
  onCityNameClick?: (city: CityModel) => void;
  card?: CardModel;
  nearPlace?: boolean;
  favorite?: boolean;
}

interface WithHoverItemState {
  isHovered: boolean;
}


const withHoverItem = (Component) => {
  class WithHoverItem extends PureComponent <WithHoverItemProps, WithHoverItemState> {
    constructor(props: WithHoverItemProps) {
      super(props);
      this.state = {
        isHovered: false
      };
      this._hoverHandler = this._hoverHandler.bind(this);
      this._unHoverHandler = this._unHoverHandler.bind(this);
    }

    _hoverHandler(param) {
      this.setState({isHovered: true});
      if (this.props.onHover) {
        this.props.onHover(param);
      }
    }

    _unHoverHandler() {
      this.setState({isHovered: false});
      if (this.props.onUnHover) {
        this.props.onUnHover();
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          onHover={this._hoverHandler}
          onUnHover={this._unHoverHandler}
          hovered={this.state.isHovered}
        />
      );
    }
  }

  return WithHoverItem;
};

export default withHoverItem;

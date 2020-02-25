import React, {PureComponent} from 'react';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';

const FILTERS = [
  {name: `popular`, value: `Popular`},
  {name: `lowToHigh`, value: `Price: low to high`},
  {name: `highToLow`, value: `Price: high to low`},
  {name: `topRated`, value: `Top rated first`}
];

class OffersFilter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFilter: `popular`,
      activeFilterValue: `Popular`,
      isOpen: false,
      city: ``
    };

    this._filterOpenHandler = this._filterOpenHandler.bind(this);
  }

  componentDidMount() {
    this.setState({
      activeFilter: `popular`,
      activeFilterValue: `Popular`,
      isOpen: false
    });
  }

  componentDidUpdate() {
    const newCity = new URLSearchParams(this.props.location.search).get(`city`);

    if (newCity !== this.state.city) {
      this.setState({
        activeFilter: `popular`,
        activeFilterValue: `Popular`,
        city: newCity
      });
    }
  }

  _setActiveFilter(filter) {
    this.setState({
      activeFilter: filter.name,
      activeFilterValue: filter.value,
      isOpen: false
    });
    const city = new URLSearchParams(this.props.location.search).get(`city`);
    if (city) {
      this.setState({
        city
      });
    }
    this.props.history.push(`${city ? `?city=${city}&` : `?`}filter=${filter.name}`);
  }

  _filterOpenHandler() {
    this.setState((prevState) => ({isOpen: !prevState.isOpen}));
  }

  _renderFilters() {
    return FILTERS.map((filter, index) => (
      <li
        className={`places__option ${filter.name === this.state.activeFilter &&
        `places__option--active`}`}
        tabIndex="0"
        onClick={() => this._setActiveFilter(filter)}
        key={`${filter.name} - ${index}`}
      >
        {filter.value}
      </li>
    ));
  }

  render() {
    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0" onClick={this._filterOpenHandler}>
          {this.state.activeFilterValue}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul
          className={`places__options places__options--custom places__options--${
            this.state.isOpen ? `opened` : `custom`
          }`}
        >
          {this._renderFilters()}
        </ul>
      </form>
    );
  }
}

OffersFilter.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object
};

export default withRouter(OffersFilter);

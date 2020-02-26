import React, {PureComponent} from 'react';
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
      city: props.city
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

    if (this.props.city !== this.state.city) {
      this.props.onFilterReset();
      this.setState({
        activeFilter: `popular`,
        activeFilterValue: `Popular`,
        city: this.props.city
      });
    }
  }

  _setActiveFilter(filter) {
    this.setState({
      activeFilter: filter.name,
      activeFilterValue: filter.value,
      isOpen: false
    });
    this.props.onChangeFilter(filter.name);
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
        data-test='test-filter-click'
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
  onChangeFilter: PropTypes.func.isRequired,
  onFilterReset: PropTypes.func.isRequired,
  city: PropTypes.string
};


export default OffersFilter;

import { connect } from 'react-redux';
import { increment } from './actions';
import Counter from './counter';

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment())
    }
  }
}

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default CounterContainer;

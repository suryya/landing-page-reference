import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

import {
  makeSelectEmployeesStatus,
  makeSelectSingleEmployeeStatus,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import Landing from './Landing';
import { fetchEmployees, fetchSingleEmployee } from './actions';

const mapDispatchToProps = (dispatch) => ({
  fetchSingleEmployee: (id) => {
    dispatch(fetchSingleEmployee(id));
  },
  fetchEmployees: () => {
    dispatch(fetchEmployees());
  }
});

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  employees: makeSelectEmployeesStatus(),
  singleSelectedEmployee: makeSelectSingleEmployeeStatus(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'employees', reducer });
const withSaga = injectSaga({ key: 'employees', saga });

export default compose(withReducer, withSaga, withConnect)(Landing);
export { mapDispatchToProps };

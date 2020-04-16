// needed for regenerator-runtime
// (ES7 generator support is required by redux-saga)
import '@babel/polyfill';

// Enzyme adapter for React 16
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-localstorage-mock';

Enzyme.configure({ adapter: new Adapter() });

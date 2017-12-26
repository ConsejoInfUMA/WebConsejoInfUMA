import { connect } from 'react-redux';
import App from '../components/App';
import {loadFromStore} from '../actions/App';


const mapStateToProps = ({appState}) => ({
    navBarLogo: appState.navBarLogo
});

const mapDispatchToProps = (dispatch) => ({
    loadFromStorage: (url, id) => dispatch(loadFromStore(url, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

import * as React from 'react'
import { Router, Route, Switch } from 'react-router-native'
import createHistory from 'history/createMemoryHistory'
import { 
    View,
    StyleSheet,
    Platform,
    Dimensions,
} from 'react-native'
import { statusBarHeight } from 'rn_components/utils'
import Home from './home'
import pages from './pages'

const history = createHistory()

const router = [{
    key: 'home',
    component: Home,
    path: '/',
    exact: true,
}].concat(pages.routerArr)
class App extends React.Component {
    render () {
        return (
            <View style={{ flex: 1, paddingTop: statusBarHeight() }}>
                <Router history={history}>
                    <Switch>
                        <View style={ {flex: 1} }>
                            { router.map(item => <Route key={item.key} exact={item.exact} path={item.path} component={item.component}/>) }
                        </View>
                    </Switch>
                </Router>
            </View>
        )
    }
}

export default App

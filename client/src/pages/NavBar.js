import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


class NavBar extends React.Component {
    render(){
        // const { location } = props
        const { location } = this.props
        return(

            <Menu>
                <Link to='/'>
                  <Menu.Item active={location.pathname === '/'} >Home</Menu.Item >
                </Link>
                <Link to='/things'>
                  <Menu.Item active={location.pathname === '/things'} >
                    Things   
                 </Menu.Item >
                </Link>
                <Link to='/examples'>
                  <Menu.Item active={location.pathname === '/examples'} >
                    Examples   
                 </Menu.Item >
                </Link>

            </Menu>
        )

    }
}

export default withRouter(NavBar)
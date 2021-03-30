import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-light bg-light">
                    <form class="container-fluid justify-content-end">
                        <button type="button" class="btn btn-outline-primary">Logout</button>
                    </form>
                </nav>
            </div>
        )
    }
}

export default Header

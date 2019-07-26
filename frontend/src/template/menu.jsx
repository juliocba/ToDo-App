import React from 'react'

export default props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">
                    <i className="fa fa-calendar-check-o"></i> TodoApp
                </a>
            </div>

            <div id="navbar" className="navbar-collapse collapse">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="#/todos">Tarefas</a>
                    <a className="nav-item nav-link" href="#/about">Sobre</a>
                </div>
            </div>
        </div>
    </nav>
)
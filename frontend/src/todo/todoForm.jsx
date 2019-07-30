import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { add, changeDescription, search, clear } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        const {add, description, clear} = this.props
        if (e.key === 'Enter') {
            add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render() {
        const {add, description} = this.props
        return (
            <div role="form" className="todoForm">
                <div className="row">
                    <Grid cols="12 9 10">
                        <input id="description" type="text" className="form-control form-control-sm"
                            placeholder="Adicione uma tarefa"
                            onChange={this.props.changeDescription}
                            onKeyUp={this.keyHandler}
                            value={this.props.description} />
                    </Grid>

                    <Grid cols="12 3 2">
                        <IconButton style="primary" icon="plus" onClick={() => add(description)}></IconButton>
                        <IconButton style="secondary" icon="close" onClick={this.props.clear}></IconButton>
                    </Grid>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
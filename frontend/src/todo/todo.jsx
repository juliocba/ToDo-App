import React from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'


export default props => (
    <div>
        <br />
        <PageHeader name="Tarefas" small="Cadastro" />
        <TodoForm />
        <TodoList />
    </div>
)
import React from 'react';

let style = {
    tableContent: {
        border: "1px solid black"
    },
    checkedTodo: {
        textDecoration: "line-through"
    },
    notCheckedTodo: {
        textDecoration: "none"
    }
};

export class TodoBox extends React.Component{
    render() {
        return (
            <div className="todoBox">
                <h1>Todos</h1>
                <TodoList data={this.props.data} />
                <TodoForm />
            </div>
        );
    }
}

class TodoList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            data: this.props.data,
            titleValue: "",
            detailValue: ""
        };
        this.changeTitle = this.changeTitle.bind(this);
        this.changeDetail = this.changeDetail.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    changeTitle(e) {
        this.setState({detailValue: e.target.value});
    }

    changeDetail(e) {
        this.setState({detailValue: e.target.value});
    }

    addTodo() {
        todo.push(
            <Todo title={this.state.titleValue} key={this.state.titleValue}>{this.state.detailValue}</Todo>
        );
    }

    render() {
        var todo = this.props.data.map(function (obj) {
            return (
                <Todo title={obj.title} key={obj.title}>{obj.detail}</Todo>
            );
        });
        return (
            <div className="todoList">
                <div>
                    Title:<input type="text" value={this.state.titleValue} onChange={this.changeTitle} />
                    Detail:<input type="text" value={this.state.detailValue} onChange={this.changeDetail} />
                    <button onClick={this.addTodo}>Add</button>
                </div>
                <table style={{border: "2px solid black"}}>
                    <tbody>
                        { todo }
                    </tbody>
                </table>
            </div>
        );
    }
}

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {checked: false, checkedCSS: style.notCheckedTodo};
        this.handleChange = this.handleChange.bind(this);
        this._onDelete = this._onDelete.bind(this);
    }

    handleChange(e) {
        this.setState({checked: e.target.checked});
        if (e.target.checked)
            this.setState({checkedCSS: style.checkedTodo});
        else {
            this.setState({checkedCSS: style.notCheckedTodo});
        }
    }

    _onDelete() {
        this.props.onDelete(this.props.title);
    }

    render() {
        return (
            <tr style={ this.state.checkedCSS }>
                <td style={style.tableContent}>
                    <button onClick={this._onDelete}>X</button>
                </td>
                <td style={style.tableContent}>
                    <input type="checkbox" onChange={this.handleChange.bind(this)} />
                </td>
                <td style={style.tableContent}>{this.props.title}</td>
                <td style={style.tableContent}>{this.props.children}</td>
            </tr>
        );
    }
}

class TodoForm extends React.Component {
    render() {
        return (
            <div className="todoForm">
                I am a TodoForm.
            </div>
        );
    }
}

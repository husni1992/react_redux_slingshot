import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../styles/todo-list-page.css";

export default class TodoList extends React.Component {
  state = {
    isChecked: null
  };

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  switchBtn = () => {
    return (
      <label>
        <input
          ref="switch"
          checked={this.state.isChecked}
          onChange={this._handleChange}
          className="switch"
          type="checkbox"
        />
        <div>
          <span>
            <span className="icon icon-toolbar grid-view" />
          </span>
          <span>
            <span className="icon icon-toolbar ticket-view" />
          </span>
          <div />
        </div>
      </label>
    );
  };
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Date</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.todoList.map(x => {
              function dateFomatter(str) {
                return new Date(str).toLocaleDateString();
              }
              return (
                <tr key={x.id}>
                  <td>{x.name}</td>
                  <td>{dateFomatter(x.date)}</td>
                  <td>{this.switchBtn()}</td>
                  <td>
                    <button onClick={() => this.props.removeItem(x.id)}>
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr />
          </tbody>
        </table>
      </div>
    );
  }
}

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired
};

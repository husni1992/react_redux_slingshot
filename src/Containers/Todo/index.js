import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../Redux/Modules/Todo/todo.actions";
import TodoList from "../../components/TodoList";
import TodoForm from "../../components/TodoForm";

export class TodoPage extends React.Component {
  state = {
    clearForm: false
  };

  toggleAll = () => {
    this.props.actions.toggleAll();
  };

  removeItem = id => {
    this.props.actions.removeItem(id);
  };

  doneItem = id => {
    this.props.actions.doneItem(id);
  };

  addItem = event => {
    if (event.key === "Enter") {
      this.props.actions.addItem(event.target.value);
      this.setState({
        clearForm: true
      });
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentDidMount() {
    if (!this.props.todo.items.length) {
      this.props.actions.fetchAllTodos();
    }
  }

  render() {
    const isLoading = this.props.todo.fetchingTodos;
    return isLoading ? (
      <div>
        <h3>Loading......</h3>
      </div>
    ) : (
      <div>
        <TodoList
          todoList={this.props.todo.items}
          removeItem={this.removeItem}
        />
        <TodoForm
          addItem={this.addItem.bind(this)}
          clearForm={this.state.clearForm}
        />
      </div>
    );
  }
}

TodoPage.propTypes = {
  actions: PropTypes.object.isRequired,
  todo: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    todo: state.todo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);

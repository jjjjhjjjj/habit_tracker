import React, { Component } from "react";
import HabitAddForm from "./habitAddForm";
import Habit from "./habit";

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  hadleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    return (
      <div>
        <HabitAddForm onAdd={this.hadleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <button
          type="button"
          className="habits-reset"
          onClick={this.props.onReset}
        >
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;

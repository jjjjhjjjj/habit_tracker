import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    //this.inputRef.current.value = "";
    formRef.current.reset();
  }
  return (
    <form ref={formRef} onSubmit={onSubmit} className="add-form">
      <input 
        ref={inputRef} 
        type="text" 
        className="add-input"
         placeholder="Habit" 
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
});

export default HabitAddForm;


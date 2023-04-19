import React, { Component } from "react";
import styled from "styled-components";



class TaskInput extends Component {
    state = {
        tasks: [
            {
                name: "add a task",
                discriptions: "yioooo",
                date: "12/12/2002",
                // hight, medium, low
                urgency: "high",
                worker: "samir",
                category: "todo"
            }
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            urgency: "low",
            date: new Date().toISOString().substr(0, 10),
            worker: "",
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, description, urgency, date, worker } = this.state;
        const newTask = { name, description, urgency, date, worker };
        // this.props.onAddTask(newTask);
        console.log(newTask);

        this.setState({
            name: "",
            description: "",
            urgency: "low",
            date: new Date().toISOString().substr(0, 10),
            worker: "",
        });
    };
    handleAddTask = (newTask) => {
        this.setState({
            tasks: [...this.state.tasks, newTask]
        });
    }

    render() {
        const { name, description, urgency, date, worker } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <InputWrapper>
                    <InputLabel>Task Name:</InputLabel>
                    <InputField
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleInputChange}
                        placeholder="Enter task name"
                        required
                    />
                </InputWrapper>
                <InputWrapper>
                    <InputLabel>Description:</InputLabel>
                    <InputField
                        type="text"
                        name="description"
                        value={description}
                        onChange={this.handleInputChange}
                        placeholder="Enter task description"
                    />
                </InputWrapper>
                <InputWrapper>
                    <InputLabel>Urgency:</InputLabel>
                    <SelectField
                        name="urgency"
                        value={urgency}
                        onChange={this.handleInputChange}
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </SelectField>
                </InputWrapper>
                <InputWrapper>
                    <InputLabel>Date:</InputLabel>
                    <InputField
                        type="date"
                        name="date"
                        value={date}
                        onChange={this.handleInputChange}
                    />
                </InputWrapper>
                <InputWrapper>
                    <InputLabel>Assigned To:</InputLabel>
                    <InputField
                        type="text"
                        name="worker"
                        value={worker}
                        onChange={this.handleInputChange}
                        placeholder="Enter worker name"
                    />
                </InputWrapper>
                <InputWrapper>
                    <InputField type="submit" value="Add Task" />
                </InputWrapper>
            </form>
        );
    }
}

export default TaskInput;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const InputLabel = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const InputField = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
`;

const SelectField = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
`;
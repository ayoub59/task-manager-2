import React from "react";
import styled from "styled-components";
class Board extends React.Component {
    state = {
        tasks: [
            {
                name: "Add More Tasks",
                category: "todo"
            }
        ]
    };

    onDragOver = ev => {
        ev.preventDefault();
    };

    onDragStart = (ev, name) => {
        ev.dataTransfer.setData("id", name);
    };

    onDrop = (ev, cat) => {
        const id = ev.dataTransfer.getData("id");

        let tasks = this.state.tasks.filter(task => {
            if (task.name == id) {
                task.category = cat;
            }
            return task;
        });
        this.setState({
            ...this.state,
            tasks
        });
    };

    handleKeyPress = ev => {
        if ((ev.key == "Enter") && (ev.target.value != "")) {
            this.setState({
                tasks: [
                    ...this.state.tasks,
                    { name: ev.target.value, category: "todo" }
                ]
            });
            ev.target.value = " ";
        }
    };

    render() {
        var tasks = {
            todo: [],
            working: [],
            complete: [],
            trash: []
        };

        this.state.tasks.forEach(t => {
            tasks[t.category].push(
                <Card
                    className="item-container"
                    key={t.name}
                    draggable
                    onDragStart={e => this.onDragStart(e, t.name)}
                >
                    <CardTitle>
                        {t.name}

                    </CardTitle>
                </Card>
            );
        });



        return (
            <GigaContainer>
                <Container>
                    <Column

                        className="drop-area"
                        onDragOver={e => this.onDragOver(e)}
                        onDrop={e => this.onDrop(e, "todo")}
                    >
                        <Title>Todo</Title>
                        {tasks.todo}
                        <Input>
                            <Add
                                onKeyPress={e => this.handleKeyPress(e)}
                                className="input"
                                type="text"
                                placeholder="Task Name"
                            />
                        </Input>
                    </Column>

                    <Column
                        className="drop-area"
                        onDragOver={e => this.onDragOver(e)}
                        onDrop={e => this.onDrop(e, "working")}
                    >
                        <Title>Working</Title>
                        {tasks.working}
                    </Column>

                    <Column
                        className="drop-area"
                        onDragOver={e => this.onDragOver(e)}
                        onDrop={e => this.onDrop(e, "complete")}
                    >
                        <Title>Complete</Title>
                        {tasks.complete}
                    </Column>
                    <Remove
                        class="trash-drop"
                        onDrop={e => this.onDrop(e, "trash")}
                        onDragOver={e => this.onDragOver(e)}
                    >
                        Drop here to remove
                    </Remove>

                </Container>


            </GigaContainer>
        );
    }
};

export default Board;


const GigaContainer = styled.div`
margin-top: 2vw;
`
const Container = styled.div`
/* background-color: red; */
display: flex;
width: 80vw;
justify-content: space-around;
`
const Column = styled.div`
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin-right: 12px;
  min-height: 40px;
  width: 25%;
  background-color: #f4f5f7;
  color: black;
`
const Input = styled.div`
  background-color: #fff;
  border: none;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 45, 66, 0.25);
  color: #172b4d;
  font-size: 14px;
  padding: 8px;
  width: 100%;
`
const Add = styled.input`
  background-color: #ebecf0;
  border-radius: 3px;
  border: none;
  color: #6b808c;
  font-size: 14px;
  padding: 8px;
  text-align: left;
  width: 100%;
`
const Remove = styled.div`
  height: 100%;
  min-height: 100px;
  padding: 8px;
  transition: background-color 0.2s ease, border 0.2s ease;
  background-color: #f4f5f7;
  color: black;
  border-radius: 3px;


`

const Title = styled.h1`
font-family: arial;
font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  text-align: center;

`
const Card = styled.div`
/* background-color: red; */
background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 45, 66, 0.25);
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  max-width: 300px;
  min-height: 20px;
  position: relative;
  z-index: 0;
`
const CardTitle = styled.div`
  font-weight: bold;
  padding: 8px;
  color: #6b808c;
`
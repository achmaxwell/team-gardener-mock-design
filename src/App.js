import './App.css';
import {Button, FormGroup, Form, Input} from 'reactstrap';
import logo from "./assets/team-gardener-logo.png";

function App() {
  return (
    <div className="bgDiv">
      <img src={logo} alt="Team Gardeners Logo" className="logoImg"/>
      <div className="mainDiv">
        add new note!
        <br />
        <Button className="mainBtn">view notes</Button>
        <br />
        <Form>
        <FormGroup>
          <Input type="textarea" name="text" id="exampleText" placeholder="Plant name here" className="formInputName"/>
        </FormGroup>
        <FormGroup>
          <Input type="textarea" name="text" id="exampleText" placeholder="Plant note here" className="formInputNote"/>
        </FormGroup>
        <Button className="submitBtn">submit</Button>
        <Button className="cancelBtn">cancel</Button>
        </Form>
      </div>
    </div>
  );
}

export default App;

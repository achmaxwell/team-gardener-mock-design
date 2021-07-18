import './App.css';
import './assets/css/Fonts.css'
import {Button, FormGroup, Form, Input} from 'reactstrap';

function App() {
  return (
    <div className="bgDiv">
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

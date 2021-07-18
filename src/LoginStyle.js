import './App.css';
import {Button, FormGroup, Form, Input} from 'reactstrap';
import logo from "./assets/team-gardener-logo.png";

function App() {
  return (
    <div className="bgDiv">
      <div className="loginDiv">
        <img src={logo} alt="Team Gardeners Logo" className="logoImgLogin"/>
        <Form>
        <FormGroup>
          <Input type="textarea" name="text" id="exampleText" placeholder="email" className="formInputEmail"/>
        </FormGroup>
        <FormGroup>
          <Input type="textarea" name="text" id="exampleText" placeholder="password" className="formInputPassword"/>
        </FormGroup>
        <Button className="loginBtn">login</Button>
        <Button className="signUpBtn">sign up</Button>
        </Form>
      </div>
    </div>
  );
}

export default App;

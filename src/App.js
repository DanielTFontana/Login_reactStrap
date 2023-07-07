import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import NavHeader from './header';
import {
  Input,
  FormGroup,
  Button,
  Container,
  Label,
} from 'reactstrap';

function App() {

  return (
    <div className="App">

    <NavHeader/>

      <Container id='container' className='bg-light border border-dark rounded p-4 w-25'>
      <h1 className='text-center p-4'>Login</h1>
        <FormGroup>
          
          <Label for="exampleEmail">
            Email
          </Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="E-mail"
            type="email"
            className='p-3 mb-4'
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">
            Senha
          </Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Senha"
            type="password"
            className='p-3 mb-4'
          />
        </FormGroup>

        <Button className='p-3' size='lg' color="primary" outline>
          Login
        </Button>
      </Container>

<div></div>
      
    </div>
  );
}


export default App;

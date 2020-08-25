import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Segment,Header, Card, Form, Container, Button, Dropdown } from 'semantic-ui-react' ;

class App extends Component {
  renderCards(){
    const token = [
  { key: 'dai', value: 'dai', text: 'Dai' },
  { key: 'btc', value: 'btc', text: 'Bitcoin' },
]
  return(
    <Segment inverted>
    <Form inverted>
      <Form.Group widths='equal'>
        <Form.Input fluid  placeholder='Address' />
        <Form.Input fluid  placeholder='Amount' />
        <Dropdown
    placeholder='Select Token'
    fluid
    search
    selection
    options={token}
  />
        <Button fluid type='submit'>+</Button>
      </Form.Group>

    </Form>

    <Form inverted>
      <Form.Group widths='equal'>
        <Form.Input fluid  placeholder='Address' />
        <Form.Input fluid  placeholder='Amount' />
        <Dropdown
    placeholder='Select Token'
    fluid
    search
    selection
    options={token}
  />
        <Button fluid type='submit'>+</Button>
      </Form.Group>

    </Form>

    <Form inverted>
      <Form.Group widths='equal'>
        <Form.Input fluid  placeholder='Address' />
        <Form.Input fluid  placeholder='Amount' />
        <Dropdown
    placeholder='Select Token'
    fluid
    search
    selection
    options={token}
  />
        <Button fluid type='submit'>+</Button>
      </Form.Group>

    </Form>
  </Segment>
  );
}
  HeaderExampleFloating(){
  return (
     <Segment>
     <Header as ='h2' color = 'blue' textAlign = 'center'>
     DevFolio ETHIndia
     </Header>
     </Segment>
  );
}
  render(){
  return (
    <div>
        {this.HeaderExampleFloating()}
        <Container style = {{marginTop : '30px'}}>
        {this.renderCards()}
        </Container>
    </div>
  );
}
}

export default App;

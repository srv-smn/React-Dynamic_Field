import React,{Component} from 'react';

import './App.css';
import { Segment,Header, Form, Container, Button, Dropdown } from 'semantic-ui-react' ;

class App extends Component {
  constructor(props) {
        super(props);
        this.state = { inputs: ['input-0'], token : [
      { key: 'dai', value: 'dai', text: 'Dai' },
      { key: 'btc', value: 'btc', text: 'Bitcoin' },
    ]}

    }

    appendInput() {
       var newInput = `input-${this.state.inputs.length}`;
       this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
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
        <Button
        style = {{marginRight : '60px', marginTop : '30px'}}
       floated ="right"
       content ="Add"
       icon ="add circle"
       primary
       onClick={ () => this.appendInput() }
       />
        <Container style = {{marginTop : '30px'}}>
        <Segment >
        <Form >
          {this.state.inputs.map(input => <Form.Group widths='equal'>
            <Form.Input fluid  placeholder='Address' />
            <Form.Input fluid  placeholder='Amount' />
            <Dropdown
        placeholder='Select Token'
        fluid
        search
        selection
        options={this.state.token}
      />
          </Form.Group>)}
        </Form>
      </Segment>
        </Container>

    </div>
  );
}
}

export default App;

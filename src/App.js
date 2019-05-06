import React, { Component }from 'react';
import './App.css';
import Content from './components/Content';
import Subject from './components/Subject';
import TOC from './components/TOC';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode: 'read',
      selected_content_id: 2,
      subject: {title: 'WEB', sub: 'world wide web!'},
      welcome: {tilte: 'Welcome', desc: 'Hello, React!!'},
      contents: [
        {id:1, title:'HTML', desc: 'HTML is ...'},
        {id:2, title:'CSS', desc: 'CSS is ...'},
        {id:3, title:'JavaScript', desc: 'JavaScript is ...'}
      ]
    }
  }
  render(){
    let _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.tilte;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      for(let i=0; i<this.state.contents.length; ++i){
        let data = this.state.contents[i];   
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
      }
    }
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({ mode: 'welcome' })
          }.bind(this)}
        ></Subject>
        <TOC 
          onChangePage={function(id){
            this.setState({
              mode: 'read',
              selected_content_id: Number(id)
            });
          }.bind(this)} 
          data={this.state.contents}
        ></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;

import Navbar from './Navbar';
import Home from './Home';
import { Component } from 'react';
import Bodypop from './Bodypop';

class App extends Component {
  state = { blogs:[
    {title: "My new website", 
     body:"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak ",
     author: "Mario",
     id:1
    },
    {title: "Welcome party!", 
     body:"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak ",
     author: "Luigi",
     id:2
    },
    {title: "Web development top skills", 
     body:"Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak ",
     author: "Yoshi",
     id:3
    }
  ], poppingBody:false
  }
  popBody = ()=>{
    const doeshow = this.state.poppingBody
   this.setState({poppingBody:!doeshow})
  }
  updateBody = (event) =>{
    const updating = this.state.blogs.findIndex(p =>{return p.body })
    const eachBody = [...this.state.blogs]
  }

  render(){
    // let people = null
    // if(this.state.poppingBody){
    //   people = <div>
    //     {this.state.blogs.map(showingBody => {return <Bodypop body={showingBody.body}></Bodypop> }) }
    //   </div>
    // }


    return (
      <div className='App'>
        <Navbar/>
        <Bodypop></Bodypop>
        <div className='content'>
          {this.state.blogs.map(mapTask =>
             { return  <Home title={mapTask.title} 
             author={mapTask.author} clicked={this.popBody} />  })}
        </div>
      </div>
    );
  }
}

export default App;

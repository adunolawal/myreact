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
  handleDelete = (id, blogs) =>{
   const newBlog = blogs.filter (blog => blog.id !== id)
   this.setState(newBlog)
  }

  addTask = (blogs)=> {
    const id = Math.floor(Math.random()* 1000) + 1
    const newBlogs = {id, ...blogs}
    this.setState([...blogs, ])
  }

  render(){
    let people = null
    if(this.state.poppingBody){
      people = 
        <Bodypop onAdd={this.addTask}></Bodypop> 
    }


    return (
      <div className='App'>
        <Navbar showpop={this.popBody}/>
        <p>{people} </p>
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

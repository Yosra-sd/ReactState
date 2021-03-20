  import React from 'react'
  import Photo from './photo.jpg'

  class App extends React.Component{

    state = {Person: 
      {fullName: 'Yosra Sahnoun' ,
      bio: 'Etudiante'  ,
      imgSrc: Photo , 
      profession: 'Etudiante',
    },show:true}

    componentDidMount
    
    render(){
      return(
        <>
        {
          

          this.state.show && (<>  <p>Fullname : {this.state.Person.fullName}</p>
            <p>Biography : {this.state.Person.bio}</p>
            <img src={this.state.Person.imgSrc} />
            <p>Profession: {this.state.Person.profession}</p></>)
        }
        <button onClick={()=>{this.setState({show:!this.state.show })}}>change</button>
        </>
      )
    }
  }

export default App;

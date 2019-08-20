import React, { Component } from 'react'
import './createProject.css';
export class CreateProject extends Component {
  constructor(props){
    super(props);

    this.onChangeProjectName = this.onChangeProjectName.bind(this);
    this.onChangeProjectDescription = this.onChangeProjectDescription.bind(this);
    this.onProjectCompleted = this.onProjectCompleted.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
          project_title: '',
          project_description: '',
          project_completed: false
    }
  }

    onChangeProjectName(e) {

      this.setState({
        project_title: e.target.value
      });
    }
      
    onChangeProjectDescription(e) {

      this.setState({
        project_description: e.target.value
      });
    }
    onProjectCompleted(e) {

      this.setState({
        project_completed: e.target.value
      });
    }


    onSubmit(e) {
      e.preventDefault();

      console.log('form sent!');
      console.log(`Project title: ${this.state.project_title} `);
      alert(`Project ${this.state.project_title} created!`);

      this.setState({

        project_title: '',
          project_description: '',
          // project_completed: false

      })

    }

    render() {
        return (
            <div><form className="ok" onSubmit={this.onSubmit}>
              <br></br>
            <label>
              Name of Project:  
              <input type="text" value={this.state.project_title} onChange={this.onChangeProjectName} /> 
            </label>
            <br></br><br></br>
            <label>
              Description:  
              <input type="text" value={this.state.project_description} onChange={this.onChangeProjectDescription} />
            </label>
            {/* <label>
             Completed: 
              <input type="radio" value={this.state.project_description} onChange={this.onChangeProjectDescription} />
            </label> */}
            <input type="submit" value="Submit" />
          </form>
          {this.state.project_title}<br></br>
          {this.state.project_description}</div>
          );
    }
}

export default CreateProject

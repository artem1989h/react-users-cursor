import React, {Component} from 'react';

//class Component {
  // constructor(props) {
  //   super(props);
  // }

  // setState(/*object || func*/) {
  //
  // }

  // lifecycle methods

  // componentDidMount() {
  //   ...
  // }

  //forceUpdate() {}

//}

// 1. Author
// 2. Title
// 3. Image
// 4. Like

//Алгоритм лайков

// 1. Показать изначальное состояние
// 2. Повесить на баттон событие


class Post extends Component {
  constructor(props) {
    super(props);
    //this.props = props;
    //props не изменяемые данны, которые предназначены только для чтения!!!!!!!!!!
    //state изменяемые данные!!!!!!!!

      // Facade
    // this.setState(state) {
    //   this.state = { ...this.state, ...state },
    //   this.forceUpdate()
    // }


    // setTimeout(() => {
    //   //this.props.author = "Sergey"
    //   //this.state.likes = 10
    //   this.setState({likes: 10})
    // }, 3000)


    this.state = {
        likes: 0
    }


  }

  addLike = () => {
    this.setState({likes: this.state.likes + 1})
  }

  render() {
    return (
      <div>
        <h4>Post</h4>
        <p>{this.props.author}</p>
        <h5>{this.props.title}</h5>
        {/*<img src={this.props.image} alt={this.props.title} /> */}
        <button onClick={this.addLike}>Like</button>
        <div>Likes: {this.state.likes}</div>
      </div>
    )
  }
}

export default Post;

// Родитель  ======>   Ребенок


// Самое важное:
Component
props
state
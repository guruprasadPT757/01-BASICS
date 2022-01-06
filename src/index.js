import React, {Component} from "react"
import ReactDom from "react-dom"
import "./styles/style.css"
import Header from "./components/header"
import UserList from "./components/user_list"
import JSON from "./db.json"
import Footer from "./components/footer"


class App extends Component {

   state = {
      userList:JSON,
      filteredList: JSON,
      footerText:"This is good footer"
   }

   getUserResult = (event)=> {
      console.log(""+event.target.value)
      var textFilter = event.target.value
      var tempfilteredList = this.state.userList.filter(user => user.firstName === textFilter)
      this.setState({
         filteredList: tempfilteredList.length === 0? this.state.userList: tempfilteredList
      })
   }

   componentDidMount() {
      console.log("componentDidMount called");
   }

   componentWillUnmount() {
      console.log("componentWillUnmount called");
   }

   shouldComponentUpdate(nextProps, nextState) {
      console.log("shouldComponentUpdate called");
      console.log(nextProps)
      console.log(nextState)
   }

   componentDidUpdate(prevProps, prevState, snap) {
      console.log("componentDidUpdate called");
      console.log(prevProps)
      console.log(prevState)
   }

   getSnapshotBeforeUpdate(prevProps, prevState) {

      console.log("getSnapshotBeforeUpdate called");
   }

   render() {
      console.log(this.state.userList);
      const {filteredList, footerText} = this.state
      return (
        <>
        <Header topic = {this.getUserResult}/>
        <UserList users = {filteredList}>
           <br/>
         <h1>This is the end of UserList</h1>
        </UserList>
        <Footer footerText={footerText}/>
        </>
      )
   }
}
ReactDom.render(<App/>, document.getElementById("root"))
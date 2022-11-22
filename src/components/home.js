import React from "react";
import { Profile } from "./profile";


class Home extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      totleResults: 1,
    };
  }

  
  
  componentDidMount() {
    
    let i = this.state.totleResults;
    // how many items you want to load
    // plase choose minimum 8
      let length = i +8
    let arr = []
    for (; i < length; i++) {
      if (i<101) {
        arr.push({id: i})
      }
    }
      this.setState({
        items: this.state.items.concat(arr),
        totleResults: (i)
      });
  }

   profile_scroll_calculate =(e)=>{

    var winScroll = document.body.scrollTop || e.target.scrollTop;
    var height = e.target.scrollHeight - e.target.clientHeight;
    var scrolled = parseInt((winScroll / height) * 100);
    console.log(scrolled)
    if (scrolled > 95 ) {
      this.componentDidMount();
    }
  }


  render() {
      return (
        <>
    <div className="profile-list" onScroll={(e)=>(this.profile_scroll_calculate(e))}>

          {this.state.items.map(item => (
            <Profile Id = {item.id} key = {item.id}/>
            ))}
            </div>
            </>
      );
    }
    } 

export default Home;
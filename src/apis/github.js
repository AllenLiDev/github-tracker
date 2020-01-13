// import React from 'react';
import axios from 'axios';

export default axios.create({
  baseURL: `https://api.github.com/users/`
});

// old component style
// export default class Github extends React.Component {
//   state = {
//     responseData: []
//   }

//   componentDidMount() {
//     let user = 'headhuntar';
//     axios.get(`https://api.github.com/users/` + user + "/events")
//       .then(res => {
//         const responseData = res.data;
//         this.setState({ responseData });
//       })
//   }

//   pushEvents = () => {
//     let pushEvents = [];
//     this.state.responseData.forEach(event => {
//       if (event.type === "PushEvent") {
//         pushEvents.push(new Date(event.created_at).toDateString());
//       }
//     });
//     return pushEvents;
//   }

//   render() {
//     return (
//       <ul>
//         {this.pushEvents().map((date, i) => <li key={i}>{date}</li>)}
//       </ul>
//     )
//   }
// }
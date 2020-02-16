import React from 'react';
import { db } from './firebase';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../../assets/css/journal.css';

export default class Journal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  onClick = event => {
    event.preventDefault();
    this.props.history.push("/home")
  }

  componentDidMount() {
    db.collection("users")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        this.setState({ users: data });
      });
  }

  render() {
    const { users } = this.state;
    return (
      <div className="background" style={{ display: "block" }}>
        <div>
          <button className="SOS" onClick= {this.onClick}/>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: "2em", color: "WhiteSmoke", fontWeight: "bold" }}>Logs:</h3>
        </div>
        {users.map(user => (
          <Card style={{ textAlign: "center", width: "60%", margin: "10px auto 10px auto", background: "rgb(204,204,204)", background: "rgba(204,204,204,0.85)" }}>
            <CardContent>
              <Typography style={{ fontSize: "1.25em" }}>
                {user.status}
              </Typography>
            </CardContent>
          </Card>

        ))}
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: "2em", color: "WhiteSmoke", fontWeight: "bold" }}>Achievements:</h3>
        </div>
        {users.map(user => (
          <Card style={{ textAlign: "center", width: "60%", margin: "10px auto 10px auto", background: "rgb(204,204,204)", background: "rgba(204,204,204,0.85)" }}>
            <CardContent>
              <Typography style={{ fontSize: "1.25em" }}>
                {user.proud}
              </Typography>
            </CardContent>
          </Card>

        ))}
      </div>
    );
  }
}
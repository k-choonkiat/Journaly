import React from 'react';
import Nav from './nav';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { db } from './firebase';
import Calendar from 'react-calendar';

export default class Journal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            date: new Date()
        };
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
    onChange = date => this.setState({ date })
    render() {
        const { users } = this.state;
        return (
            <div className="row" style={{ display: "block" }}>
                <Nav />
                <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}> 
                    <Calendar
                        onChange={this.onChange}
                        hover= "True"
                        value={this.state.date}
                    />
                </div>
                <div style={{ textAlign: 'center' }}>
                    <h3>Upcoming clients</h3>
                </div>
                {users.map(user => (
                    <Card>
                        <CardContent textAlign="center" display="flex">
                            <Typography variant="body2" color="textSecondary" component="p" textAlign="center" display="flex">
                                {user.email}
                            </Typography>
                        </CardContent>

                    </Card>

                ))}
                <div style={{ textAlign: 'center' }}>
                    <br /><br />
                </div>
            </div>
        );
    }
}
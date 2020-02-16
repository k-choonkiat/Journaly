import React from 'react';
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
                <div style={{display:"block"}}> 
                    <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                </div>
                <div style={{ textAlign: 'center' }}>
                    <h3>Upcoming clients</h3>
                </div>
                {users.map(user => (
                    <Card>
                        <CardContent textAlign="center">
                            <Typography variant="body2" color="textSecondary" component="p" textAlign="center">
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
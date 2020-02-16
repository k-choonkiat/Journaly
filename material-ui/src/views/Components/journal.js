import React from 'react';
import { db } from './firebase';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default class Journal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
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

    render() {
        const { users } = this.state;
        return (
            <div className="row" style={{ display: "block" }}>
                <div style={{ textAlign: 'center' }}>
                    <h3>Logs:</h3>
                </div>
                {users.map(user => (
                    <Card style={{ maxwidth: '345' }}>
                        <CardContent textAlign="center">
                            <Typography variant="body2" color="textSecondary" component="p" textAlign="center">
                                {user.status}
                            </Typography>
                        </CardContent>
                    </Card>

                ))}
                <div style={{ textAlign: 'center' }}>
                    <br />
                    <h3>Owo what's this</h3>
                </div>
                {users.map(user => (
                    <Card style={{ maxwidth: '345' }}>
                        <CardContent textAlign="center">
                            <Typography variant="body2" color="textSecondary" component="p" textAlign="center">
                                {user.proud}
                            </Typography>
                        </CardContent>
                    </Card>

                ))}
            </div>
        );
    }
}
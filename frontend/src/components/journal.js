import React from 'react';
import { db } from './firebase';
import Nav from './nav';
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
                <Nav />
                <div style={{ textAlign: 'center' }}>
                    <h3>What makes me happy!</h3>
                </div>
                {users.map(user => (
                    <Card style={{ maxwidth: '345' }}>
                        <CardContent textAlign="center">
                            <Typography variant="body2" color="textSecondary" component="p" textAlign="center">
                                {user.happy}
                            </Typography>
                        </CardContent>
                    </Card>

                ))}
                <div style={{ textAlign: 'center' }}>
                    <br /><br /
                    ><h3>Negative things that happen recently</h3>
                </div>
                {users.map(user => (
                    <Card style={{ maxwidth: '345' }}>
                        <CardContent textAlign="center">
                            <Typography variant="body2" color="textSecondary" component="p" textAlign="center">
                                {user.sad}
                            </Typography>
                        </CardContent>
                    </Card>

                ))}
            </div>
        );
    }
}
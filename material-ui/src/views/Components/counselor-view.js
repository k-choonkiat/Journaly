import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { db } from './firebase';
import Calendar from 'react-calendar';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import { Chart } from "react-google-charts";



const data = [
    ["date", "Satisfaction Rating"],
    ["2/10", 4],
    ["2/11", 4],
    ["2/12", 1],
    ["2/13", 2],
    ["2/14",1],
    ["2/15",1],
  ];

  var sentiment = require( 'wink-sentiment' );

export default class Journal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            date: new Date(),
            email: "",
            openDeleteModal: false,
            activeItemName: '', //state property to hold item name
            activeItemHappy: "",
            activeItemSad: "",
            data: [2, 3, 4, 5, 2, 4, 5],
            sentiment :""
        };
        this.fetchData = this.fetchData.bind(this);
    }

    openModalWithItem(item) {
        this.setState({
            openDeleteModal: true,
            activeItemName: item.email,
            activeItemHappy: item.happy,
            activeItemSad: item.sad
        })
    }

    fetchData(email) {
        var ref = db.collection("users")
            .where("email", "==", "test1@gmail.com")
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                console.log(data[0].sad);
                this.setState({ users: data });
            });

    }

    fetchData() {
        var ref = db.collection("users")
            .where("email", "==", "test1@gmail.com")
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                console.log(sentiment(data[0].status));

                this.setState({ 
                    sentiment: sentiment(data[0].status)
                 });
            });

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
                <Modal isOpen={this.state.openDeleteModal}
                    itemName={this.state.activeItemName}
                    itemHappy={this.state.activeItemHappy}
                    itemSad={this.state.activeItemSad}
                />
                <Navbar collapseOnSelect expand="lg" bg="dark" >Home
                </Navbar><br />
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h3 style={{ textAlign: "center" }}>Meetings</h3>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <br />
                        <br />
                        <Calendar
                            onChange={this.onChange}
                            value={this.state.date}
                        />
                    </div>
                </div>
                <div style={{ textAlign: 'center', display: "flex", flexDirection: "column" }}>
                    <h3>Upcoming clients</h3>
                </div>
                {users.map(user => (
                    <Card>
                        <CardContent textAlign="center" display="flex" flexDirection="column">
                            <Typography variant="body2" color="textSecondary" component="p" textAlign="center">
                                <h3 style={{ textAlign:"center"}}>Client: {user.email}</h3>
                                <h5 style={{textAlign:"center", padding:"25px"}}><strong>Latest Status</strong> :{user.status}</h5>  
                                <h5 style={{textAlign:"center"}}>The sentiment score is:{sentiment(user.status).score}</h5>
                                <h5 style={{textAlign:"center"}}>The normalized sentiment score is:{sentiment(user.status).normalizedScore}</h5>
                                
                                

                            </Typography>
                            <Chart
                                chartType="LineChart"
                                data={data}
                                width="100%"
                                height="400px"
                                legendToggle
                            />
                        
                        </CardContent>
                    )

                    </Card>

                ))}

                {/*() => this.fetchData("test1@gmail.com")*/}
                <div style={{ textAlign: 'center' }}>
                    <br /><br />
                </div>
            </div>
        );
    }
}
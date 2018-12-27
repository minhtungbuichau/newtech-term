import React, { Component } from 'react';
import './../css/transaction.css'
class TransactionHistory extends Component {
    render() {
       
        return (
            <div>
                <table id="customers">
                    <tr>
                        <th>Time</th>
                        <th>Sender</th>
                        <th>Amount</th>
                        <th>Receiver</th>
                        <th>Message</th>
                    </tr>
                    <tr>
                        <td>{this.props.time}</td>
                        <td>{this.props.sender}</td>
                        <td>{this.props.amount}</td>
                        <td>{this.props.receiver}</td>
                        <td>{this.props.message}</td>
                    </tr>
                    
                </table>
            </div>
                        <tr>
                            <td>{this.props.time}</td>
                            <td>{this.props.sender}</td>
                            <td>{this.props.amount}</td>
                            <td>{this.props.receiver}</td>
                            <td>{this.props.message}</td>
                        </tr>
        );
    }
}

export default TransactionHistory;
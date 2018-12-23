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
                        <td>DD/MM/YYYY HH:MM</td>
                        <td>Maria Anders</td>
                        <td>1000000</td>
                        <td>TungBCM</td>
                        <td>I love you</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default TransactionHistory;
import React from 'react';
import Bag from "./classes/Bag";
import TicketSeller from "./classes/TicketSeller";
import TicketOffice from "./classes/TicketOffice";
import _ from './libs/utils';

function App() {
    const bag = new Bag({
        amount: 1000,
        invitation: {
            when: new Date()
        },
    });

    const invite = bag.hasInvitation();
    const ticketSeller = new TicketSeller({
        ticketOffice: new TicketOffice({
            amount: 0,
            tickets: new Array(5).fill({fee: 1000})
        })
    });
    const {ticketOffice} = ticketSeller.props;
    return (
        <div className="App">
          <div>
            <code>
              <span>Ticket Office: </span>
              <pre>{_.parseCode(ticketOffice)}</pre>
              <span>Bag: </span>
              <pre>{_.parseCode(bag)}</pre>
            </code>
          </div>
          <div>
              <button style={{width: 30, height: 30, background: '#efefef'}}>{invite ? `O` : `X`}</button>
          </div>
        </div>

    );
}

export default App;

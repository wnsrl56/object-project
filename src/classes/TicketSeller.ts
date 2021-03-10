import TicketOffice from "./TicketOffice";

interface ITicketSeller {
  ticketOffice: TicketOffice
}

class TicketSeller {
  constructor (public props: ITicketSeller) {}

  public getTicketOffice() {
    const {ticketOffice} = this.props;
    return ticketOffice;
  }
}

export default TicketSeller;

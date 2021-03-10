import TicketSeller from "./TicketSeller";
import Audience from "./Audience";

interface ITheater{
  ticketSeller: TicketSeller;
}

class Theater {
  constructor(private props: ITheater) {}
  public enter(audience: Audience) {
    const {ticketSeller} = this.props;
    const ticket = ticketSeller.getTicketOffice().getTicket();

    if(audience.getBag().hasInvitation()) {
      audience.getBag().setTicket(ticket);
    } else {
      audience.getBag().subtractValue(ticket!.fee);
      ticketSeller.getTicketOffice().addValue(ticket!.fee);
      audience.getBag().setTicket(ticket);
    }
  }
}

export default Theater;

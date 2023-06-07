import { Col } from "reactstrap";
import { selectAllPartners } from "./PartnersSlice";
import Partner from "./Partner";

const PartnersList = () => {
    const partners = selectAllPartners()

    return (
        
        <Col className='mt-4'>{
            partners.map((partner) => {
                return (
                    <div 
                        className='d-flex mb-5' 
                        key={partner.id}
                    >
                        <Partner partner={partner} />
                    
                    </div>
                );
            })}
            
        </Col>
        //comment
    )
};
export default PartnersList;
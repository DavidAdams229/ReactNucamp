import { Col, Row } from 'reactstrap';
import DisplayCard from './DisplayCard';
import { selectFeaturedCampsites } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionSlice';
import { selectFeaturedPartner } from '../partners/PartnersSlice';

const DisplayList = () => {
    const items = [selectFeaturedCampsites(), selectFeaturedPromotion(),selectFeaturedPartner()];

    return (
        <Row>
            {items.map((item, id) => {
                return (
                    <Col md className='m-1' key={id}>
                        <DisplayCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default DisplayList;

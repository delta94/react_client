/**
 *
 * RoomPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectRoomPage, { makeSelectRoomDetail } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getRoomDetail } from './actions';
import { Helmet } from 'react-helmet';
import { places, review_list } from '../HotelDetailPage/data';
import { Col, Container, Row } from 'react-bootstrap';

import HotelPlaces from '../HotelDetailPage/places';

import RoomGallery from 'components/RoomGallery';
import RoomOverview from 'components/RoomOverview';
import RoomRate from 'components/RoomRate';
import RoomPolicy from 'components/RoomPolicy';
import RoomConveniences from 'components/RoomConveniences';
import RoomBooking from 'components/RoomBooking';
import RoomOtherList from 'components/RoomOtherList';
import RoomSimilarList from 'components/RoomSimilarList';
import RoomReview from 'components/RoomReview';
import RoomMap from 'components/RoomMap';

export function RoomPage({ getRoomDetail, roomDetail, match }) {
  useInjectReducer({ key: 'roomPage', reducer });
  useInjectSaga({ key: 'roomPage', saga });

  const roomId = match.params.roomId;

  useEffect(() => {
    getRoomDetail(roomId);
  }, [roomId]);

  return (
    <article id="diamond-room-page">
      <Helmet>
        <title>Room</title>
      </Helmet>

      <RoomGallery gallery={roomDetail.gallery} />

      <Container className="container-origin">
        <Row>
          <Col xs={12} md={8}>
            <div className="gap-50" />
            <RoomOverview detail={roomDetail} />
            <div className="gap-50" />
            <RoomConveniences conveniences={roomDetail.conveniences} />
            <div className="gap-50" />
            <RoomRate detail={roomDetail} />
            <div className="gap-50" />
            <RoomReview reviews={roomDetail.list_review} roomId={roomId} />
            <div className="gap-50" />
            <RoomPolicy detail={roomDetail} />
            <div className="gap-50" />
            <HotelPlaces places={places} />
            <div className="gap-50" />
            <RoomMap lat={roomDetail.latitude} long={roomDetail.longitude} />
          </Col>
          <Col xs={12} md={4}>
            <RoomBooking detail={roomDetail} />
          </Col>
        </Row>
      </Container>

      <div className="full-width-wrapper">
        <Container className="container-origin">
          <div className="gap-50" />
          <RoomSimilarList list={roomDetail.list_apartment_similar} />
          <div className="gap-50" />
          <RoomOtherList
            list={roomDetail.list_apartment_same_owner}
            host={roomDetail.owner}
          />
          <div className="gap-50" />
        </Container>
      </div>
    </article>
  );
}

RoomPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  getRoomDetail: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  roomPage: makeSelectRoomPage(),
  roomDetail: makeSelectRoomDetail(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getRoomDetail: id => {
      dispatch(getRoomDetail(id));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(RoomPage);

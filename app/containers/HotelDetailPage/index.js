/*
 *
 * Hotel Detail
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { hotelDetail, reviews } from './data';
import { Container, Row, Col } from 'react-bootstrap';
import HotelGallery from './gallery';
import HotelGeneral from './general';
import HotelAmenities from './amenities';
import HotelRoomRate from './room-rate';
import HotelReview from './review';

export default function HotelDetail( {match} ) {

  let hotelId = match.params.hotelId;

  console.log(hotelId);

  return (
    <div>
      <Helmet>
        <title>Hotel</title>
      </Helmet>

      <HotelGallery media={hotelDetail.photos.data} />

      <Container className="container-origin">
        <Row>
          <Col xs={12} md={8}>
            <div className="gap-50" />
            <HotelGeneral detail={hotelDetail} />
            <div className="gap-50" />
            <HotelAmenities amenities={hotelDetail.amenityTypes.data} />
            <div className="gap-50" />
            <HotelRoomRate price={hotelDetail.price.data} />
            <div className="gap-50" />
            <HotelReview reviews={reviews} count={hotelDetail.review_count} />
          </Col>
          <Col xs={12} md={4}>

          </Col>
        </Row>
      </Container>
    </div>
  );
}
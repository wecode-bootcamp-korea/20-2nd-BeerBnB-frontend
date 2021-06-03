import React, { useState, useEffect } from 'react';
import { DETAIL_REQUEST_API } from '../../config';
import styled from 'styled-components/macro';
import ImgContainer from './Components/ImgContainer';
import AmenityItem from './Components/AmenityItem';
import RatingItem from './Components/RatingItem';
import ReservationInside from './Components/ReservationInside';

const MATCH = {
  cleanliness: '청결도',
  communication: '커뮤니케이션',
  checkin: '체크인',
  accuracy: '정확성',
  location: '위치',
  cost_effectivenes: '가격 대비 만족도',
};

const Detail = props => {
  const [detailData, setDetailData] = useState();

  useEffect(() => {
    fetch(`${DETAIL_REQUEST_API}/rooms/${props.match.params.id}`)
      .then(response => response.json())
      .then(response => setDetailData(response.detail));
  }, []);

  const sumRating =
    detailData &&
    detailData.rating.reduce((acc, cur) => acc + cur.category_rating, 0);

  const averageRating =
    detailData && Math.round(sumRating / detailData.rating.length);

  return (
    <>
      {detailData && (
        <Container>
          <RoomName>
            <p>{detailData.room_name}</p>
          </RoomName>
          <RoomInfoContainer>
            <div>
              <RoomInfoItem>
                <i class="fas fa-star"></i>
                <span>{averageRating}점</span>
              </RoomInfoItem>
              {detailData.is_super && (
                <RoomInfoItem>
                  <i class="fas fa-medal"></i> 슈퍼호스트
                </RoomInfoItem>
              )}
              <RoomInfoItem>
                <span>{detailData.address}</span>
              </RoomInfoItem>
            </div>
            <div>
              <Link>
                <i class="far fa-share-square"></i> 공유하기
              </Link>
              <Link>
                <i class="far fa-heart"></i> 저장
              </Link>
            </div>
          </RoomInfoContainer>
          <ImgContainer imgSrc={detailData.image} />
          <Main>
            <Aside>
              <Section>
                <FlexSpaceCenterBox>
                  <div>
                    <h2>
                      {detailData.host}님이 호스팅하는&nbsp;
                      {detailData.room_type}
                    </h2>
                    <p>
                      최대 인원 {detailData.capacity}명 · 침대 1개 · 욕실 1개
                    </p>
                  </div>
                  <div>
                    <img
                      alt="hostProFile"
                      src="/images/brett-jordan-dUTgdXl1QSg-unsplash.jpg"
                    />
                  </div>
                </FlexSpaceCenterBox>
              </Section>
              <Section>
                <FlexBox>
                  <div>
                    <i class="fas fa-home"></i>
                  </div>
                  <div>
                    <p>{detailData.room_type}</p>
                    <p>{detailData.room_type} 단독으로 사용하시게 됩니다.</p>
                  </div>
                </FlexBox>
                {detailData.is_super && (
                  <FlexBox>
                    <div>
                      <i class="fas fa-medal"></i>
                    </div>
                    <div>
                      <p>{detailData.host}님은 슈퍼호스트입니다</p>
                      <p>
                        슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하며 게스트가
                        숙소에서 편안히 머무를 수 있도록 최선을 다하는
                        호스트입니다.
                      </p>
                    </div>
                  </FlexBox>
                )}
              </Section>
              <Section>
                <h3>편의시설</h3>
                <StyledAmenity>
                  {detailData.amenity.map(el => (
                    <AmenityItem
                      key={el.id}
                      icon={el.icon}
                      description={el.description}
                    />
                  ))}
                </StyledAmenity>
                <AmenityBtn>편의시설과 주종 모두 보기</AmenityBtn>
              </Section>
            </Aside>
            <Reservation>
              <ReservationWindow>
                <ReservationInside
                  price={detailData.price}
                  detailData={detailData}
                />
              </ReservationWindow>
            </Reservation>
          </Main>
          <Section>
            <h3>
              <i class="fas fa-star"></i> 평균
              {averageRating}점
            </h3>
            <RatingBox>
              {detailData.rating.map(el => (
                <RatingItem
                  key={el.category}
                  category={MATCH[el.category]}
                  rating={el.category_rating}
                />
              ))}
            </RatingBox>
          </Section>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  max-width: 1130px;
  margin: 0 auto;
  padding-top: 100px;
`;

const RoomName = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
`;

const RoomInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const RoomInfoItem = styled.p`
  display: inline;
  padding-right: 10px;

  .fas {
    color: ${({ theme }) => theme.colors.pointColor};
  }
`;

const Link = styled.p`
  display: inline;
  padding-left: 10px;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};

  Section:last-child {
    margin-bottom: 0;
    border: none;
  }

  h3 {
    margin-bottom: 30px;
    font-size: 20px;
    font-weight: 500;
  }
`;

const Aside = styled.div`
  width: 60%;
`;

const Reservation = styled.div`
  position: sticky;
  width: 32%;
`;

const ReservationWindow = styled.div`
  position: sticky;
  top: 80px;
  width: 100%;
  margin-bottom: 50px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 10px;
`;

const Section = styled.div`
  padding-bottom: 40px;
  margin-bottom: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};

  &:nth-child(3) {
    margin-bottom: 0;
    border: none;
  }

  h3 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 40px;

    .fa-star {
      margin-top: 40px;
      color: ${({ theme }) => theme.colors.pointColor};
    }
  }
`;

const FlexSpaceCenterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 28px;
    margin-bottom: 10px;
  }

  div:last-child {
    width: 60px;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
`;

const StyledAmenity = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;

  div {
    width: 50%;
  }

  &:last-child {
    margin-bottom: 0;
  }

  span {
    margin-right: 16px;
    font-size: 16px;
  }

  .fa-utensils,
  .fa-fan,
  .fa-beer,
  .fa-glass-martini-alt {
    margin-right: 6px;
  }
`;

const AmenityBtn = styled.button`
  padding: 12px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid #333;
  border-radius: 10px;
`;

const FlexBox = styled.div`
  display: flex;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
  .fa-home,
  .fa-medal {
    padding-right: 15px;
    font-size: 22px;
    color: ${({ theme }) => theme.colors.pointColor};
  }

  div > p {
    line-height: 25px;
  }

  div > p:first-child {
    font-size: 16px;
    font-weight: 500;
  }

  div > p:last-child {
    color: #999;
    font-weight: 400;
  }
`;

const RatingBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default Detail;

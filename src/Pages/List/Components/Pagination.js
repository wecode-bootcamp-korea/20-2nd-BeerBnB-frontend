import React from 'react';
import styled from 'styled-components/macro';

const Pagination = ({
  roomsPerPage,
  totalRooms,
  setCurrentPage,
  currentPage,
}) => {
  // const pageNumbers = [];

  // for (let i = 1; i <= Math.ceil(totalRooms / roomsPerPage); i++) {
  //   pageNumbers.push(i);
  // } 얘는 수정 전 코드로 남겨놓을래요!

  const pageNumbers = new Array(Math.ceil(totalRooms / roomsPerPage))
    .fill(1)
    .map((el, idx) => idx + 1);

  return (
    <StyledPagination className="pagination">
      <i class="fas fa-chevron-left" />
      {pageNumbers.map(number => {
        return (
          <StyledPaginainNum key={number}>
            <button
              onClick={() => {
                setCurrentPage(number);
              }}
              select={currentPage === number}
            >
              <span value={number}>{number}</span>
            </button>
          </StyledPaginainNum>
        );
      })}
      <i class="fas fa-chevron-right" />
    </StyledPagination>
  );
};

const StyledPagination = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
`;
const StyledPaginainNum = styled.li`
  display: inline-block;
  padding: 3px;
  margin: 10px;
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
  cursor: pointer;
  transition: background-color 200ms ease-in;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-color: ${({ theme, select }) =>
      select ? theme.colors.textColor : null};
    color: ${({ theme, select }) => (select ? '#fff' : theme.colors.textColor)};
    border-radius: 50%;
    font-size: ${({ theme }) => theme.fontSizes.l};

    &:hover {
      background-color: ${({ theme }) => theme.colors.subBackground};
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

export default Pagination;

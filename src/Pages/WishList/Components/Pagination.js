import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const Pagination = ({ roomsPerPage, totalRooms, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRooms / roomsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <StyledPagination className="pagination">
      <i class="fas fa-chevron-left"></i>
      {pageNumbers.map(number => {
        return (
          <StyledPaginainNum key={number}>
            <Link to="#/" onClick={() => setCurrentPage(number)}>
              <span value={number}>{number}</span>
              {/* 선택된 숫자의 스타일 다르게 하기 구현 예정 */}
            </Link>
          </StyledPaginainNum>
        );
      })}
      <i class="fas fa-chevron-right"></i>
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
  width: 30px;
  height: 30px;
  padding: 3px;
  margin: 10px;
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.textColor};
  font-weight: bold;
  cursor: pointer;
  transition: background-color 200ms ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.subBackground};
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

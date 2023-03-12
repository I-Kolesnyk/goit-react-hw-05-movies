import PropTypes from 'prop-types';
import { StyledPagination } from './Pagination.styled';

import { TfiAngleLeft } from 'react-icons/tfi';
import { TfiAngleRight } from 'react-icons/tfi';

function Pagination({ page, totalPages, changePage }) {
  const handlePageClick = event => {
    changePage(event.selected + 1);
  };
  return (
    <StyledPagination
      previousLabel={<TfiAngleLeft />}
      nextLabel={<TfiAngleRight />}
      breakLabel="..."
      pageCount={totalPages}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      onPageChange={handlePageClick}
      activeClassName="active"
      hrefBuilder={(page, pageCount) =>
        page >= 1 && page <= pageCount ? `/page/${page}` : '#'
      }
      forcePage={page - 1}
    />
  );
}

Pagination.propTypes = {
  page: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  totalPages: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
};
export default Pagination;

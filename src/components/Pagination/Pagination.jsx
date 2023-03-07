// import ReactPaginate from 'react-paginate';
import { StyledPagination } from './Pagination.styled';

// import { TfiAngleDoubleLeft } from 'react-icons/tfi';
// import { TfiAngleLeft } from 'react-icons/tfi';
// import { TfiAngleRight } from 'react-icons/tfi';
// import { TfiAngleDoubleRight } from 'react-icons/tfi';

function Pagination({ page, totalPages, changePage }) {
  const handlePageClick = event => {
    changePage(event.selected + 1);
      };
  return (
    <StyledPagination
      previousLabel="previous"
      nextLabel="next"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      pageCount={totalPages}
      pageRangeDisplayed={4}
      marginPagesDisplayed={2}
      onPageChange={handlePageClick}
      containerClassName="pagination justify-content-center"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      activeClassName="active"
      // eslint-disable-next-line no-unused-vars
      hrefBuilder={(page, pageCount) =>
        page >= 1 && page <= pageCount ? `/page/${page}` : '#'
      }
    //   hrefAllControls
      forcePage={page - 1}
    //   onClick={clickEvent => {
    //     console.log('onClick', clickEvent);
    //     // Return false to prevent standard page change,
    //     // return false; // --> Will do nothing.
    //     // return a number to choose the next page,
    //     // return 4; --> Will go to page 5 (index 4)
    //     // return nothing (undefined) to let standard behavior take place.
    //   }
    // }
    />
  );
}
export default Pagination;

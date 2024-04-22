import style from './Pagination.module.css';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const nextPage = () => {
    onPageChange(currentPage + 1);
  };

  const prevPage = () => {
    onPageChange(currentPage - 1);
  };

  const goToPage = (page) => {
    onPageChange(page);
  };

  return (
    <div className={style.container}>
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className={`${style.btn} ${currentPage === 1 ? style.extreme : ''}`}
      >
        Prev
      </button>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            disabled={currentPage === page}
            className={`${style.btn} ${currentPage === page ? style.active : ''}`}
          >
            {page}
          </button>
        )
      )}
      <button
        onClick={nextPage}
        disabled={currentPage === totalPages}
        className={`${style.btn} ${currentPage === totalPages ? style.extreme : ''}`}
      >
        Next
      </button>
    </div>
  );
}

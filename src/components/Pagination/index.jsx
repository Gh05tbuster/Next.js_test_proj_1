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
    <div>
      <button onClick={prevPage} disabled={currentPage === 1}>
        Prev
      </button>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            disabled={currentPage === page}
          >
            {page}
          </button>
        )
      )}
      <button onClick={nextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
}

// export default function Pagination({ usersPerPage, totalUsers, paginate, currentPage }){
//     const pageNumbers = [];

//     for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
//       pageNumbers.push(i);
//     }

//     return (
//       <nav>
//         <ul className="pagination">
//           {pageNumbers.map(number => (
//             <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
//               <a onClick={() => paginate(number)} href="#" className="page-link">
//                 {number}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     );
//   };

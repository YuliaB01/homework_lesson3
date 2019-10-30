import React, {useState, useEffect} from 'react';
import T from 'prop-types';
import {ShowTypes} from '../../types/showTypes';
import {useLocation, useHistory} from 'react-router-dom';
import {PaginationButton} from './Button';
import {PaginationInput} from './PaginationInput';

let timerId = null;

export const Pagination = ({pageInfo}) => {
    const [currentPage, setCurrentPage] = useState(pageInfo.page || 1);

    const history = useHistory();
    const location = useLocation();
    const pathName = location.pathname.substr(0, location.pathname.lastIndexOf('/') + 1);

    useEffect(() => {
        if (pageInfo.page > pageInfo.total_pages) {
            history.push(`${pathName}${pageInfo.total_pages}`);
            setCurrentPage(pageInfo.total_pages);
        } else {
            setCurrentPage(pageInfo.page);
        }
    }, [pageInfo]);

    const onChange = (event) => {
        const targetValue = event.target.value;

        setCurrentPage(targetValue);

        if (timerId) {
            clearTimeout(timerId);
        }

        timerId = setTimeout(() => {
            history.push(`${pathName}${targetValue}`);
        }, 800);
    };

    return pageInfo && (
        <div className="container">
            <nav className="pagination-nav" role="navigation" id="pagination">
                <div className="pages-count-info">
                    Page <b>{currentPage}</b><span> of </span><b>{pageInfo.total_pages}</b>
                </div>
                <div className="nav-btns-wrap">
                    <PaginationButton link={`${pathName}${(+currentPage <= 1 ? 1 : currentPage - 1)}`}
                                      className="pagination-item pagination-previous"
                                      disabled={currentPage === 1}>
                        Previous
                    </PaginationButton>
                    <PaginationInput {...{onChange}} curPage={currentPage} maxValue={pageInfo.total_pages}/>
                    <PaginationButton link={`${pathName}${(+currentPage >= pageInfo.total_pages ? pageInfo.total_pages : currentPage + 1)}`}
                                      className="pagination-item pagination-next"
                                      disabled={currentPage === pageInfo.total_pages}>
                        Next
                    </PaginationButton>
                </div>
            </nav>
        </div>
    );
};

Pagination.propTypes = {
    pageInfo: T.shape({
        page: T.number.isRequired,
        results: T.arrayOf(T.shape({...ShowTypes})).isRequired,
        total_pages: T.number.isRequired,
        total_results: T.number.isRequired
    })
};
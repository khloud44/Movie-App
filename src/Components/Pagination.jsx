import React from 'react'
import { useState } from 'react'

export const Pagination = ({handlePagination}) => {

    const [pageNum , setPageNum] =useState(1)  

    const handlePageNumber = (num)=>{
        switch (num){
            case "1" : 
                handlePagination(1);
                break;
            case "2" : 
                handlePagination(2);
                break;
            case "3" :
                handlePagination(3) 
                break;
            case "prev" : 
                pageNum < 1 ? setPageNum(1) 
                :
                setPageNum(pageNum-1);
                handlePagination(pageNum);
                
                break;
            case "next" : 
                setPageNum(pageNum+1);
                handlePagination(pageNum);
                break;
            default : 
                break;    
        }
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                <span className="page-link" onClick={()=>handlePageNumber("prev")} tabIndex="-1" aria-disabled="true">&laquo;</span>
                </li>
                <li className="page-item" onClick={()=>handlePageNumber("1")}><span className="page-link">{pageNum >3 ? pageNum-1  : 1}</span></li>
                <li className="page-item" onClick={()=>handlePageNumber("2")}><span className="page-link">{pageNum >3 ? pageNum  : 2}</span></li>
                <li className="page-item" onClick={()=>handlePageNumber("3")}><span className="page-link">{pageNum >3 ? pageNum+1  : 3}</span></li>
                <li className="page-item">
                <span className="page-link" onClick={()=>handlePageNumber("next")}>&raquo;</span>
                </li>
            </ul>
        </nav>
    )
}

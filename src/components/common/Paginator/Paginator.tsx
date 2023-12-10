import React, {useState} from "react";
import s from './Paginator.module.css'
import { SuperUserContainerType } from "../../Users/UsersContainer";



export const Paginator = (props: SuperUserContainerType) => {
    //Делим общение количество пользователей на {размер страницы // а он у нас 10}
    //  и получаем количество страниц
    let pagesCount = Math.ceil(props.totalItemCount/props.pageSize)
    let pages:number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
let portionCount = Math.ceil(pagesCount/props.portionSize)
    let[portionNumber,setPortionNumber]  = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    let rightPortionPageNumber = portionNumber * props.portionSize

    console.log({ pages, props })
    return (
        <div className={s.message}>
            {portionNumber > 1 && <button
                className={s.paginatorButton}
                onClick={()=>{setPortionNumber(portionNumber-1)}}>PREF</button>}
            {pages
                .filter(p=>p>=leftPortionPageNumber && p<=rightPortionPageNumber)
                .map(p => (
                <span
                    key={p}
                    onClick={() => {
                        props.onPageChengeTC(p,props.pageSize);
                    }}
                    className={props.currenPage === p ? s.SelectedPageStyle : ''}
                >
          <li className={s.PageStyle}>{p}</li>
        </span>
            ))}
            {portionCount > portionNumber && <button className={s.paginatorButton}
                onClick={()=>setPortionNumber(portionNumber+1)}>RIGHT</button>}
        </div>
    );
};

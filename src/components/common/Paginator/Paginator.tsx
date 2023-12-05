import React from "react";
import s from './Paginator.module.css'
import { SuperUserContainerType } from "../../Users/UsersContainer";



export const Paginator = (props: SuperUserContainerType) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages:number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    console.log({ pages, props })
    return (
        <div className={s.message}>
            {pages.map(p => (
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
        </div>
    );
};

import React from 'react';

interface ListProps {
    classNameUl?: string;
    classNameLi?: string;
    contentLi: React.ReactNode[];
}

const List = ({classNameUl, classNameLi, contentLi}: ListProps) => {
    return (
        <ul className={classNameUl}>
            {contentLi.map((e) => {
                return <li className={classNameLi}>{e}</li>
            })}
        </ul>
    )
}

export default List;
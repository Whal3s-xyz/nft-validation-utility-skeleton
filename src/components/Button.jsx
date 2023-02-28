import React from 'react';
import classNames from "../util/classNames";

const Button = ({type = 'primary', children, onClick, className, disabled}) => {
    if (type === 'primary')
        return (
            <button
                type="button"
                className={classNames('inline-flex items-center rounded-md border border-transparent bg-indigo-600 disabled:bg-gray-200 px-4 py-2 text-sm font-medium text-white shadow-sm disabled:hover:bg-gray-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2', className)}
                disabled={disabled}
                onClick={onClick}
            >{children}</button>
        );

    if (type === 'secondary')
        return (
            <button
                type="button"
                className={classNames('inline-flex items-center rounded-md border border-transparent bg-indigo-100 disabled:bg-gray-200 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2', className)}
                disabled={disabled}
                onClick={onClick}
            >{children}</button>
        )
    return (

        <button
            type="button"
            className={classNames('inline-flex items-center rounded-md border border-gray-300 bg-white disabled:bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2', className)}
            disabled={disabled}
            onClick={onClick}
        >{children}</button>
    );
};

export default Button;

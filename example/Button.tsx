import React = require('react');

export function Button(props: {title: React.ReactChild; icon?: React.ReactChild; menu?: {text: string}[]}) {
    return (
        <button>
            {props.icon}
            {props.title}
            {props.menu && (
                <div>
                    {props.menu.map((item, i) => (
                        <div key={i}>{item}</div>
                    ))}
                </div>
            )}
        </button>
    );
}

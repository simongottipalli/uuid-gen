import React from "react";

export default function ErrorText(props) {
    let error = props.error
    if (error) {
        return <div>Error: {error.message}</div>;
    }
}
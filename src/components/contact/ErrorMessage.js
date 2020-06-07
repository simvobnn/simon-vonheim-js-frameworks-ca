import React from "react";

function ErrorMessage({ children }) {
    return (
        <div class="error">{ children }</div>
    );
}

export default ErrorMessage;

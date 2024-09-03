// errorMiddleware.js
const errorHandler = (err, req, res, next) => {
    // Log detailed information about the error
    console.error("Error Middleware Triggered:");
    console.error(`Status Code: ${res.statusCode}`);
    console.error(`Error Message: ${err.message}`);
    if (process.env.NODE_ENV === "development") {
        console.error(`Stack Trace: ${err.stack}`);
    }
    
    // Ensure a valid status code is set
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);

    // Respond with error details
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "development" ? err.stack : null
    });
};

module.exports = errorHandler;


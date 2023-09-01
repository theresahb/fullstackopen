sequenceDiagram
    participant user
    participant browser
    participant eerver

    user->>browser: Enter URL https://studies.cs.helsinki.fi/exampleapp/spa
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML, JS, and CSS files
    deactivate server

    Note right of Browser: User interacts with SPA

    user->>browser: creates a new note
    browser->>server: Send POST request with note data
    activate server
    server-->>browser: Success response
    deactivate server
    
    browser-->>user: Show success message
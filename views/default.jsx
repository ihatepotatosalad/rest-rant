const React = require('react')
function Def(html) {
    return (
        <html>
            <head>
                <title>Title</title>

                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
                <link rel='stylesheet' href='/style.css' />
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Places</a>
                        </li>
                        <li>
                            <a href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>

                {html.children}
            </body>
        </html>
    )
}
module.exports = Def
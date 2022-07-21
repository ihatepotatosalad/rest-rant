const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <img src="/images/404image.png" alt="sadgirl" />
                <div>
                    Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                </div>
            </main>
        </Def>
    )
}


module.exports = error404

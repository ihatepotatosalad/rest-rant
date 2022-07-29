const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <img src={data.place.pic} alt="" />
                <h3>located in {data.place.city} , {data.place.state}</h3>
                <h2>Rating</h2>
                <h3>not yet</h3>
                <h2>description</h2>
                <h3>{data.place.showEstablished()}</h3>
                <h2>Comment </h2>
                <h3>not yet</h3>
                <h2>cuisines </h2>
                <h3>serving {data.place.cuisines}</h3>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>

                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>


            </main>
        </Def>
    )
}

module.exports = show

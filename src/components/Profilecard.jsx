
import './profile.css'

export function ProfileCard(props) {

    return <div id="card-container">
        <img id="avatar" src={props.data.avatar_url} height={150}  />
        <h1 id="name">{props.data.name}</h1>
        <h6 id="username">{props.data.username}</h6>
        <div id="description">{props.data.bio}</div>
        <div id="info-container">
            <div id="one">
                <h4>followers</h4>
                <div id="followers">{props.data.followers}</div>
            </div>
            <div id="2">
                <h4>following</h4>
                <div id="following">{props.data.following}</div>
            </div>
            <div id="3">
                <h4>repositories</h4>
                <div id="repositiories">{props.data.public_repos}</div>
            </div>
        </div>
    </div>
}
import { Profile } from "./Profile";

const adress = '../src/assets/anonimo.png'


export function WhoToFollow() {

    return (
        <div className="card-container">
            <h4 className="who-title">Who to Follow</h4>
            <Profile name='Martín' username='martin99' photo={adress} size={48}/>
            <Profile name='Juan' username='juan99' photo={adress} size={48}/>
            <Profile name='Rocky' username='rocky99' photo={adress} size={48}/>
            <div className="show-more">
            <span className="show-more-button"><a href="#">Show More</a></span>
            </div>
        </div>
    );
}
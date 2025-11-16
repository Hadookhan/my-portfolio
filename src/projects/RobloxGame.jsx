import '../css/default.css';
import '../css/projects.css';
import '../css/home.css';
import robloxGame from '../assets/robloxGame.png';

export default function BlobGame() {

    return (
        <section className="project">
            <h1 className="title">Project: Roblox Game</h1>

            <div className="page-content">
                <h2 className="introHead">Grow a family</h2>

                <h3 className="head2">Description</h3>
                <p className="intro3">
                    A Tycoon game inside of Roblox which was targetted 
                    for a children audience.
                </p>

                <img
                    className="proj-img"
                    src={robloxGame}
                    alt="Screenshot of the Roblox Game"
                    title="Roblox Game"
                />

                <h3 className="head2">Self-reflection</h3>
                <p className="intro3">
                    This was a rogue project from the others I had previously made...
                    One reason I made this project was because I wanted to try out 
                    Luau, which is the language that is used in the Roblox engine. 
                    It is Robloxs' version of the language Lua. I was also inspired by 
                    other games made on Roblox, so this ultimately lead me to attempting 
                    to create my own game. In the end, I realised making a Roblox game 
                    requires a whole team, as there are many other jobs aside from programming 
                    that come into game development. So, I never finished this project, however 
                    I did come out learning some quite useful skills I would like to share.
                </p>

                <h3 className="head2">Skills gained/reinforced:</h3>
                <ul className='intro3'>
                    <li>
                        <p className='intro3'>Luau</p>
                    </li>
                    <li>
                        <p className='intro3'>Pub-Sub architecture</p>
                    </li>
                    <li>
                        <p className='intro3'>Roblox Asset creation</p>
                    </li>
                    <li>
                        <p className='intro3'>Roblox Map creation</p>
                    </li>
                    <li>
                        <p className='intro3'>Roblox UI/UX</p>
                    </li>
                    <li>
                        <p className='intro3'>Blender (3D Modelling)</p>
                    </li>
                </ul>

                <h3 className="head2">Extras</h3>
                <p className="intro3">Click <a className='homeLinks' href='https://www.roblox.com/games/74812128527208/Grow-a-Family#!/about'>here</a> to view the game on Roblox</p>
            </div>
            

        </section>
    );

}
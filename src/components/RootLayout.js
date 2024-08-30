import { Outlet } from "react-router-dom";

function RootLayout() {


    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h1>mini-<span className="reddit">Reddit</span></h1>
                    <select 
                    name="subreddits" 
                    id="subreddits"
                    >
                        <option value="temp1">JavaScript</option>
                        <option value="temp2">React</option>
                        <option value="temp3">Redux</option>
                        <option value="temp4">HTML</option>
                        <option value="temp5">CSS</option>
                    </select>
                    <input type="text" placeholder="Search..."></input>                 
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}



export default RootLayout;
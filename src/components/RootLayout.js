import { Outlet } from "react-router-dom";


function RootLayout() {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h1>mini-<span className="reddit">Reddit</span></h1>
                    <select name="subreddits" id="subreddits">
                        <option value="temp1">Temp 1</option>
                        <option value="temp2">Temp 2</option>
                        <option value="temp3">Temp 3</option>
                        <option value="temp4">Temp 4</option>
                        <option value="temp5">Temp 5</option>
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
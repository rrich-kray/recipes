import { NextPage } from "next";


const Nav: NextPage = () => {
    return (
        <>
            <div className="nav">
                <div className="left-container"></div>
                <div className="right-container">
                    <button>Login</button>
                </div>
            </div>
            <style jsx>{`
                .nav {
                    top: 0;
                    width: 100%;
                    height: 90px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center
                }

                .left-container {
                    height: 100%;
                    width: 33%;
                }

                .right-container {
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100px;
                }
            `}</style>
        </>
        
    )
}

export default Nav
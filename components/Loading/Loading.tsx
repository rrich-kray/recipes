import { NextPage } from "next";
import { useState } from 'react';

const Loading: NextPage = () => {
    return (
        <>
            <div className="loading">
                <div className="loader">
                    <span style="--i:1"></span>
                    <span style="--i:2"></span>
                    <span style="--i:3"></span>
                    <span style="--i:4"></span>
                    <span style="--i:5"></span>
                    <span style="--i:6"></span>
                    <span style="--i:7"></span>
                    <span style="--i:8"></span>
                    <span style="--i:9"></span>
                    <span style="--i:10"></span>
                    <span style="--i:11"></span>
                    <span style="--i:12"></span>
                    <span style="--i:13"></span>
                    <span style="--i:14"></span>
                    <span style="--i:15"></span>
                    <span style="--i:16"></span>
                    <span style="--i:17"></span>
                    <span style="--i:18"></span>
                    <span style="--i:19"></span>
                    <span style="--i:20"></span>
                </div>
            </div>
            <style jsx>{`
                .loading {
                    height: 100vh;
                    width: 100vw;
                    z-index: 999;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: black;
                }

                .loader {
                    height: 500px;
                    width: 500px;
                }

                .loader span {
                    position: relative;
                    height: 100%;
                    width: 100%;
                    animation: rotate 1s linear infinite;
                    animation-delay: calc(var(--i)*0.25)
                }

                .loader span::before {
                    content: '';
                    height: 10px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    border-radius: 50%;
                    box-shadow: 0 0 10px white,
                                0 0 20px white,
                                0 0 40px white,
                                0 0 80px white,
                                0 0 100px white;
                }

                @keyframes rotate {
                    0% {
                        transform: rotate(0deg)
                    }

                    1005 {
                        transform: rotate(360deg)
                    }
                }
            `}</style>
        </>
    )
}

export default Loading
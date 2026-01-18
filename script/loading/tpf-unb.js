/* <script data-cfasync="false" src="https://file-1.御坂网络.100320721.xyz/script/loading/tpf-unb.js"></script> */

document.querySelector('body').insertAdjacentHTML("afterbegin", `
    <loading>
        <div class="loading">
            <div class="loading loading-f">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <style>
                .loading {
                    z-index: 2147483645;
                    position: fixed;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    background-color: #009edb;
                }

                .loading-f {
                    z-index: 2147483646;
                    position: fixed;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    background-color: #009edb;
                    animation: loading_animation 2s infinite;
                }

                .loading-f * {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                .loading-f :nth-child(1) {
                    width: 100%;
                    height: 100%;
                    background-color: #5BCEFA;
                    transform: translate(-50%, -50%);
                }

                .loading-f :nth-child(2) {
                    width: 100%;
                    height: 60%;
                    background-color: #F5A9B8;
                    transform: translate(-50%, -50%);
                }

                .loading-f :nth-child(3) {
                    width: 100%;
                    height: 20%;
                    background-color: #FFF;
                    transform: translate(-50%, -50%);
                }


                @keyframes loading_animation {
                    0% {
                        transform: translateX(100%);
                    }

                    25% {
                        transform: translateX(0);
                        animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
                    }

                    50% {
                        transform: translateX(0);
                        animation-timing-function: linear;
                    }

                    75% {
                        transform: translateX(-100%);
                        animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
                    }

                    100% {
                        transform: translateX(-100%);
                        animation-timing-function: linear;
                    }
                }
            </style>
        </div>
    </loading>
`);

window.addEventListener('load', () => {
    document.querySelector("loading").innerHTML = '';
});



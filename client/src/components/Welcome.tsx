import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Loader } from "./";

const commonstyles =
    "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Welcome = () => {
    const connectwallet = () => {};
    return (
        <div className="flex w-full justify-center ">
            <div className="flex md:flex-row flex-col items-center justify-between md:p-20 py-20 px-4">
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h1 className="text-white text-3xl sm:text-5xl text-gradient py-1">
                        Send Crypto
                        <br /> across the world
                    </h1>
                    <p className="text-white text-left mt-5 font-light md:w-9/12 text-base w-11/12">
                        Explore the crypto world. Buy and sell cryptocurrencies
                        easily on BlockBhejo.
                    </p>
                    <button
                        type="button"
                        onClick={connectwallet}
                        className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                    >
                        <p className="text-white text-base font-semibold">
                            Connect Wallet
                        </p>
                    </button>

                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                        <div
                            className={`rounded-tl-2xl ${commonstyles} hover:bg-[#552034] transition-all duration-1000 ease-out`}
                        >
                            Reliability
                        </div>

                        <div className={commonstyles}>Security</div>
                        <div
                            className={`rounded-tr-2xl ${commonstyles} hover:bg-[#2a2b49] transition-all duration-1000 ease-out`}
                        >
                            Ethereum
                        </div>
                        <div className={`rounded-bl-2xl ${commonstyles}`}>
                            Web 3.0
                        </div>
                        <div className={commonstyles}>Low fees</div>

                        <div className={`rounded-br-2xl ${commonstyles}`}>
                            Blokhain
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;

import {useState} from "react";

export type FaqProps = {
    title: string;
    description: string;
}

export default function FaqComponent(props: FaqProps){

    const [expanded, setExpanded] = useState(false);

    return <div onClick={() => setExpanded(!expanded)} className="flex flex-col p-3 border-b text-gray-light cursor-pointer">
        <div className="flex flex-row items-center">
            <p className={`flex-auto hover:text-yellow-500 ${expanded ? "text-gray-dark font-black" : "font-normal"}`}>{props.title}</p>
            <img className="flex-none w-3" src="/images/icon-arrow-down.svg" alt="arrow down"/>
        </div>
        <div className={`transition-max-height duration-700 ease-in-out overflow-hidden ${expanded ? "max-h-20" : "max-h-0"}`}>
            <p>{props.description}</p>
        </div>
    </div>
}
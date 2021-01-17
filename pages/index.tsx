import FaqComponent from "../components/faqAccordion/faq";
import styles from "./index.module.css";
import Link from "next/dist/client/link";

export default function Index() {
    const faqs = [
        {
            key: 0,
            title: "How many team members can I invite?",
            description: "You can invite as many team members as you like"
        },
        {
            key: 1,
            title: "What is the maximum file upload size?",
            description: "No more than 2GB. All files in your account must fit your alloted storage space"
        },
        {
            key: 2,
            title: "How do I reset my password?",
            description: "You can use the reset password function from the settings menu"
        },
        {key: 2, title: "Can I cancel my subscription?", description: "You can, but there is no money-back guarantee"},
        {key: 2, title: "Do you provide additional support?", description: "Yes, please get in touch via e-mail!"},
    ];

    const faqComponents = faqs.map((faq) => {
        return <FaqComponent title={faq.title} description={faq.description}/>
    });

    return <div className={`container mx-auto flex items-center  ${styles.wrapper}`}>
        <div
            className={"flex-auto flex flex-col md:flex-row items-center bg-white rounded-xl m-5 p-3 md:m-10 " + styles.shadow}>
            <img className={"md:hidden flex-none pb-4 " + styles.translated}
                 src="/images/illustration-woman-online-mobile.svg" alt="Woman Online"/>

            <div className="flex-none relative hidden md:block  z-10 w-1/2">
                <img className={"z-20 relative " + styles["translated-md"]}
                     src="/images/illustration-woman-online-desktop.svg" alt="Woman Online"/>
                <img className={"z-40 absolute " + styles["translated-box"]}
                     src="/images/illustration-box-desktop.svg" alt="Woman Online"/>

            </div>


            <div className="flex-auto mb-2 w-full p-2">
                <h1 className="flex-none pl-3 text-3xl py-8 font-black tracking-wide">FAQ</h1>

                {faqComponents}
            </div>
        </div>
    </div>;
}
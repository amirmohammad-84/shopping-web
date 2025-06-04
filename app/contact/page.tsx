import { Metadata } from "next";
import Footer from "../components/layouts/footer"
import ContactUs from "./layout"


export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Us Page",
};


const ContactUsPage = ( ) => {


    return (

        <>
            <div className="pt-16">
                <ContactUs />


            </div>
        </>
    )
}


export default ContactUsPage
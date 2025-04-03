import { FaPhoneAlt } from "react-icons/fa";  
import { GrLocation } from "react-icons/gr";  

const ContactDetail = () => {  
  return (  
    <div>  
      <div className="sticky top-[120px]">  
        <div className="flex flex-col gap-6">  
          <div className="flex flex-col gap-2">  
            <h2 className="lg:text-[35px] text-[25px] font-semibold">  
              Want to <span className="text-primary">reach us Directly?</span>  
            </h2>  
            <p>If you have any queries, feel free to contact us.</p>  
          </div>  
          <div className="flex flex-col gap-2">  
            <div className="flex items-center gap-2">  
              <div className="text-accent-color">  
                <FaPhoneAlt size={15} />  
              </div>  
              <a href="tel:+18178083860" className="hover:text-primary transition-colors">  
                +1-817-808-3860  
              </a>  
            </div>  
            <div className="flex items-center gap-2">  
              <div className="text-accent-color">  
                <GrLocation size={15} />  
              </div>  
              <div>  
                <div className="flex flex-col gap-1">  
                  <div>Kathmandu, Nepal</div>  
                </div>  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default ContactDetail;  
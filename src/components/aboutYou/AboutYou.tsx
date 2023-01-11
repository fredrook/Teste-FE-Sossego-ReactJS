import { useContext } from "react";
import { UserContext } from "../../context/AuthContext";
import { ContainerModal } from "./AboutYouCSS";

const AboutYouModal = () => {  
  const { register } = useContext(UserContext);


  return (
    <>
    {register && (
        
        <ContainerModal>
          <div className="divSubContainer">
            <div>
              
            </div>

          </div>
    
      </ContainerModal>
      )}
    </>
    )
  };
  
export default AboutYouModal;
  
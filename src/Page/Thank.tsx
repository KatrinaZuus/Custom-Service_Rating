import styled from "styled-components";
import logo from  "/image/RS_logo.png";
import done from "/image/done-icon.png"

export default function Thank(){
    return(
        <>
        <Cont2>
            
            <img src={done} alt="" />
            <p>მადლობა, თქვენი შეფასება დაფიქსირებულია</p>
           
            <RS>
            <img style={{width: "20px", height: "20px"}} src={logo} alt="" />
            <p>RS.GE - ურთიერთობა მარტივია</p>
            </RS> 
        </Cont2>
        </>
    )
}

const Cont2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    text-align: center;
    padding: 80px 10px;
    img{
        width: 50px;
        height: 50px;
    }
`
const RS = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 50px
`
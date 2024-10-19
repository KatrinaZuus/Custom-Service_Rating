import React, { useState  , TouchEvent } from "react";
import styled from "styled-components";
import logo from  "/image/RS_logo.png";
import { IServisEvolution } from "../types/ServiceEvolution";
import { useNavigate } from "react-router-dom";

export default function CostomersPage(){
    
    const navigate = useNavigate();
    const servicePlace = ["აირჩიეთ", "გეზი 'თბილისი'", "გეზი 'თბილისი2'", "გეზი 'აეროპორტი'"];
    const [rating] = useState<number[]>([1, 2, 3, 4, 5]);

    const [evaluation, setEvaluation] = useState<IServisEvolution>({
        servicePlace: "",
        evaluation: "",
        comments: ""
    })
    const [selectedRate, setSelectedRate] = useState<number | null>(null);

    const handleRate = (rate: number) => {
        setSelectedRate(rate)
        setEvaluation((prevEval: any) => ({
            ...prevEval,
            evaluation: rate.toString()
        }));
        console.log(rate);
    }
        
          const handleServicePlaceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
            setEvaluation(prevEval => ({
                ...prevEval,
                servicePlace: event.target.value
            }));
        }
        async function handleSubmit(event: any) {
            event.preventDefault();
            const response = await fetch(
              "http://localhost:3000/service", {
                method: "POST",
                headers: {
                  "Content-Type": "application-json",
                },
                body: JSON.stringify(evaluation),
              }
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data)
            setEvaluation({
                servicePlace: servicePlace[0],
                evaluation: "",
                comments: ""
            });
            setSelectedRate(null); 
            navigate("/thank")
          } 

    return(
        <>
        <Cont>
            <Header>
                <img src={logo} alt="" />
                <p>თქვენი აზრი<br/><span>ჩვენთვის მნიშვნელოვანია</span></p>
            </Header>
       
            <Couple>
                <label htmlFor="">მომსახურების გაწევის ადგილი</label>
                <select id="servicePlace" onChange={handleServicePlaceChange}>
                    {servicePlace?.map((item, index)=>(
                        <option 
                        key = {index}
                        value={item}
                       >{item}</option>
                    ))}
                </select>
            </Couple>
            
            <Couple>
                <p>შეაფასეთ მიღებული მომსახურება</p>
                <Rating>
                    {rating.map((item, index)=>(
                        <p
                        className="circle"
                        key = {index}
                        onClick={() => handleRate(item)}
                        style={{
                            backgroundColor: selectedRate === item ? "red" : "#fff",
                            color: selectedRate === item ? "#fff" : "#000",
                        }}
                        >{item}</p>
                    ))}
                </Rating>
            </Couple>

            <Comment placeholder="დატოვეთ თქვენი კომენტარი..."
            onChange={(e) => setEvaluation(event => ({ ...event, comments: e.target.value }))} 
            />

            <button type="button" onClick={handleSubmit} onTouchStart={handleSubmit}>გაგზავნა</button>
        </Cont>
        </>
    )
}

const Cont = styled.div`
    button{
        margin-top: 20px;
        padding: 3px 8px 6px;
        border-radius: 8px;
        background-color: #71be71;
        border: none;
        width: 100px;
        margin-left: 235px;
        font-size: 18px;
        text-shadow: 0 0 20px #757575;
        touch-action: manipulation;
        cursor: pointer;
        :hover{
            background-color: #61e661;
        }
    }
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    & > p{
        opacity: 0.7;
        font-style: italic;
        font-weight: 600;
    }
    img{
        width: 80px;
        height: 80px;
    }
`
const Couple = styled.form`
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    gap: 10px;
    opacity: 0.7;
    select{
        padding: 10px;
        border-radius: 8px;
    }
    label{
        margin-left: 8px
    }
    &>p{
        margin-left: 8px;
    }
` 
const Rating = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
    .circle{
        padding: 13px 10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: solid 2px grey;
        font-size: 20px;
    }
    
`
const  Comment = styled.textarea`
    width: 100%;
    height: 200px;
    border: 1px solid grey;
    border-radius: 8px;
    padding: 20px;
` 
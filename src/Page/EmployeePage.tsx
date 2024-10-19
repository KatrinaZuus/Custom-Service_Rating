import styled from "styled-components";
import data from "../data.json";
import logo from "/image/RS_logo.png";
import * as XLSX from 'xlsx';
import {saveAs} from "file-saver";
import { IServisEvolution } from "../types/ServiceEvolution";

export default function EmployeePage(){
const evaluationForAdmin = data.service

const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(evaluationForAdmin);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Services');
    
    // Create a binary string for the workbook
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const dataBlob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    
    saveAs(dataBlob, 'services.xlsx');
  };
    return(
        <>
        <Cont>
            
        
        <Header>
            <img src={logo} alt="" />
            <p>მომხმარებელთა კმაყოფილების კვლევა</p>
            <button onClick={downloadExcel}>
                მონაცემების ჩამოტვირთვა
            </button>
        </Header>

        <div style={{border: "solid 0.5px gray"}}>
            <Title>
                <p className="N">N</p>
                <p className="servicePlace">მომსახურების გაწევის ადგილი</p>
                <p className="rating">შეფასება</p>
                <p className="comments">კომენტარი</p>
            </Title>

            <div>
            {evaluationForAdmin?.map((item: IServisEvolution, index: number)=>(
                <Grid 
                key={index}>
                    <p className="N">{index+1}</p>
                    <p className="servicePlace">{item.servicePlace}</p>
                    <p className="rating">{item.evaluation}</p>
                    <p className="comments">{item.comments}</p>
                </Grid>
            ))}
            </div>
        </div>

        </Cont>
        </>
    )
}

const Cont = styled.div`
    padding: 30px 50px;
    display: flex;
    flex-direction: column;
    .N,
    .servicePlace,
    .rating,
    .comments{
        width: 500px;
        padding: 5px 15px;
        border: solid 0.5px gray;
        text-align: center;
        word-wrap: break-word;
    }
    .N{
        width: 50px;
    }

`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    & > p{
        font-size: 30px;
        opacity: 0.7;
        font-style: italic;
    }
    img{
        width: 80px;
        height: 80px;
    }
    button{
        padding: 10px;
        border-radius: 8px;
        border: none;
        background-color: #71be71;
        font-size: 18px;
        box-shadow: 0 0 10px #757575;
        cursor: pointer;
        :hover{
            font-size: 20px;
        }
    }
`

const Title = styled.div`
    display: flex;
    font-weight: 600;
    font-size: 22px;
    background-color: #73bd6c;
    text-shadow: 0 0 10px #757575;
    letter-spacing: 2px;

   
`

const Grid = styled.div`
    display: flex;
    
    & > p{
        background-color: #cedeee;
        padding: 5px 15px;
        border: solid 0.5px gray;
        text-align: center;
    }
`
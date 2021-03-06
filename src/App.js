import React,{useState} from "react"
import information from "./data"
import {FaAngleDoubleRight} from "react-icons/fa"

const App = ()=>{
    const data = information
    const [value,setValue] = useState(0)
    

    const { company,dates,duties,title } = data[value] 
    return <section className="section">
    <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
    </div>
    <div className="jobs-center">
        <div className="btn-container">
        {data.map((item,index)=>{
            return <button 
            key={item.id} 
            onClick={()=>{setValue(index)}}
            className={`job-btn`}
            >
                {item.company}
            </button>
        })}
        </div>

        <article className="job-info">
            
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty,index)=>{
                return <div key={index} className="job-desc">
                    <FaAngleDoubleRight className="job-icon">

                    </FaAngleDoubleRight>
                    <p>{duty}</p>
                </div>
            })}
        </article>
    </div>
    
    </section>
}

export default App;
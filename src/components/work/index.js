import React, { Component } from 'react'
import axios from 'axios'
import { WorkSection,WorkTitle,Span,WorkPart,Icon,PartTitle,Line,PartDesc} from  "./work.js"

class Work extends Component  {
    
        state = {
            works : []
        }

        componentDidMount ()  {
            axios.get('js/data.json').then(res => {this.setState({works:res.data.works})})
        }

        render(){

            const {works} = this.state;

            const workslist = works.map( (workitem) => {
                   return (
                    <WorkPart  first={workitem.id} key={workitem.id}>
                        <Icon className={workitem.icon_name}></Icon>
                        <PartTitle>{workitem.title}</PartTitle>
                        <Line/>
                        <PartDesc>
                           {workitem.body}
                        </PartDesc>
                    </WorkPart>
                   )
            })

        return (
            <WorkSection>
            <div className="container">
                <WorkTitle><Span>My</Span> Work</WorkTitle>
                  {workslist}
            </div>
        </WorkSection>
        )
    }
    
}

export default Work

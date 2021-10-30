import React, { Component } from 'react'
import axios from 'axios'

import {SocialMedia,SOCIAL,Icon,SocialDesc,Span,SpanInfo} from "./social.js"

class Social extends Component  {

      state = {
          social: []
      };
      

      componentDidMount () {
          axios.get('js/data.json')
          .then( res => 
            { this.setState({ social : res.data.social })
          })
      }
    render() {

         const {social}  = this.state
         
         const sociallist = social.map( (socialitem) => {

            return(
                <SOCIAL item={socialitem.id} key={socialitem.id}>
                    <Icon className={socialitem.icon}></Icon>
                    <SocialDesc>
                        <Span>{socialitem.title}</Span>
                        <SpanInfo>{socialitem.body}</SpanInfo>
                    </SocialDesc>
                </SOCIAL>
            )
         })


        return (
            <SocialMedia>
                {sociallist}
        </SocialMedia>
        )
    }
}

export default Social

import React , {useState , useEffect} from 'react';
import axios from 'axios';
import {Section,Title,Span,List,Item,ImageWrapper,Image,Overlay,OverlaySpan} from "./portfolio.js"
const Portfolio = () => {

      const [ images , setimages] = useState([])

      useEffect ( () => {
        axios.get('js/data.json').then(res => {setimages(res.data.portfolio)})
      } , [] )

      const portfolioimages = images.map( (imageitem) => {
          return (
            <ImageWrapper key={imageitem.id}>
                    <Image src={imageitem.image} alt=""/>
                    <Overlay>
                        <OverlaySpan>
                            Show Image
                        </OverlaySpan>
                    </Overlay>
            </ImageWrapper>
          )
      })

    return (
        <Section>
            <Title><Span>My</Span> Portfolio</Title>
            <List>
                <Item active>All</Item>
                <Item>HTML</Item>
                <Item>Photoshop</Item>
                <Item>Wordpress</Item>
                <Item>Mobile</Item>
            </List>
            
            <div className="box">
                
                {portfolioimages}
            </div>
        
        </Section>
    )
}

export default Portfolio

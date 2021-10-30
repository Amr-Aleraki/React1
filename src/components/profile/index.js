import React from 'react'
import { BSKILLS,Brofile,List,Item,Span,Spanweb,Skills,SkillsDesc,Bar,Bartitle,Barperc,Barent,Barentspan,SkillsTitle,SkillsTitleSpan,Barentspansp1,Barentspansp2,Barentspansp3} from "./profile.js"

const Profile = () => {
    return (
        <BSKILLS>
        <div class="container">
            <Brofile>
                <h2 class="profile-title"><span>My </span>Profile</h2>
                <List>
                    <Item>
                        <Span>Name</Span>
                        Amr Tarek
                    </Item>
                    <Item>
                        <Span>Birthday</Span>
                        21/1/1996
                    </Item>
                    <Item>
                        <Span>Address</Span>
                        Ain shams
                    </Item>
                    <Item>
                        <Span>Phone</Span>
                        4444 5555 6666
                    </Item>
                    <Item>
                        <Span>Email</Span>
                        amr@tarek.com
                    </Item>
                    <Item>
                        <Span>Website</Span>
                        <Spanweb>www.google.com</Spanweb>
                    </Item>
                </List>
            </Brofile>
            
            <Skills>
                <SkillsTitle>Some <SkillsTitleSpan>skills</SkillsTitleSpan></SkillsTitle>
                <SkillsDesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                </SkillsDesc>
                <Bar>
                    <Bartitle>Bootstrap</Bartitle>
                    <Barperc>100%</Barperc>
                    <Barent>
                        <Barentspan>
                            <Barentspansp1></Barentspansp1>
                        </Barentspan>
                    </Barent>
                </Bar>
                
                <Bar>
                    <Bartitle>CSS3</Bartitle>
                    <Barperc>90%</Barperc>
                    <Barent>
                        <Barentspan>
                            <Barentspansp2></Barentspansp2>
                        </Barentspan>
                    </Barent>
                </Bar>
                
                <Bar>
                    <Bartitle>Photoshop</Bartitle>
                    <Barperc>80%</Barperc>
                    <Barent>
                        <Barentspan>
                            <Barentspansp3></Barentspansp3>
                        </Barentspan>
                    </Barent>
                </Bar>
            </Skills>
            
        </div>
    </BSKILLS>
    )
}

export default Profile

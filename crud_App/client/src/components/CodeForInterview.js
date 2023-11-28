import React from 'react'
import {Box , styled , Typography} from '@mui/material'


const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '50%',
    height: '50%'
});

const CodeForInterview = () => {
  return (
    <div>
      <div>
        <Header><h1>"viku"</h1></Header>
        <Typography variant="h4">Code for Interview</Typography>
            <div style={{display: 'flex'}}>
                <Image src={"https://wallpapers.com/images/hd/simple-youtube-background-logo-l7h6sa9w804yduwn.jpg"} />
                <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1moabWutDu7mlgduZ1_iOpVb2_Psgspb47ZKC5u9YNw&s"} />
                </div>
      </div>
    </div>
  )
}

export default CodeForInterview

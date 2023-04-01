import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { ApiService } from './../../service/api.service';
import { Box } from '@mui/material';
import { ChannelCard } from '..';
import { Container } from '@mui/material';
import Videos from './../videos/videos';
const Channel = () => {
  const [channelDetail, setChannelDetail] = useState([])
  const [videos, setVideos] = useState([])
  const {id} = useParams();

  useEffect(()=>{
    const getData = async()=>{
      try {
        const dataChannelDetail = await ApiService.fechting(`channels?part=snippet&id=${id}`)
        setChannelDetail(dataChannelDetail)
        const dataVideo = await ApiService.fechting(`search?channelId=${id}&part=snippet`)
        setVideos(dataVideo)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  },[id])
  return (
    <Box minHeight={'95vh'} mt={'1vh'}>
			<Box>
				<Box
					width={'100%'}
					height={'200px'}
					zIndex={10}
					sx={{
						backgroundImage: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						objectFit: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				/>
				<ChannelCard video={channelDetail} marginTop={'-100px'} />
			</Box>
			<Container maxWidth={'90%'}>
				<Videos videos={videos} />
			</Container>
		</Box>
  );
};

export default Channel;

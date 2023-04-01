import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { colors } from "./../../constans/colors";
import moment from "moment";
import { Stack } from "@mui/system";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <Card
      sx={{
        width: {
          xl: "22.9vw",
          lg: "30vw",
          md: "28.8vw",
          sm: "43vw",
          xs: "86vw",
        },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={`/video/${video.id.videoId}`}>
        <CardMedia
          image={video?.snippet?.thumbnails?.high?.url}
          alt={video?.snippet?.title}
          sx={{
            width: {
              xl: "22.9vw",
              lg: "30vw",
              md: "28.8vw",
              sm: "43vw",
              xs: "86vw",
            },
            height: "200px",
          }}
        />
      </Link>
      <CardContent
        sx={{
          background: colors.primary,
          height: "200px",
          position: "relative",
        }}
      >
        <Link to={`/video/${video.id.videoId}`}>
          <Typography my={"5px"} sx={{ opacity: ".4" }}>
            {moment(video?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {video?.snippet?.title.slice(0, 50)}
          </Typography>
          <Typography variant="subtitle2" opacity={".6"}>
            {video?.snippet?.description.slice(0, 70)}
          </Typography>
        </Link>
        <Link to={`/channel/${video?.snippet?.channelId}`}>
          <Stack
            direction={"row"}
            position={"absolute"}
            bottom={"10px"}
            alignItems={"center"}
            gap={"5px"}
          >
            <Avatar src={video?.snippet?.thumbnails?.high?.url} />
            <Typography variant="subtitle2" color={"gray"}>
              {video?.snippet?.channelTitle}
              <CheckCircle
                sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
              />
            </Typography>
          </Stack>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;

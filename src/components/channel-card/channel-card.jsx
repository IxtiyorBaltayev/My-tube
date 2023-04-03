import { CardContent, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ChnnelCard = ({ video }) => {
  console.log(video)
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
      }}
    >
      <Link to={`/channel/${video?.snippet?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <CardMedia
            image={video?.items ? video?.items?.[0]?.snippet?.thumbnails?.default?.url :  video.snippet?.thumbnails?.default?.url}
            alt={video?.items ? video?.items?.[0]?.snippet?.title : video?.snippet?.title}
            sx={{
              borderRadius: "50%",
              height: "180px",
              width: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant={"h6"}>
            {video?.items ? video?.items?.[0]?.snippet?.title : video?.snippet?.title}
            <CheckCircle sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />
          </Typography>
          {video?.items?.[0]?.statistics?.subscriberCount && (
            <Typography
              sx={{ fontSize: " 15px", fontWeight: "500", color: "gray" }}
            >
              {parseInt(video?.items?.[0]?.statistics?.subscriberCount).toLocaleString(
                "en-US"
              )}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChnnelCard;

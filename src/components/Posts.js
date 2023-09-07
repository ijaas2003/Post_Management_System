import {
  Container,
  List,
  Stack,
  Card,
  TextField,
  InputAdornment,
  ToggleButton,
  ToggleButtonGroup,
  Grid,
  CardContent,
  Typography,
  CardActions,
  Button,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Tooltip,
  Alert,
  AlertTitle,
  DialogTitle,
  DialogActions,
  Dialog,
  Badge,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import RefreshIcon from "@mui/icons-material/Refresh";
//import { images } from "../constants";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Mail from "@mui/icons-material/Mail";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Search } from "@mui/icons-material";
import GridViewIcon from "@mui/icons-material/GridView";
import Lists from "@mui/icons-material/List";
import { motion } from "framer-motion";
import "./Posts.scss";

const Posts = ({ direction }) => {
  const [layout, setlayout] = useState("list");
  const [Post, setPost] = useState("");
  const [Comments, setComments] = useState([]);
  const [Posts, setPosts] = useState([]);
  const [Ref, setref] = useState(1);
  const [SmartDel, setSmartDel] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [getid, setgetid] = useState();
  const [SmAlt, setSmAlt] = useState(false);
  const [append, setAppend] = useState([]);
  const [showAlertBucket, SetshowAlertBucket] = useState(false);
  const [getS, Setgets] = useState();

  const [openBtn, setOpenBtn] = useState(false);

  const handleClickOpenBtn = (e) => {
    console.log(e);
    Setgets(e);
    setOpenBtn(true);
  };
  const handleCloseBtn = () => {
    setOpenBtn(false);
  };
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => {
        setPosts(data);
        //console.log(data);
      });
  }, [Ref]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((data) => data.json())
      .then((data) => {
        setComments(data);
        console.log(data);
      });
  }, [Ref]);
  const handleref = () => {
    var i = Ref + 1;
    localStorage.clear()
    setref(i);
  };
  const HanddelAll = () => {
    var i = 0;
    var resultArray = Posts;
    for (; i < append.length; i++) {
      resultArray = resultArray.filter((item) => item.id != append[i]);
      console.log(resultArray);
    }
    setPosts(resultArray);
    setAppend([]);
    SetshowAlertBucket(false);
  };

  const restores = () => {
    setPost(localStorage.getItem("search") || "");
  };
  useEffect(() => {
    restores();
  }, []);
  window.onload = restores;
  const arrs = [];
  const deleteCard = () => {
    var updatedPosts = Posts;
    const clickedId = getid;

    if (SmartDel === false) {
      var updatedPosts = updatedPosts.filter((post) => post.id != getid);
      setPosts(updatedPosts);
    } else {
      if (!append.includes(clickedId)) {
        var updatedAppend = [...append, clickedId];
        setAppend(updatedAppend);
      }
      console.log(append);
      if (append.length >= 3) {
        setSmAlt(true);
        setTimeout(() => {
          SetshowAlertBucket(true);
        }, 2000);
      }
    }
    setOpen(false);
  };

  const EnableSmartDelete = () => {
    console.log(SmartDel);
    setSmartDel(!SmartDel);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
  const [open, setOpen] = useState(false);
  const len = append.length;
  const handleClickOpen = (e) => {
    setOpen(true);
    setgetid(e.id);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const pos = (e) => {
    setPost(e);
  };
  return (
    <div
      id="Posts"
      className="bg-black text-secondarycolor py-[30px] h-[100%] mt-[30px]"
    >
      {showAlert && (
        <Alert
          variant="standard"
          severity={`${SmartDel ? "success" : "warning"}`}
          onClose={() => setShowAlert(false)}
        >
          <AlertTitle>
            {SmartDel ? "Enabled" : "Disabled"}
            {SmAlt ? "Bucket Full" : " (Delete Bucket Not Full)"}
          </AlertTitle>
          {SmartDel ? "Smart Delete is Enabled" : "Smart Delete is Disable"} —{" "}
          <strong>check it out!</strong>
        </Alert>
      )}
      
      
      <div className="h-[90px]">
        <h1
          className={`text-center font-google text-secondarycolor ${
            direction === "row" ? "text-4xl" : "text-2xl"
          }`}
        >
          Enjoy your Posts 🎉✨
        </h1>
      </div>

      <Container maxWidth="lg">
      {showAlertBucket && (
        <Alert
          variant="standard"
          severity={`${setShowAlert ? "success" : "warning"}`}
          onClose={() => setShowAlert(false)}
        >
          <AlertTitle>
            {SmAlt ? "Bucket Fulling " : " (Delete Bucket Not Full)"}
          </AlertTitle>

          <Button onClick={(e) => HanddelAll()} variant="outlined">
            Delete the Bucket
          </Button>
        </Alert>
      )}
        <div>
          <div>
            <Dialog
              open={open}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
              maxWidth="sm"
            >
              <DialogTitle>{`${
                SmAlt
                  ? "Your Bucket is Fuling Please Delete It"
                  : "Are you Sure to Delete this Post?"
              }`}</DialogTitle>

              <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={deleteCard}>Agree</Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
        <div>
          <Dialog open={openBtn} onClose={handleCloseBtn}>
            <div className="w-[100%] bg-secondarycolor">
            <DialogTitle className="text-white">Posts🥳</DialogTitle>
            </div>
            
            <DialogContent>
              <DialogContentText>
                This is the email address the Post Comes in.
              </DialogContentText>
              {Comments.filter((posts) => posts.id == getS).map((post) => (
                <div key={post.id}>
                  <TextField
                    margin="dense"
                    id="name"
                    label={post.email}
                    type="email"
                    fullWidth
                    variant="outlined"
                    disabled
                    helperText="Do note This is the Email"
                  />
                  <TextField
                    margin="dense"
                    id="name"
                    label={post.name}
                    type="email"
                    fullWidth
                    variant="outlined"
                    disabled
                    helperText="Do note This is the Name"
                  />
                  <TextField
                    margin="dense"
                    id="name"
                    label={post.body}
                    type="email"
                    fullWidth
                    variant="outlined"
                    disabled
                    helperText="Do note This is the Body"
                  />
                </div>
              ))}
            </DialogContent>
            <DialogActions className="m-[10px]">
              <Button
                variant="contained"
                color="secondary"
                onClick={handleCloseBtn}
              >
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <Stack direction={"column"} spacing={3}>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              type: "spring",
              stiffness: "200",
            }}
          >
            <div className="  h-[100px] rounded-lg p-[20px] shadow-lg  bg-white w-[100%]">
              <Stack direction={"row"}>
                <div className="w-[300px]">
                  <h1 className="font-bold text-xl">Go ahead... </h1>
                  <div>
                    <h2>
                      go for Search
                      <span className="mx-[15px] ">
                        {
                          <ArrowForwardIcon
                            className="ani"
                            style={{ fontSize: "40px" }}
                          />
                        }
                      </span>
                    </h2>
                  </div>
                </div>
                <div className="w-[100%]">
                  <div className="mx-[20px] ">
                    <Container maxWidth="md">
                      <TextField
                        label="Search"
                        variant="outlined"
                        fullWidth
                        onChange={(e) => {
                          pos(e.target.value);
                          localStorage.setItem("search", Post);
                          console.log(localStorage.getItem("search"));
                        }}
                        value={Post}
                        placeholder="Enter the Post Name"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <IconButton>
                                <Mail className="text-yellow-400" />
                              </IconButton>
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton>
                                <Search />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Container>
                  </div>
                </div>
              </Stack>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{
              delay: 1,
              duration: 0.5,
              type: "spring",
              stiffness: "200",
            }}
          >
            <div className=" h-[100%] rounded-lg p-[20px] shadow-lg bg-secondarycolor w-[100%]">
              <Stack className="" direction={"column"} spacing={"5"}>
                <Stack direction={"row"} className="h-[70px]">
                  <div className="w-[450px]">
                    <h1 className="font-bold text-white  text-xl font-google">
                      {<Mail className="text-yellow-400 mx-[10px]" />}
                      Messages Inbox{" "}
                      <span>
                        <Tooltip title="Refresh" arrow>
                          <IconButton onClick={() => handleref()}>
                            <RefreshIcon
                              className=" text-white"
                              fontSize="medium"
                            />
                          </IconButton>
                        </Tooltip>
                      </span>
                    </h1>
                  </div>
                  <div className="m-[20] w-[100%] flex justify-end items-center">
                    <div>
                      <Tooltip
                        arrow
                        title={<span className="text-md">Smart Delete</span>}
                      >
                        <Button
                          variant="contained"
                          color="inherit"
                          size="medium"
                          onClick={EnableSmartDelete}
                        >
                          Smart
                          {
                            <Badge badgeContent={len} className="">
                              <DeleteIcon className="ml-[10px]" />
                            </Badge>
                          }
                        </Button>
                      </Tooltip>
                    </div>
                    <div className="h-[100%] flex items-center p-[20px]">
                      <h1 className="text-white text-xl font-google">
                        Layouts
                        {
                          <ArrowForwardIcon
                            style={{ fontSize: "30px", marginLeft: "10px" }}
                          />
                        }
                      </h1>
                    </div>

                    <div>
                      <ToggleButtonGroup
                        value={layout}
                        exclusive
                        onChange={(e, newLayout) => setlayout(newLayout)}
                        className="bg-white"
                      >
                        <Tooltip
                          title={
                            <span className="text-[13px]">Grid LayOut</span>
                          }
                          classes={{ fontSize: "20px" }}
                          arrow
                        >
                          <ToggleButton value="grid">
                            <GridViewIcon />
                          </ToggleButton>
                        </Tooltip>

                        <Tooltip
                          title={
                            <span className="text-[13px]">List LayOut</span>
                          }
                          arrow
                        >
                          <ToggleButton value="list">
                            <Lists />
                          </ToggleButton>
                        </Tooltip>
                      </ToggleButtonGroup>
                    </div>
                  </div>
                </Stack>
                <Stack>
                  <div>
                    <div>
                      <Grid container spacing={5}>
                        {layout === "grid" &&
                          Posts.filter((item) => {
                            return Post.toLowerCase() === ""
                              ? item
                              : item.title.toLowerCase().includes(Post);
                          }).map((post) => (
                            <Grid
                              item
                              key={post.id}
                              xs={direction == "row" ? 4 : 12}
                            >
                              <Card>
                                <CardContent>
                                  <Typography
                                    gutterBottom
                                    variant="h5"
                                    className="text-secondarycolor"
                                    component={"div"}
                                  >
                                    {post.id}.{"   "} Mail
                                  </Typography>
                                  <Typography>{post.title}</Typography>
                                </CardContent>
                                <CardActions className="my-[20px]">
                                  <Tooltip title="Open the Mail" arrow>
                                    <Button
                                      size="small"
                                      style={{ marginInline: "10px" }}
                                      variant="contained"
                                      onClick={(e) =>
                                        handleClickOpenBtn(e.currentTarget.id)
                                      }
                                      id={post.id}
                                    >
                                      Open
                                    </Button>
                                  </Tooltip>
                                  <Tooltip title="Delete" arrow>
                                    <Button
                                      size="small"
                                      color="error"
                                      variant="contained"
                                      style={{ marginInline: "20px" }}
                                      onClick={(e) => {
                                        handleClickOpen(e.currentTarget);
                                      }}
                                      id={post.id}
                                    >
                                      Delete
                                    </Button>
                                  </Tooltip>
                                </CardActions>
                              </Card>
                            </Grid>
                          ))}
                      </Grid>
                    </div>

                    <div className="my-[20px]">
                      <List className="my-[10px]">
                        {layout == "list" &&
                          Posts.filter((item) => {
                            return Post.toLowerCase() === ""
                              ? item
                              : item.title.toLowerCase().includes(Post);
                          }).map((post) => (
                            <Tooltip
                              followCursor
                              arrow
                              title="Click to open"
                              key={post.id}
                            >
                              <ListItem className="bg-white my-[10px] rounded-lg">
                                <ListItemButton
                                  onClick={(e) =>
                                    handleClickOpenBtn(e.currentTarget.id)
                                  }
                                  id={post.id}
                                >
                                  <ListItemIcon>
                                    <ListItemAvatar>
                                      <Avatar
                                        style={{ backgroundColor: "#313bac" }}
                                      >
                                        <Mail />
                                      </Avatar>
                                    </ListItemAvatar>
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={post.title}
                                  ></ListItemText>
                                </ListItemButton>
                                <Tooltip title={"Delete"} arrow>
                                  <IconButton
                                    edge="end"
                                    aria-label="delete"
                                    size="medium"
                                    onClick={(e) =>
                                      handleClickOpen(e.currentTarget)
                                    }
                                    id={post.id}
                                  >
                                    <Avatar style={{ backgroundColor: "red" }}>
                                      <DeleteIcon />
                                    </Avatar>
                                  </IconButton>
                                </Tooltip>
                              </ListItem>
                            </Tooltip>
                          ))}
                      </List>
                    </div>
                  </div>
                </Stack>
              </Stack>
            </div>
          </motion.div>
        </Stack>
      </Container>
    </div>
  );
};

export default Posts;

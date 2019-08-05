import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

//icons
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import CampaignIcon from '@material-ui/icons/GpsFixedOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import ChartIcon from '@material-ui/icons/PieChartOutlined';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import InsightsIcon from '@material-ui/icons/DeviceHubOutlined';

//myComps
import CListItem from "./CListItem";

// titles hc
const sublistAdvantive = ["EVENTS", "DEPLOYMENT", "SETTINGS", "RULES"];
const sublistRest = ["TITLE 1", "TITLE 2", "TITLE 3"];


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 	"#21264c",
    color: "#5c6bc0"
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {CListItem("DASHBOARD", sublistRest, <HomeIcon/>)}
      {CListItem("CAMPAIGNS", sublistRest, <CampaignIcon/>)}
      {CListItem("INSIGHTS", sublistRest, <InsightsIcon/>)}
      {CListItem("REPORTING", sublistRest, <ChartIcon/>)}
      {CListItem("ADVANTIVE", sublistAdvantive, <SettingsIcon/>)}
      {CListItem("TEMPLATES", sublistRest, <FileCopyIcon/>)}


    </List>
  );
}

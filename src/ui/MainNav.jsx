import {
  BusinessCenterOutlined,
  ExpandLess,
  ExpandMore,
  HomeOutlined,
  MonetizationOnOutlined,
  PeopleOutlined,
  PersonAddAlt1Outlined,
} from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function MainNav() {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen((open) => !open);
  }

  return (
    <List>
      <NavLink
        to="/dashboard"
        style={({ isActive }) => {
          return {
            textDecoration: "none",
            color: isActive ? "#673ab7" : "black",
          };
        }}
      >
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeOutlined />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
      </NavLink>
      <ListItem disablePadding>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <PeopleOutlined />
          </ListItemIcon>
          <ListItemText primary="Members" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <NavLink
            to="member-list"
            style={({ isActive }) => {
              return {
                textDecoration: "none",
                color: isActive ? "#673ab7" : "black",
              };
            }}
          >
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <PersonAddAlt1Outlined />
              </ListItemIcon>
              <ListItemText primary="Member List" />
            </ListItemButton>
          </NavLink>
          <NavLink
            to="new-member"
            style={({ isActive }) => {
              return {
                textDecoration: "none",
                color: isActive ? "#673ab7" : "black",
              };
            }}
          >
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <PersonAddAlt1Outlined />
              </ListItemIcon>
              <ListItemText primary="Add New Member" />
            </ListItemButton>
          </NavLink>
        </List>
      </Collapse>
      <NavLink
        to="/savings"
        style={({ isActive }) => {
          return {
            textDecoration: "none",
            color: isActive ? "#673ab7" : "black",
          };
        }}
      >
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BusinessCenterOutlined />
            </ListItemIcon>
            <ListItemText primary="Savings" />
          </ListItemButton>
        </ListItem>
      </NavLink>
      <NavLink
        to="/loan"
        style={({ isActive }) => {
          return {
            textDecoration: "none",
            color: isActive ? "#673ab7" : "black",
          };
        }}
      >
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MonetizationOnOutlined />
            </ListItemIcon>
            <ListItemText primary="Loan Request" />
          </ListItemButton>
        </ListItem>
      </NavLink>
    </List>
  );
}

export default MainNav;

import React, { useState } from "react";
import { styled } from "@mui/system";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import placeholderIcon from "../../../public/placeholder.png";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
  q: "",
  format: "json",
  addressdetails: "addressdetails",
};

const SearchBoxContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "100%",

});

const SearchInput = styled(OutlinedInput)({
  width: "90%",
  border: "3px solid white", 
  borderRadius: "5px",
  margin: "10px",
  marginLeft: "10px",
  padding: "6px 10px", 
  color: "white",
  background: "transparent", 
});

const SearchButton = styled(Button)({
  padding: "10px 20px",
  backgroundColor: "#223344",
});

const PlaceholderImage = styled("img")({
  width: 38,
  height: 38,
});

export default function SearchBox({ selectPosition, setSelectPosition }) {
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);

  const handleSearch = () => {
    // Search
    const params = {
      q: searchText,
      format: "json",
      addressdetails: 1,
      polygon_geojson: 0,
    };
    const queryString = new URLSearchParams(params).toString();
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setListPlace(result);
      })
      .catch((err) => console.log("err: ", err));
  };

  return (
    <SearchBoxContainer>
      <div style={{ flex: 1 }}>
        <SearchInput
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
      </div>
      <div style={{ padding: "0px 20px" }}>
        <SearchButton variant="contained" color="primary" onClick={handleSearch}>
          Search
        </SearchButton>
      </div>
      <div style={{ flex: 10 }}>
        <List component="nav" aria-label="main mailbox folders">
          {listPlace.map((item) => (
            <div key={item?.place_id}>
              <ListItem
                button
                onClick={() => {
                  setSelectPosition(item);
                }}
              >
                <ListItemIcon>
                  <PlaceholderImage src={placeholderIcon} alt="Placeholder" />
                </ListItemIcon>
                <ListItemText primary={item?.display_name} />
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </div>
    </SearchBoxContainer>
  );
}

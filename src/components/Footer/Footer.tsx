import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { footerLinks } from "../Menu/config";

const StyledUl = styled.ul`
  margin-left: 10px;
  list-style: none;
  padding: 2.5px 0px 0px 0px;
  fontsize: "9px";
`;

const StyledLi = styled.li`
  font-family: "Kanit", sans-serif;
  margin-top: 10px;
  marigin-left: 10px;
  padding: 2.5px 0px;
  fontsize: "9px";
`;

const YellowLink = styled.a`
  font-family: 'Kanit',sans-serif;
  word-wrap: 'true',
  padding: 2.5px 0px;
  fontSize: '2px';
  align-items: 'center';
  font-weight:400
`;

const FooterDivider = styled.div`
  height: 10px;
  background-color: transparent;
  width: 10px;
  margin-bottom: 2.5px;
`;

const FooterSpacing = styled.div`
  height: 500px;
  @media (max-width: 848px) {
    height: 400px;
  }
`;

export default function Footer() {
  return (
    <>
      <FooterSpacing />
      <div
        style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          color: "#fff",
          backgroundColor: "transparent",
          padding: "30px 0px",
          margin: "380px 0px 0px 0px",
        }}
      >
        <Grid container spacing={1}>
          <Grid item md={3} xs={3}>
            <Box sx={{ p: "10px 4px", width: "100%" }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "'Kanit',sans-serif",
                  color: "#f3756b",
                  fontSize: "10px",
                  fontWeight: "bold",
                  margin: "0px 10px",
                }}
              >
                ABOUT
              </Typography>
              <StyledUl>
                {footerLinks.column1.map((link) => (
                  <StyledLi key={link.label}>
                    <a href={link.href} target="_blank" rel="noop noreferrer">
                      {link.label}
                    </a>
                  </StyledLi>
                ))}
              </StyledUl>
            </Box>
          </Grid>

          <Grid item md={3} xs={3}>
            <Box sx={{ p: "10px 4px", margin: "0px, 210px" }}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "'Kanit',sans-serif",
                  color: "#9a6aff",
                  fontSize: "10px",
                  fontWeight: "bold",
                  margin: "0px 10px",
                }}
              >
                SOCIAL
              </Typography>
              <StyledUl>
                {footerLinks.column2.map((link) => (
                  <StyledLi key={link.label}>
                    <a href={link.href} target="_blank" rel="noop noreferrer">
                      {link.label}
                    </a>
                  </StyledLi>
                ))}
              </StyledUl>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Box sx={{ p: "5px 5px", width: "100%", textAlign: "center" }}>
              <FooterDivider />
              <YellowLink
                href="https://wwww.universalfloki.com/disclaimer"
                target="_blank"
                rel="noop noreferrer"
                style={{
                  color: "white",
                  left: "20px",
                  top: "-20px",
                  fontSize: "14px",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                No content on the site constitutes - or should be understood as
                constituting - a recommendation to enter in any securities,
                cryptocurrency, or cryptoasset transactions or to engage in any
                of the investment strategies presented in our online content.{" "}
              </YellowLink>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

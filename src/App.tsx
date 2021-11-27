import React, { useEffect, lazy } from 'react'
import { Router, Redirect, Route, Switch } from 'react-router-dom'
import { ResetCSS } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import useEagerConnect from 'hooks/useEagerConnect'
import { useFetchPriceList, useFetchProfile, useFetchPublicData } from 'state/hooks'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { color } from '@mui/system';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useGetDocumentTitlePrice from './hooks/useGetDocumentTitlePrice'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import SuspenseWithChunkError from './components/SuspenseWithChunkError'
import ToastListener from './components/ToastListener'
import PageLoader from './components/PageLoader'
// import EasterEgg from './components/EasterEgg'
import Pools from './views/Pools'
import GlobalCheckBullHiccupClaimStatus from './views/Collectibles/components/GlobalCheckBullHiccupClaimStatus'
import history from './routerHistory'


// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
const Lottery = lazy(() => import('./views/Lottery'))
const NotFound = lazy(() => import('./views/NotFound'))

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  const [usCitizenDialogOpen, setUsCitzenDialogOpen] = React.useState(true);

  const handleClose = () => {
    setUsCitzenDialogOpen(false);
  };

  // Monkey patch warn() because of web3 flood
  // To be removed when web3 1.3.5 is released
  useEffect(() => {
    console.warn = () => null
  }, [])

  useEagerConnect()
  useFetchPublicData()
  useFetchProfile()
  useFetchPriceList()
  useGetDocumentTitlePrice()

  return (
    <>
      <Router history={history}>
        <ResetCSS />
        <GlobalStyle />
        <Menu>
          <SuspenseWithChunkError fallback={<> </>}>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/farms">
                <Farms />
              </Route>
              <Route path="/pools">
                <Pools />
              </Route>
              <Route path="/lottery">
                <Lottery />
              </Route>
              {/* <Route path="/ifo">
                <Ifos />
              </Route>
              <Route path="/collectibles">
                <Collectibles />
              </Route>
              <Route exact path="/teams">
                <Teams />
              </Route>
              <Route path="/teams/:id">
                <Team />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route> */}
              {/* Redirect */}
              <Route path="/staking">
                <Redirect to="/pools" />
              </Route>
              <Route path="/syrup">
                <Redirect to="/pools" />
              </Route>
              {/* <Route path="/nft">
                <Redirect to="/collectibles" />
              </Route> */}
              {/* 404 */}
              <Route component={NotFound} />
            </Switch>
          </SuspenseWithChunkError>
        </Menu>
        {/* <EasterEgg iterations={2} /> */}
        <ToastListener />
        <GlobalCheckBullHiccupClaimStatus />
        <Dialog
          open={usCitizenDialogOpen}
          onClose={(event, reason) => {
            if (reason !== "backdropClick") {
              handleClose();
            }
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          paper-props={{
            style: {
              bgcolor: "black",
              color: "white",
            },
          }}
          sx={{color: 'white', bgcolor: 'black'}}
        >
          <DialogTitle id="alert-dialog-title" background-color="black" color="white">
            Disclaimer
          </DialogTitle>
          <DialogContent background-color='black'>
            <DialogContentText id="alert-dialog-description" color="white" bgcolor="black">
       
              <p>The services on universal-floki are not available, nor do we hold any liability over any financial gain or loss due to usage of, to the users from the below regions:</p>
              <br />
              <a href="https://unioversalfloki.com/disclaimer">!!!READ OUR FULL DISCLAIMER HERE!!!</a>
              <p>United States of America, China Mainland, Albania, Bosnia and Herzegovina, Belarus, Congo (DRC), Côte d&apos;Ivoire, Crimea, Cuba, Iraq, Iran, North Korea, Liberia, Macedonia, Myanmar, Serbia, Sudan, Syria, Zimbabwe.</p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" color="inherit" onClick={handleClose}>I accept</Button>
          </DialogActions>
        </Dialog>
      </Router>
    </>
  )
}

export default React.memo(App)

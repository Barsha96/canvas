import React, { Suspense} from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Root from './components/Root';

function App() {
  return (
    // <Router>
		// 	<Switch>
		// 		<Suspense fallback={<LoadingContainer text="loading ..." />}>
		// 			<Route path="/" exact component={Home} />
		// 			<Route path="/register" exact component={Register} />
		// 			<Route path="/login" exact component={Login} />
		// 			<Route path="/reset-password" exact component={ResetPassword} />
		// 			<Route path="/force-password-change" exact component={ForceResetPassword} />
		// 			<Route path="/create-your-team" exact component={CreateYourFirstTeam} />
		// 			<Route exact path="/verify-email" component={VerifyEmail} />
		// 		</Suspense>
		// 		<Route component={NotFound} />
		// 	</Switch>
		// </Router>
    <Root/>
  );
}

export default App;

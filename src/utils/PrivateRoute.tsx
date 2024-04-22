import { Navigate } from 'react-router-dom';
import { ComponentType } from 'react';

interface PrivateRouteProps {
  component: ComponentType<any>;
  isAuthenticated: boolean;
  authenticationPath: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  isAuthenticated,
  authenticationPath,
}) => {
  if (!isAuthenticated) {
    return <Navigate to={authenticationPath} replace />;
  }

  return <Component />;
};

export default PrivateRoute;
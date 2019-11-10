import React from 'react'

const withData = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  data?: any
): React.FC<P> => props => <WrappedComponent {...(props as P)} data={...data} />

export default withData

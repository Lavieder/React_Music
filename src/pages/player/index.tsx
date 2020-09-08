import * as React from 'react';

export interface IAppProps {
  name: String
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        player
      </div>
    );
  }
}

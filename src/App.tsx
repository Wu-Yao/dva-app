import { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';

function App(props: any) {
  useEffect(() => {
    props.getData();
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>{props.keyword}</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

function mapStateToProps(state:any) {
    const { test } = state;
    return {
        ...test,
    };
}

function mapDispatchToProps(dispatch:MyTS.dva.Dispatch) {
    return {
        getData: () => {
            const type = 'test/gets';
            return dispatch({
              type,
              payload: {
                num : 1
              }
            });
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import './App.css';
import Repo from '@/api/repo';
import { RepoList } from '@/components/RepoList';
import { SearchInput } from '@/components/SearchInput';
import { SelectProvider } from '@/components/selectContext';
import { Operator } from '@/components/Operator';
import { SelectList } from '@/components/selectList';
const App = (props:any) => {
  // const [git, setGit] = React.useState({
  //   user: {
  //     name: '',
  //     email: '',
  //   },
  // });
  const [path, setPath] = React.useState(props.root||"");
  const [selected, setSelected] = React.useState([]);
  // React.useEffect(() => {
  //   Repo.getGitInfo().then((res: any) => {
  //     setGit(res.data);
  //   });
  // }, []);
  return (
    <div className="App">
      <SelectProvider value={selected}>
        <h3>全局git信息</h3>
        <div>{props.root}</div>
        <p>
          user:{props.git.user.name} email:{props.git.user.email}
        </p>
        <div>
          <SearchInput callback={setPath} />
          <RepoList repoPath={path} callback={setSelected} />
        </div>
          {/* <SelectList /> */}
        <div />
        <Operator />
      </SelectProvider>
    </div>
  );
};

export default App;

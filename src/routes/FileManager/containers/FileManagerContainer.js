/********************************************************
 * FileManagerContainer 
 *
 * Responsible for fetching the current path, relative
 * to the git repository. It controls the logic on whether
 * to render the FileBrowser or Editor based on the 
 * response.
 *
 * @flow
 ********************************************************/

import { connect } from 'react-redux'                   // import connect
import { fetchPath, updateFile } from '../modules/file' // import action creators
import FileManager from '../components/FileManager'                   // import component to connect

function mapStateToProps ({file}, {...props}) {
  return {
    file,
    ...props
  }
}
function mapDispatchToProps (dispatch) {
  return {
    fetchPath: (fileName, token) => dispatch(fetchPath(fileName, token)),
    updateFile: (content, sha, path, message, token) => dispatch(updateFile(content, sha, path, message, token)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileManager)

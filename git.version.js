var {exec} = require('child_process')
const { exit } = require('process')

const defaultErrorMessage = 'Please retry with : \x1b[93mnode\x1b[0m .\\git.version.js \x1b[96m[version type (major/minor/patch)] "commit message"\x1b[0m'
const errorsDict = {
  'length':`Incorrect number of arguments (2 needed)`,
  'type':`Incorrect version type, must be "major","minor" or "patch"`,
  'characters':`Message contains forbidden characters or sequences ("\\", "/", "bash", ".exe", ".bat")`,
  'default':`Error`
}
const forbiddenCharacters = ['\\', ,'/', 'bash', '.exe', '.bat']


function main(args) {
  let params = {version: '', message: ''}

  function handleError(code) {
    console.error('\x1b[31m%s\x1b[0m',errorsDict[code]??=errorsDict['default'])
    console.log(defaultErrorMessage)
    exit(1)
  }

  function checkResult(error, stdout, stderr) {
    if (error) {
      console.log(`error: ${error.message}`)
      exit(1)
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`)
      exit(1)
    }
    console.log(`stdout: ${stdout}`)
  }

  function sendCommands() {
    let command = `git add --all & git commit -m "${params.message}" & git push & npm version ${params.version}`

    exec(command, (error, stdout, stderr) => checkResult(error, stdout, stderr))
  }

  function checkVersionType(version){
    switch (version) {
      case 'major':
        params.version = 'major'
        return true
      case 'minor':
        params.version = 'minor'
        return true
      case 'patch':
        params.version = 'patch'
        return true
      default:
        handleError('type')
        return false
    }
  }

  function checkMessage(message){
    forbiddenCharacters.forEach((character) => {
      if(message.includes(character)) {
        handleError('characters')
        return false
      }
    })
    params.message = message
    return true
  }

  function checkArgs(version, message) {
    let v = checkVersionType(version)
    let m = checkMessage(message)

    if(v&&m)
      sendCommands()
  }

  function checkArgsLength(args){
    args.length==4?
    checkArgs(args[2],args[3])
    :handleError('length')
  }

  checkArgsLength(args)
}

main(process.argv)
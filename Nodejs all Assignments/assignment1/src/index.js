const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	try{
		await fs.writeFile(fileName,fileContent)
	}
	catch(error){
		console.log(error)
	}
}

const myFileReader = async (fileName) => {
	// write code here
	try{
		const data=await fs.readFile(fileName,"utf-8")
			console.log(data)
	
	}
	catch(error){
		console.log(error)
	}
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	try{
		await fs.appendFile(fileName,fileContent)
		console.log("File update Sucessfully!")
	}
	catch(error){
		console.log(error)
	}
}

const myFileDeleter = async (fileName) => {
	// write code here
	try{
		await fs.unlink(fileName)
		console.log("File deleted sucessfully!")
	}
	catch(error){
		console.log(error)
	}
}

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
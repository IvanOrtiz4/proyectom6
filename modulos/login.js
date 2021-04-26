document.getElementById("alertLogin").style.display = "none"

document.getElementById("loginBtn").addEventListener("click", function() 
	{
	const data = new FormData()

	var usuario = document.getElementById("loginNickname").value
	var clave = document.getElementById("loginPassword").value

	data.append("usuario", usuario)
	data.append("clave", clave)

	fetch('autenticar.php', {
        method: 'POST',
        body: data,
    })
        .then(function (response) {
            if (response.ok) {
                return response.json()
            } else {
                throw "Error en la llamada Ajax"
            }
        })
        .then(function (text) {

			if(text.status === true) {
				document.getElementById("alertLogin").style.display = "none"
				location.assign("index.php")
			} else {
				document.getElementById("alertLogin").style.display = "block"
			}
		})
        .catch(function (err) {
            
        })



})
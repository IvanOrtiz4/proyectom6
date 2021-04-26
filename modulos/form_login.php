<!DOCTYPE html>
<html lang="es"> 
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="stylesheet" type="text/css" href="mystyle.css"/>
    <script type="text/javascript" src="jquery/js/jquery-1.5.1.min.js"></script>
    <script type="text/javascript" src="jquery/js/jquery-ui-1.8.12.custom.min.js"></script>
    <title></title>
<script type="text/javascript"></script>
</head> 
<body> 
    <section id="top">
        <header id="header">
            <h1>Validar un nombre de usuario: </h1>
        </header>
    </section>
    <section id="menus">
        <nav id="top_menu">
            <ul>
            </ul>
        </nav>
    </section>
    <div id="wrapper">
        <section id="cuerpo">
            <form action="login2.php" method="post">
                <p>Entra ya con tu cuneta y tu password</p>
                <table>
                    <tr>
                        <td>Username</td>
                        <td><input type="text" class="input_field" id="username" name="username"/></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input class="input_field" type="password" id="password" name="password"/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" value="Acceder"/></td>
                    </tr>
                </table>
            </form>
        </section>
</body> 
</html>
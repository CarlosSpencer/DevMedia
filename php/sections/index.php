<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sections</title>
</head>

<body>
    <!-- na primeira linha usaremos o “action=ope.php” para que o formulário repasse as informações para a página ope.php -->
    <form method="post" action="ope.php" id="formlogin" name="formlogin">
        <fieldset id="fie">
            <legend>LOGIN</legend><br />
            <label>NOME : </label>
            <!-- o campo “name” dentro do input e importante, pois será ele que armazenará os dados digitados .-->
            <input type="text" name="login" id="login" /><br />
            <label>SENHA :</label>
            <input type="password" name="senha" id="senha" /><br />
            <input type="submit" value="LOGAR  " />
        </fieldset>
    </form>
</body>

</html>
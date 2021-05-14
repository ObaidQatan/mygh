<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Doer | Registration</title>
    <link href="https://fonts.googleapis.com/css?family=ZCOOL+XiaoWei" rel="stylesheet">
    <link href="Design/style.css" rel="stylesheet" type="text/css"/>
</head>
<body>
<%response.setHeader("Cache-Control" , "no-cache , no-store , must-revalidate");
    %>
<div class="container">
    <div class="regbox box">
        <img class="avatar" src="img/notes.png">
        <h1>Register</h1>
        <form action="register" method="post">
            <p>Username</p>
            <input type="text" placeholder="Username" name="username" required>
            <p>Email</p>
            <input type="text" placeholder="Email" name="email" required>
            <p>Password</p>
            <input type="password" placeholder="Password" name="password" required>
            <input type="submit" value="Register">
            <a href="index.jsp">Already have Account?</a>
        </form>
    </div>
</div>
</body>
</html>

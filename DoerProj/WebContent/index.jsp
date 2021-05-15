<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ page import="java.sql.Connection" %>
    <%@ page import="doer.CP" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link rel="stylesheet" href="Design/style.css">
<title>Doer | Login</title>
</head>
<body>
<%response.setHeader("Cache-Control" , "no-cache , no-store , must-revalidate");
    %>
<div class="container">
    <div class="regbox box">
        <img class="avatar" src="img/notes.png">
        <h1>Login</h1>
        <form action="login" method="get">
            <p>Email</p>
            <input type="text" placeholder="Email" name="email" required>
            <p>Password</p>
            <input type="password" placeholder="Password" name="password" required>
            
            <input type="submit" value="Login">
            <a href="Registration.jsp">Do Not have Account?</a>
        </form>
    </div>
</div>
</body>
</html>
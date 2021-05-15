<%@page import="doer.UserAPI"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<% UserAPI user = (UserAPI) session.getAttribute("logUser");
    if(user==null){
        response.sendRedirect("index.jsp");
    }
%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Doer | Dashboard</title>
    </head>
    <body>
    <%response.setHeader("Cache-Control" , "no-cache , no-store , must-revalidate");
    %>
        <h1>Welcome, <%= user.getUsername() %></h1>
        <h1>ID: <%= user.getId() %> </h1>
        <h1>Email: <%= user.getEmail() %> </h1>
        <h1>Your Password: <%= user.getPassword() %></h1>
        
        
        <input type="submit" value="Doer" onclick="window.location.href = 'appFol/index.html'">
        
        
        <form action="logout" method="post">
        <input type="submit" value="Logout">
        </form>
        
        <script src="app.js"></script>
    </body>
</html>

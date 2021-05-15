package doer;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@WebServlet(name = "register", urlPatterns = { "/register" })
public class RegistartionSL extends HttpServlet {
	private static final long serialVersionUID = 1L;

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		
        
        String username = request.getParameter("username");
        String email = request.getParameter("email");
        String password = request.getParameter("password");
        
        UserAPI userModel = new UserAPI(username, email, password);

        
        Userdb regUser = new Userdb(CP.getConnection());
        if (regUser.hasUser(userModel)) {
           response.sendRedirect("index.jsp");
        } else {
            String errorMessage = "User unavailable";
            HttpSession regSession = request.getSession();
            regSession.setAttribute("RegError", errorMessage);
            response.sendRedirect("Registration.jsp");
            }
        
        
	}

}

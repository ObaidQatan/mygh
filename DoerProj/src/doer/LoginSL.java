package doer;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@WebServlet("/login")
public class LoginSL extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		
        String email = request.getParameter("email");
        String password = request.getParameter("password");
        
        Userdb logUser = new Userdb(CP.getConnection());
        
        UserAPI user = logUser.login(email , password);
        
        if(user != null){
        	HttpSession session = request.getSession();
            session.setAttribute("logUser", user);
            response.sendRedirect("Dashboard.jsp");
        }else{
            out.println("wrong");
        }
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	}

}

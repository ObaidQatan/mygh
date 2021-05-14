package doer;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

public class Userdb {
	Connection con ;

    public Userdb(Connection con) {
        this.con = con;
    }
    
    
    public boolean hasUser(UserAPI user){
        boolean set = false;
        try{
            
            String query = "INSERT INTO USERSCONFIG VALUES(?,?,?,?)";
            
            Statement statement = this.con.createStatement();
            ResultSet resultSet = statement.executeQuery("SELECT COUNT(`username`) FROM `usersconfig`");
            while (resultSet.next()) {

                int num = Integer.parseInt(resultSet.getString("COUNT(`username`)")) + 1;
                user.setId(String.valueOf("DOER" + num));
           
           PreparedStatement pt = this.con.prepareStatement(query);
           pt.setString(1, user.getId());
           pt.setString(2, user.getUsername());
           pt.setString(3, user.getEmail());
           pt.setString(4, user.getPassword());
           
           pt.executeUpdate();
            }
           set = true;
        }catch(Exception e){
            e.printStackTrace();
        }
        return set;
        } 
    //============================================
    public UserAPI login(String email, String password){
        UserAPI user=null;
        try{
            String query ="select * from usersconfig where email=? and password=?";
            PreparedStatement pst = this.con.prepareStatement(query);
            pst.setString(1, email);
            pst.setString(2, password);
            
            ResultSet rs = pst.executeQuery();
            
            if(rs.next()){
                user = new UserAPI();
                user.setId(rs.getString("id"));
                user.setUsername(rs.getString("username"));
                user.setEmail(rs.getString("email"));
                user.setPassword(rs.getString("password"));
                
            }
            
        }catch(Exception e){
            e.printStackTrace();
        }
        return user;
    }
    
}

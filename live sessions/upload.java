import java.io.IOException;
import java.sql.*;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/DisplayUploads")
public class DisplayUploads extends HttpServlet {
    private static final String DB_URL = "jdbc:mysql://localhost:3306/skillcraft_db";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "yourpassword";

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<Upload> uploads = new ArrayList<>();
        
        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD);
             Statement stmt = conn.createStatement()) {

            String query = "SELECT name, email, subject, link, upload_time FROM uploads";
            ResultSet rs = stmt.executeQuery(query);

            while (rs.next()) {
                Upload upload = new Upload();
                upload.setName(rs.getString("name"));
                upload.setEmail(rs.getString("email"));
                upload.setSubject(rs.getString("subject"));
                upload.setLink(rs.getString("link"));
                
                // Add 2 hours to the upload time
                Timestamp uploadTime = rs.getTimestamp("upload_time");
                Timestamp displayTime = new Timestamp(uploadTime.getTime() + 2 * 60 * 60 * 1000);
                
                // Format the timestamp
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                upload.setDisplayTime(sdf.format(displayTime));
                
                uploads.add(upload);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        // Store the list in request and forward to JSP for display
        request.setAttribute("uploads", uploads);
        request.getRequestDispatcher("displayUploads.jsp").forward(request, response);
    }
}

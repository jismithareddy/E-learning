import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

@WebServlet("/uploadSession")
public class UploadSessionServlet extends HttpServlet {
    private static final String DB_URL = "jdbc:mysql://localhost:3306/skillcraft_db";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "12345";

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Retrieve form data
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String subject = request.getParameter("subject");
        String link = request.getParameter("link");

        // Database connection and insertion using PreparedStatement
        try (Connection connection = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD)) {
            // SQL Insert Query using PreparedStatement
            String sql = "INSERT INTO sessions (name, email, subject, link) VALUES (?, ?, ?, ?)";
            try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
                // Set parameters for the prepared statement
                preparedStatement.setString(1, name);
                preparedStatement.setString(2, email);
                preparedStatement.setString(3, subject);
                preparedStatement.setString(4, link);

                // Execute the query
                int rowsInserted = preparedStatement.executeUpdate();

                // Respond to the client
                if (rowsInserted > 0) {
                    response.getWriter().write("Session details saved successfully!");
                } else {
                    response.getWriter().write("Failed to save session details.");
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
            response.getWriter().write("Error: " + e.getMessage());
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}

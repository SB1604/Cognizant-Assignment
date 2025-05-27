import java.sql.*;

public class StudentDAO {
    private Connection conn;

    public StudentDAO() throws SQLException {
        conn = DriverManager.getConnection("jdbc:sqlite:students.db");
    }

    public void insertStudent(int id, String name) throws SQLException {
        PreparedStatement stmt = conn.prepareStatement("INSERT INTO students (id, name) VALUES (?, ?)");
        stmt.setInt(1, id);
        stmt.setString(2, name);
        stmt.executeUpdate();
    }

    public void updateStudent(int id, String name) throws SQLException {
        PreparedStatement stmt = conn.prepareStatement("UPDATE students SET name = ? WHERE id = ?");
        stmt.setString(1, name);
        stmt.setInt(2, id);
        stmt.executeUpdate();
    }

    public static void main(String[] args) throws SQLException {
        StudentDAO dao = new StudentDAO();
        dao.insertStudent(1, "John");
        dao.updateStudent(1, "John Doe");
    }
}

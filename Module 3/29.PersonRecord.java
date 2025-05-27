import java.util.*;
import java.util.stream.Collectors;

record Person(String name, int age) {}

public class PersonRecord {
    public static void main(String[] args) {
        List<Person> people = List.of(new Person("Alice", 30), new Person("Bob", 20), new Person("Charlie", 25));
        people.stream().filter(p -> p.age() > 21).forEach(System.out::println);
    }
}
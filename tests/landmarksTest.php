
<?php
include 'landmarks.php';

class landmarksTest extends \PHPUnit\Framework\TestCase{
    private $host = '127.0.0.1';
    private $dbname = 'mySQL';
    private $username = 'root';
    private $password = 'password';
    
    public function testConnectToDB()
    {
        $pdo = connectToDB($this->host, $this->dbname, $this->username, $this->password);
        $this->assertInstanceOf(PDO::class, $pdo);
    }
}
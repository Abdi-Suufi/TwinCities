
<?php
include 'landmarks.php';

class landmarksTest extends \PHPUnit\Framework\TestCase
{
    private $host = '127.0.0.1';
    private $dbname = 'mySQL';
    private $username = 'root';
    private $password = 'password';

    public function testValidConnection()
    {
        try {
            $pdo = new PDO("mysql:host=$this->host;dbname=$this->dbname", $this->username, $this->password);
        } catch (PDOException $e) {
            throw new PDOException($e->getMessage(), (int)$e->getCode());
        }

        $this->assertInstanceOf(PDO::class, $pdo);
    }

    public function testInvalidConnection()
    {
        $this->expectException(PDOException::class);
        $pdo = new PDO("mysql:host=$this->host;dbname=$this->dbname", $this->username, 'temp');
    }

    public function testGetLandmarkDataReturnsValidData()
    {
        $pdo = new PDO("mysql:host=$this->host;dbname=$this->dbname", $this->username, $this->password);
        $landmarkName = 'Trafford Park';
        $stmt = getLandmarkData($pdo, $landmarkName);
        $this->assertNotEmpty($stmt);
    }

    public function testGetLandmarkDataReturnsAllDataWithNoParameter()
    {
        $pdo = new PDO("mysql:host=$this->host;dbname=$this->dbname", $this->username, $this->password);
        $stmt = getLandmarkData($pdo, null);
        $rowCount = $stmt->rowCount();
        $this->assertGreaterThan(0, $rowCount);
    }

}
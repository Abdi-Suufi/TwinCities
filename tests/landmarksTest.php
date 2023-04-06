
<?php
include 'landmarks.php';

class landmarksTest extends \PHPUnit\Framework\TestCase
{
    private $host = '127.0.0.1';
    private $dbname = 'mySQL';
    private $username = 'root';
    private $password = 'password';

    public function testGetLandmarkDataReturnsValidData()
    {
        $pdo = new PDO("mysql:host=$this->host;dbname=$this->dbname", $this->username, $this->password);
        $landmarkName = 'Trafford Park';
        $stmt = getLandmarkData($pdo, $landmarkName);
        $this->assertNotEmpty($stmt);
    }

}
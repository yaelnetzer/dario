<?php 

class Database {

	private static $instance = null;
    
    private $_host,
            $_dbname,
            $_user,
            $_password,
            $_con,
            $_result;
    
    private function __construct($host, $user, $password, $dbname) {
        //  Set DB Access Credentials
        $this->_host = $host; 
        $this->_user = $user; 
        $this->_password = $password; 
        $this->_dbname = $dbname; 
        
        //  Connect to DB
        $this->connect();
    }

	public static function getInstance()
	{
		if (self::$instance == null)
			self::$instance = new Database(DB_HOST, DB_USER, DB_PASS, DB_NAME);

		return self::$instance;
	}
    
    private function connect() {
        if(!$this->_con) {
            $this->_con = mysqli_connect($this->_host, $this->_user, $this->_password, $this->_dbname);
            
            if(!$this->_con) {
                throw new exception('Could not connect to DB!');
            }
        }
    }
    
    public function query($sql = null) {
        if(!is_null($sql)) {
            if($this->_result = mysqli_query($this->_con, $sql)) {
                return true;
            } else {
                throw new exception('Could not run query: ' . mysqli_error($this->_con) );
            }
        }
    }
    
    public function fetch() {
        if($this->_result) {
            return mysqli_fetch_assoc($this->_result);
        }
    }

	public function setDB($db){
	$this->mysqli->select_db($db);
}
}
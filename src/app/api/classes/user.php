<?php 

class User {
    private $_db,
            $_id,
            $_name,
            $_aList;
        
    public function __construct($name = '' , $lastName = '') {
        $this->_name = $name.' '.$lastName;
        
        $this->_db = Database::getInstance();
        
        $this->_setUser();
    }
    
    public function __set( $prop, $value ) {
        if(property_exists($this, $prop))
            $this->$prop = $value;
        else 
            throw new exception("Property $prop not exists ");
    }
    
    public function __get( $prop ) {
            return $this->$prop;
    }

    private function _getUser() {
        $sql = "SELECT * FROM users WHERE name='$this->_name';";
            $this->_db->query($sql);
            
            if($row = $this->_db->fetch()) {                
                //set user params
                foreach($row as $key=>$value)
                    $this->$key = $value;

	          $this->_getUserList();
            }
            else{
                throw new exception("User $this->_name  does not exists ");
            }
    }

	private function _getUserList() {
		$sql = "SELECT list_items.dsca
				FROM users_list
				LEFT JOIN list_items ON users_list.list_id=list_items.id
				WHERE users_list.user_id='$this->_id';";
		$this->_db->query($sql);

		while($row = $this->_db->fetch()) {
			$this->_aList[]=$row['dsca'];
		}
	}
}
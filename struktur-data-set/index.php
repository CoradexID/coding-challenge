<?php

class DataSet {

  public $size = 0;
  public $data = [];

  public function add(string $value) {
    if (!$this->contains($value)) {
      $this->data[$this->size] = $value;
      $this->size++;
      return true;
    }
    return false;
  }

  public function contains(string $value) {
    foreach ($this->data as $data) {
      if ($data == $value) {
        return true;
      }
    }
    return false;
  }

  public function size() {
    return $this->size;
  }

  private function indexOf($value) {
    for ($i = 0; $i <= $this->size; $i++) {
      if ($this->data[$i] == $value) {
        return $i;
      }
    }
    return -1;
  }

  public function remove(string $value) {
    return true;
  }

  public function getData() {
    return $this->data;
  }

}

$data = new DataSet();
$data->add('kontol');
$data->add('memek');
$data->add('kontol');
foreach ($data->getData() as $item) {
  echo $item.PHP_EOL;
}
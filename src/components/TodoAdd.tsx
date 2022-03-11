import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { useProxy, useSnapshot} from "valtio";
import { todoStore} "../store";

function TodoAdd() {
  const snapShot = useProxy(todo);

  

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input placeholder="New todo"  value={snapShot.newTodo} onChange={(ev) => {todoStore.newTodo.text = e.target.value}}/>
      <Button onClick={() => todoStore.addTodo()>Add Todo</Button>
    </Grid>
  );
}

export default TodoAdd;

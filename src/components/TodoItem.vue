<template>
  <v-list-item class="px-0">
    <template #default>
      <v-list-item-content>
        <v-list-item-title v-text="todo.title" />
        <v-list-item-subtitle v-text="todo.description" />
        <v-dialog v-model="updateDateDialog" max-width="290">
          <template v-slot:activator="{ on, attrs }">
            <v-list-item-subtitle v-bind="attrs" v-on="on">
              <v-btn
                text
                v-text="todo.dueDate.toISOString().substr(0, 10)"
                class="pa-0"
              />
            </v-list-item-subtitle>
          </template>
          <v-card>
            <v-date-picker v-model="updateDate" />
          </v-card>
        </v-dialog>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn icon color="error" @click="deleteTodo">
          <v-icon>mdi-delete-outline</v-icon>
        </v-btn>
      </v-list-item-action>
      <v-list-item-action>
        <v-btn
          icon
          @mouseover="hover = true"
          @mouseleave="hover = false"
          @click="toggleCompletion"
        >
          <v-icon>{{ getIcon }}</v-icon>
        </v-btn>
      </v-list-item-action>
    </template>
    {{ todo.title }}
  </v-list-item>
</template>

<script lang="ts">
import { Todo } from "@/state/todos";
import { Component, Prop, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";

// Extract the nav store
const todoStore = namespace("todos");

@Component
export default class SampleComponent extends Vue {
  // Props
  @Prop() todo: Todo;

  @todoStore.Action("updateTodo") updateTodo;
  @todoStore.Action("removeTodo") removeTodo;

  hover = false;

  updateDateDialog = false;

  get updateDate() {
    return new Date(this.todo.dueDate).toISOString().substr(0, 10);
  }
  set updateDate(value) {
    this.updateDueDate(value);

    this.updateDateDialog = false;
  }

  get getIcon(): string {
    if (this.todo.completed) {
      return this.hover
        ? "mdi-checkbox-blank-circle"
        : "mdi-checkbox-marked-circle-outline";
    } else {
      return this.hover
        ? "mdi-checkbox-marked-circle"
        : "mdi-checkbox-blank-circle-outline";
    }
  }

  toggleCompletion() {
    // Make a copy of the object
    const newTodo: Todo = JSON.parse(JSON.stringify(this.todo));
    // Fix date parsing
    newTodo.dueDate = new Date(newTodo.dueDate);
    // Mark as completed
    newTodo.completed = !newTodo.completed;
    // Update the todo
    this.updateTodo(newTodo);
  }
  updateDueDate(updatedDate) {
    // Make a copy of the object
    const newTodo: Todo = JSON.parse(JSON.stringify(this.todo));
    // Fix date parsing
    newTodo.dueDate = new Date(updatedDate);
    // Update the todo
    this.updateTodo(newTodo);
  }
  deleteTodo() {
    setTimeout(() => {
      this.removeTodo(this.todo.id);
    }, 300);
  }
}
</script>

<style></style>

import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
    selector: 'shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEditComponent {
    @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef;
    @Output() ingredientAdded = new EventEmitter<Ingredient>();

    onAddItem(){
        const ingName = this.nameInputRef.nativeElement.value;
        const ingAmount = this.amountInputRef.nativeElement.value;
        const newIngedient = new Ingredient(ingName, ingAmount)
        this.ingredientAdded.emit(newIngedient);
    }
}
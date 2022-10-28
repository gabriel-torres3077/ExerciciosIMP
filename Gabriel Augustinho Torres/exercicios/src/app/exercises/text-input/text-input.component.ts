import {COMMA, ENTER, T} from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { DomSanitizer } from '@angular/platform-browser';
import { ValueFromArray } from 'rxjs';
import { saveAs } from 'file-saver';

export interface NumList{
  number: number;
}

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  form = this.fb.group({
    numberTextArea: [''],
    numbers: this.fb.array([], Validators.required)
  })

  constructor(
    private fb: FormBuilder,
    private sanitizer: DomSanitizer
  ) { }
  
  numbers :any[] = [];
  fileURL: any;
  

  ngOnInit(): void {
  }

  onSubmit(){
    let formObj = this.formNumbers.getRawValue();
    let serializedForm = JSON.stringify(formObj);
    console.log(serializedForm)
    const blob = new Blob([serializedForm], { type: 'text/plain' });
    saveAs(blob, 'numeros.txt');
  }

  get formNumbers(){
    return this.form.controls["numbers"] as FormArray;
  }
  get numbersArray(){
    return this.formNumbers.value
  }

  add(event: MatChipInputEvent): void {
    if(this.form.get("numberTextArea")?.value == null)
      return
    //add and reset number field
    const control = <FormArray>this.form.get("numbers");
    control.push(this.fb.control(this.form.get("numberTextArea")?.value));
    this.form.get("numberTextArea")?.reset();
    
    //sort values
    let array = this.formNumbers.value
    array.sort((a:number, b:number) => a - b);
    this.formNumbers.patchValue(array);

  }

  remove(number: number): void {
    let control = <FormArray>this.form.controls.numbers;
    control.removeAt(number);
  }
}
function writeFileSync(arg0: any, data: any, arg2: { flag: string; }) {
  throw new Error('Function not implemented.');
}

function join(__dirname: string, filename: string): any {
  throw new Error('Function not implemented.');
}

function readFileSync(arg0: any, arg1: string) {
  throw new Error('Function not implemented.');
}


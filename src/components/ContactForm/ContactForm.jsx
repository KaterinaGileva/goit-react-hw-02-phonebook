import React from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { Formik, Field, Form } from "formik";
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().max(7).required(),
  
 });

 const initialValues = {
name: '',
number: '',

 }
  
//export class ContactForm extends Component {
   //state = {
     //   number: '',
     //   name: '',
     // };
export const ContactForm = () => {

    nameInputId = nanoid();
    numberInputId = nanoid();

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value, });
     };

    const handleSubmit = (values, { resetForm }) => {
        //event.preventDefault();
        //console.log('state', this.state);
        
        this.props.onSubmit({name: this.state.name, number: this.state.number})
        this.setState({ name: '', number: '' });
        resetForm();
      


        return (
          <Formik initialValues={initialValues}  
                  validationSchema={schema} 
                  onSubmit={handleSubmit}>
           <Form className={css.form}>
             
               <label className={css.name} htmlFor={this.nameInputId}>
                 Name
                 <Field
                   type="text"
                   name='name'
                   value={this.state.name}
                   className={css.input}
                   
                   id={this.nameInputId}       
                   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                   required
                 /> 
               </label> 
               <label className={css.number} htmlFor={this.numberInputId}>
                  Number 
                 <Field
                   type="tel"
                   name='number'
                   value={this.state.number}
                   className={css.input}
                   
                   id={this.numberInputId}
                   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                   required
               />
               </label>
            <button type="submit" className={css.formBtn}>Add contact</button>
       </Form>
       </Formik> 
           );
         }
    }

  //  <form className={css.form}
   // onSubmit={this.handleSubmit}>
  //    <label className={css.name} htmlFor={this.nameInputId}>
  //      Name
     //   <input
      //    type="text"
       //   name='name'
       //   value={this.state.name}
        //  className={css.input}
        //  onChange={this.handleChange}
         // id={this.nameInputId}       
         // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
         // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
         // required
        //> 
      //</label> 
     // <label className={css.number} htmlFor={this.numberInputId}>
     //    Number 
     //   <input
     //     type="tel"
      //    name='number'
      //    value={this.state.number}
      //    className={css.input}
      //    onChange={this.handleChange}
     //     id={this.numberInputId}
     //     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
     //     title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
     //     required
    //  />
     // </label>
   //<button type="submit" className={css.formBtn}>Add contact</button>
//</form>
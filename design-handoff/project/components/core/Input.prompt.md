Labelled text field — white field on cream, hairline border, green focus ring. Use for forms (membership, project enquiry).

```jsx
<Input label="E-Mail" type="email" required placeholder="name@beispiel.de" />
<Input label="Nachricht" as="textarea" hint="Erzähl uns von deinem Dach." />
<Input label="PLZ" error="Pflichtfeld" />
```

Set `as="textarea"` for multiline. `error` turns the field red and shows the message.

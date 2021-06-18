import React from 'react';
import styles from "./FilterContacts.module.css";

const FilterContacts = ({ value, onChange }) => (
    <label className={styles.filterName}>
        Filter by name
        <input type="text" value={value} onChange={onChange} className={styles.input} />
    </label>
)

export default FilterContacts


<p align="center">
    <a href="https://github.com/DenverCoder1/readme-typing-svg">
        <img src="https://readme-typing-svg.herokuapp.com?color=00FF00&width=600&height=60&lines=Coming+Soon...;Exciting+Things+Ahead...;Stay+Tuned!&center=true&size=30">
    </a>
</p>

### **Pharmaceutical Drug Design Simulator**

The **Pharmaceutical Drug Design Simulator** is a sophisticated web-based platform aimed at students, researchers, and faculty in the field of pharmaceutical sciences. The application provides tools for visualizing molecular structures, simulating drug interactions, and supporting educational content.

---

### **Tech Stack**
- **Frontend**: React, Redux, TailwindCSS
- **Backend**: Node.js, Express
- **Database**: MongoDB

---

### **Key Features**

#### **For Students**
1. **Molecular Visualization**:  
   Students can input molecular structures using SMILES notation or upload PDB files to visualize 3D molecular models in real-time.

2. **Drug-Protein Interaction Simulation**:  
   Simulate and analyze the interactions between pharmaceutical compounds and target proteins, enhancing students' understanding of drug efficacy and binding affinity.

3. **Educational Content**:  
   Access course materials, research papers, and other learning resources directly through the platform.

4. **Timetable Management**:  
   View personalized timetables for upcoming simulations and coursework, ensuring students stay on top of their learning schedules.

5. **Performance Tracking**:  
   Track progress in simulation tasks and assignments, providing students with valuable feedback on their understanding of drug design principles.

6. **Password Management**:  
   Students can securely update their passwords for the platform.

---

#### **For Faculty**
1. **Simulation Configuration**:  
   Faculty members can create, configure, and manage complex drug simulations for students, adjusting parameters and drug molecules.

2. **Student Monitoring**:  
   Monitor the progress of individual students, review their simulation results, and provide feedback on their performance.

3. **Material Upload**:  
   Faculty can upload educational content, including drug design tutorials, case studies, and research articles, for students to access.

4. **Noticeboard Management**:  
   Faculty members can add, modify, or remove notices and announcements to keep students informed about upcoming tests, simulations, and other activities.

5. **Data Recording**:  
   Faculty can record and analyze results from internal drug design experiments and provide personalized feedback to students.

---

#### **For Admin**
1. **Account Management**:  
   Admins have the ability to create, modify, and delete user accounts (students, faculty, and other admins). They can assign roles and permissions to manage access.

2. **Simulation Settings**:  
   Admins can configure the system-wide settings for molecular simulations, including updating simulation templates and data models.

3. **Data Integrity and Security**:  
   Ensure the integrity and security of the database by implementing regular backups and access control mechanisms.

4. **System Maintenance**:  
   Admins can manage the server and database maintenance tasks, such as data cleanup and server optimizations, ensuring that the platform runs smoothly.

5. **Notice and Alert Management**:  
   Admins can create system-wide notices or alerts, ensuring all users are informed about important updates, changes, or maintenance schedules.

---

### **Setup Instructions**

1. **Clone the repository**:

    ```bash
    git clone https://github.com/ujjvalap/Pharmaceutical-Drug-Design-Simulator.git
    ```

2. **Install dependencies**:

    - For **Backend**:
        ```bash
        cd backend
        npm install
        ```

    - For **Frontend**:
        ```bash
        cd ../frontend
        npm install
        ```

3. **Set up environment variables**:
    - Copy the `.env.sample` file in both the `frontend` and `backend` directories to `.env` and configure the necessary environment variables (such as API keys, database credentials, etc.).

4. **Run the admin seeder**:
    - To seed initial admin data, run the following command in the backend directory:
        ```bash
        cd backend
        npm run seed
        ```
    - Default admin credentials:
        - **Login ID**: `admin123`
        - **Password**: `adminpassword`

5. **Run the backend server**:
    ```bash
    cd backend
    npm start
    ```

6. **Run the frontend server**:
    ```bash
    cd ../frontend
    npm start
    ```

---

### **For Any Support**
For any technical queries or support, feel free to contact me at:

- **LinkedIn**: [Your LinkedIn Profile](#)
- **Email**: ujjvalpateliya@gmail.com

---



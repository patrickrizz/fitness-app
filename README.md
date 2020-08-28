Ground Zero Fitness

Order from start to finish:

1. Sign-up
    - First Name, Last Name, Email, Password
    - Agree to terms of service, Privacy Policy and Cookie Use statements 

2. Account Set-up
    - Experience level
        - Neophyte (Never even thought about fitness until now) - Congrats, your on the Best Path to a confident life
        - Apprentice (Some Experience, Fitness is a hobby right now) - Congrats, You've already completed the first step which is commiting to a fit lifestyle
        - Adept (Proficient, gaining knowledge) - Congrats, fitness is one of the greatest assets that brings on a successful future 
        - Expert (Fitness is a lifestlyle)
        - Master (Proffessional, Athlete)

    - Stats / goals
        - Weight, Body fat - Connect fitness apps, fitbit, apple fitness, smart scales ect.
        - Goal 1 - Weightloss, Gain Muscle, Lean out
        - Goal 2 - Endurance, Strength, Speed, Flexability
        - Goal 3 - Confidence, Mentality, Discipline, Motivation
        - Add body weight, fat%
        - Do you have measurments? 
            - if so show measument inputs

    - If xp level is adept + (Optional)
        - Select Strategy 
        - Diet Strategy (Coming Soon)
        - Excersize Preferences (Doesn't always mean you won't do the excersice but you might see less of it. Also can conflict with strategies. Strategies take precedence)
        - Injuries, Aches, Pains areas and level of pain (Will change specific excersices such as weight and rep range to be more thearapy like.)
            - disclaimer, we arn't pros this is a suggestion that by agreeig to policy at signup you agree we will not be held liable for injuries sustained during our suggested workout plans
        
    - Redirect to Dashboard page

2a. Log-in 
    - email, password
    - redirect to dashboard

3. Behind the scence logic
    - input expereince level, stats/goals, xp level
    - pull input data from db and do some logic that creates custome workouts
        - Pull strategy
        - function createFst7
            switch xpLevel 
                case 1
                - fst 7 (apprentice) 4 on 3 off
                    - 1 compund 3 sets 8-12
                    - 1 isolation 3sets 8-12
                    - 2 supplemental 7 sets 8-12 
                case 2
                - fst 7 (adept) 5 on 2 off
                    - 1 compund 3 sets 8-12
                    - 2 isolation 3 sets 8-12
                    - 2 supplemental 7 sets 8-12 
                case 3
                - fst 7 (expert) 6 on 1 off
                    - 2 compund
                    - 2 isolation
                    - 2 supplemental 7 sets 8-12 
                case 4
                - fst 7 (master) 5 on two a days
                    - cardio in morning
                    - 2 compound
                    - 3 isolation
                    - 2 supplemental 7 sets 8-12 
                default
                - fst 7 (neophyte) 3 on 4 off 
                    - 1 compund 3 sets 8-12
                    - 1 isolation 3 sets 8-12
                    - 1 supplemental 7 sets 8-12 
        - function createGermanVolume
            switch xplevel
                case 1
                - German Volume (apprentice)
                    - 1 compund
                    - 1 isolation
                    - 2 supplemental 
                case 2
                - German Volume (adept)
                    - 1 compund
                    - 2 isolation
                    - 1 supplemental 7 sets 8-12 
                case 3
                - German Volume (expert)
                    - 2 compund
                    - 2 isolation
                    - 2 supplemental 7 sets 8-12
                default 
                - German Volume (master) 
                    - 2 compound
                    - 3 isolation
                    - 2 supplemental 7 sets 8-12 reps
            Select workout difficulty, if to hard or to easy, adapt a new workout plan for that specific muscle group (the idea is that each person has their own strengths and weaknesses. My arms and chest are dominent, others might not be the same.)



4. Dashboard Layout
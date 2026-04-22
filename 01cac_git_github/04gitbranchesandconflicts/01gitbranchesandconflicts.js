/*  
    *** Branches in Git ***
        Branches are a way to work on different versions of a project at the same time. 
        They allow you to create a separate line of development that can be worked on independently 
        of the main branch. This can be useful when you want to make changes to a project without 
        affecting the main branch or when you want to work on a new feature or bug fix.

            Refer -> branches.png

        Some developers can work on Header, some can work on Footer, some can work on Content, 
        and some can work on Layout. This is a good example of how branches can be used in git.

    *** HEAD in git ***
        The HEAD is a pointer to the current branch that you are working on. 
        It points to the latest commit in the current branch. When you create a new branch, 
        it is automatically set as the HEAD of that branch.

            The default branch used to be master, but it is now called main. 
            There is nothing special about main, it is just a convention.

    *** Creating a new branch ***
        To create a new branch, you can use the following command:

            git branch
            git branch bug-fix
            git switch bug-fix
            git log
            git switch main
            git switch -c dark-mode
            git checkout orange-mode

        Some points to note:

            git branch - This command lists all the branches in the current repository.
            git branch bug-fix - This command creates a new branch called bug-fix.
            git switch bug-fix - This command switches to the bug-fix branch.
            git log - This command shows the commit history for the current branch.
            git switch main - This command switches to the main branch.
            git switch -c dark-mode - This command creates a new branch called dark-mode. the -c flag is used to create a new branch.
            git checkout orange-mode - This command switches to the orange-mode branch.

        Commit before switching to a branch
        Go to .git folder and checkout to the HEAD file
*/
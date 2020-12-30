:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biobb_structure_checking'
.. highlight: bash

biobb_structure_checking
========================

.. conda:recipe:: biobb_structure_checking
   :replaces_section_title:
   :noindex:

   BioBB\_structure\_checking performs MDWeb structure checking set as a command line utility.

   :homepage: https://github.com/bioexcel/biobb_analysis
   :license: APACHE / Apache Software License
   :recipe: /`biobb_structure_checking <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_structure_checking>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biobb_structure_checking/meta.yaml>`_

   \[\!\[Codacy Badge\]\(https\:\/\/api.codacy.com\/project\/badge\/Grade\/376891e43cab4cc591fb78ea43dfd380\)\]\(https\:\/\/www.codacy.com\/app\/jlgelpi\/structureChecking\?utm\_source\=mmb.irbbarcelona.org\&amp\;utm\_medium\=referral\&amp\;utm\_content\=gitlab\/BioExcel\/structureChecking\&amp\;utm\_campaign\=Badge\_Grade\)
   \# Structure Checking from MDWeb

   check\_structure performs MDWeb structure checking set as a command line
   utility.

   It includes some structure manipulation options like selecting models or chains\,
   removing components of the system\, completing missing atoms\, and some quality
   checking as residue quirality\, amide orientation\, or vdw clashes.

   \`\`\`
   usage\: checkStruc.py \[\-h\] \[\-i INPUT\_STRUCTURE\_PATH\] \[\-o OUTPUT\_STRUCTURE\_PATH\]
                        \[\-\-version\] \[\-\-data\_dir DATA\_DIR\]
                        \[\-\-res\_lib RES\_LIB\_PATH\] \[\-\-data\_lib DATA\_LIBRARY\_PATH\]
                        \[\-\-json JSON\_OUTPUT\_PATH\] \[\-\-quiet\] \[\-\-check\_only\]
                        \[\-\-non\_interactive\] \[\-\-force\_save\]
                        \[\-\-pdb\_server PDB\_SERVER\]
                        command ...
   positional arguments\:
     command               Command to execute \(help\: checkStruc commands\)
     options               Specific command options

   optional arguments\:
     \-h\, \-\-help            show this help message and exit
     \-i INPUT\_STRUCTURE\_PATH\, \-\-input INPUT\_STRUCTURE\_PATH
                           Input structure. Formats PDB\|mmCIF. Remote pdb\:\{pdbid\}
     \-o OUTPUT\_STRUCTURE\_PATH\, \-\-output OUTPUT\_STRUCTURE\_PATH
                           Output structure. Format PDB
     \-\-version             show program\'s version number and exit
     \-\-data\_dir DATA\_DIR   Override settings default data dir
     \-\-res\_lib RES\_LIB\_PATH
                           Override settings default residue library \(AMBER prep
                           format\)
     \-\-data\_lib DATA\_LIBRARY\_PATH
                           Override settings default data library
     \-\-json JSON\_OUTPUT\_PATH
                           Cummulated checking results on a json file
     \-\-quiet               Reduces output\, removing labels and progress info
     \-\-check\_only          Perform checks\, structure is not modified
     \-\-non\_interactive     Do not prompt for missing parameters
     \-\-force\_save          Force saving an output file even if no modification
     \-\-pdb\_server PDB\_SERVER
                           Server for retrieving structures \(default\: RCSB\|mmb\)
     \-\-load                Loads structure from PDB server into the local cache
     \-\-stats               Loads structure and get basic statistics and headers

   Available commands\:

   \`\`\`

   \#\# Available commands\:

   \`\`\`
   commands\:  This help
   command\_list\:      Run all tests from conf file
   checkall\:   Perform all checks without fixes
   load\: Stores structure on local cache and provide basic statistics

   1. System Configuration
   \=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=\=
   models \[\-\-select\_model model\_num\]     
       Detect\/Select Models
   chains \[\-\-select\_chains chain\_ids\]    
       Detect\/Select Chains
   inscodes
       Detects residues with insertion codes \(no fix\)
   altloc \[\-\-select\_altloc occupancy\| alt\_id \| list of res\_id\:alt\_id\]
       Detect\/Select Alternative Locations
   metals \[\-\-remove All \| None \| Met\_ids\_list \| Residue\_list\]   
       Detect\/Remove Metals
   ligands \[\-\-remove All \| None \| Res\_type\_list \| Residue\_list\]
       Detect\/Remove Ligands
   remwat \[\-\-remove Yes\|No\]
       Remove Water molecules
   remh \[remh \-\-remove Yes\|No\]
       Remove Hydrogen atoms from structure
   mutateside \[\-\-mut mutation\_list\]
       Mutate side chain with minimal atom replacement. Allows multiple mutations
   addH \[\-\-mode auto \| pH \| interactive \| interactive\_his\]
       Add Hydrogen Atoms

   2. Fix Structure Errors

   amide  \[\-\-fix All\|None\|Residue List\]    
       Detect\/Fix Amide atoms Assignment
   chiral \[\-\-fix All\|None\|Residue List\]
       Detect\/Fix Improper quirality
   fixside \[\-\-fix All \|None\|Residue List\]    
       Complete side chains
   backbone \[\-\-fix All\|None\|Residue List\]   
       Analyze main chain missing atoms and fragments. O\, OXT atoms can be fixed

   3. Structure Warnings

   cistransbck Analyzes cis\-trans dihedrals on backbone atoms
   getss      Detect SS Bonds
   clashes    Steric clashes \(Severe\, Apolar\, Polar Donors\, Polar Acceptors\,
              Ionic Positive\, Ionic Negative\)

   \`\`\`
   \#\#\# Dependencies
   \* python 3.x
   \* biopython
   \* numpy
   \* biobb\_model \(structure\_manager\)





.. conda:package:: biobb_structure_checking

   |downloads_biobb_structure_checking| |docker_biobb_structure_checking|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.7.2-0</code>,  <code>3.7.1-0</code>,  <code>3.5.3-0</code>,  <code>3.5.0-0</code>,  <code>3.0.2-0</code>,  <code>3.0.1-0</code>,  <code>3.0.0-0</code>,  <code>1.0.7-0</code>,  <code>1.0.6-0</code>,  </span></summary>
      

      ``3.7.2-0``,  ``3.7.1-0``,  ``3.5.3-0``,  ``3.5.0-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends psutil: 
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biobb_structure_checking

   and update with::

      conda update biobb_structure_checking

   or use the docker container::

      docker pull quay.io/biocontainers/biobb_structure_checking:<tag>

   (see `biobb_structure_checking/tags`_ for valid values for ``<tag>``)


.. |downloads_biobb_structure_checking| image:: https://img.shields.io/conda/dn/bioconda/biobb_structure_checking.svg?style=flat
   :target: https://anaconda.org/bioconda/biobb_structure_checking
   :alt:   (downloads)
.. |docker_biobb_structure_checking| image:: https://quay.io/repository/biocontainers/biobb_structure_checking/status
   :target: https://quay.io/repository/biocontainers/biobb_structure_checking
.. _`biobb_structure_checking/tags`: https://quay.io/repository/biocontainers/biobb_structure_checking?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biobb_structure_checking/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biobb_structure_checking/README.html
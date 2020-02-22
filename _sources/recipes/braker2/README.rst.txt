:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'braker2'
.. highlight: bash

braker2
=======

.. conda:recipe:: braker2
   :replaces_section_title:

   BRAKER2 is an extension of BRAKER1

   :homepage: https://github.com/Gaius-Augustus/BRAKER
   :license: Other / Artistic License
   :recipe: /`braker2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/braker2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/braker2/meta.yaml>`_
   :links: doi: :doi:`10.13140/RG.2.2.12857.62564`

   BRAKER2 is an extension of BRAKER1 which allows for fully automated training of the gene prediction tools GeneMark\-EX and AUGUSTUS from RNA\-Seq and\/or protein homology information\, and that integrates the extrinsic evidence from RNA\-Seq and protein homology information into the prediction.


.. conda:package:: braker2

   |downloads_braker2| |docker_braker2|

   :versions: 2.1.5-0, 2.1.4-1, 2.1.4-0, 2.1.2-2, 2.1.2-1, 2.1.2-0
   
   :depends augustus: >=3.3.3
   :depends bamtools: >=2.5.1
   :depends biopython: 
   :depends blast: >=2.2.31
   :depends cdbtools: >=0.99
   :depends diamond: >=0.9.24
   :depends exonerate: >=2.2.0
   :depends genomethreader: >=1.7.0
   :depends makehub: 
   :depends perl: 
   :depends perl-app-cpanminus: 
   :depends perl-class-data-inheritable: 
   :depends perl-exception-class: 
   :depends perl-file-homedir: 
   :depends perl-file-spec: 
   :depends perl-file-which: 
   :depends perl-hash-merge: 
   :depends perl-list-util: 
   :depends perl-logger-simple: 
   :depends perl-mce: 
   :depends perl-module-load-conditional: 
   :depends perl-parallel-forkmanager: 
   :depends perl-posix: 
   :depends perl-scalar-util-numeric: 
   :depends perl-test-pod: 
   :depends perl-yaml: 
   :depends python: >=3.3
   :depends samtools: >=1.7
   :depends spaln: >=2.3.3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install braker2

   and update with::

      conda update braker2

   or use the docker container::

      docker pull quay.io/biocontainers/braker2:<tag>

   (see `braker2/tags`_ for valid values for ``<tag>``)


.. |downloads_braker2| image:: https://img.shields.io/conda/dn/bioconda/braker2.svg?style=flat
   :target: https://anaconda.org/bioconda/braker2
   :alt:   (downloads)
.. |docker_braker2| image:: https://quay.io/repository/biocontainers/braker2/status
   :target: https://quay.io/repository/biocontainers/braker2
.. _`braker2/tags`: https://quay.io/repository/biocontainers/braker2?tab=tags






Notes
-----
- GeneMark software can be used for free\, but requires a license file and should be additionally installed on the machine where the BRAKER2 environment is.

- ProtHint software can be used for free\, but doesn\'t allow redistribution and should be additionally installed on the machine where the BRAKER2 environment is.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/braker2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/braker2/README.html
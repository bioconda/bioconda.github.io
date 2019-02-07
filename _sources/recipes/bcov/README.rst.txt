.. title:: Package Recipe 'bcov'
.. highlight: bash


bcov
====

.. conda:recipe:: bcov
   :replaces_section_title:

   BCov is a software package designed for predicting protein beta\-sheet topology from amino acid sequence.

   :homepage: http://biocomp.unibo.it/savojard/bcov/index.html
   :license: file
   :recipe: /`bcov <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcov>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcov/meta.yaml>`_
   :links: biotools: :biotools:`bcov`, doi: :doi:`10.1093/bioinformatics/btt555`

   


.. conda:package:: bcov

   |downloads_bcov| |docker_bcov|

   :versions: 1.0

   :depends: :conda:package:`glpk`  :conda:package:`libgcc`  

   :required~by: |required_by_bcov|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bcov

   and update with::

      conda update bcov

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bcov


.. |required_by_bcov| conda:required_by:: bcov
.. |downloads_bcov| image:: https://img.shields.io/conda/dn/bioconda/bcov.svg?style=flat
   :alt:   (downloads)
.. |docker_bcov| image:: https://quay.io/repository/biocontainers/bcov/status
   :target: https://quay.io/repository/biocontainers/bcov







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcov/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcov/README.html


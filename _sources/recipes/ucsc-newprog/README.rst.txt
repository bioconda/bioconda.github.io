.. title:: Package Recipe 'ucsc-newprog'
.. highlight: bash


ucsc-newprog
============

.. conda:recipe:: ucsc-newprog
   :replaces_section_title:

   make a new C source skeleton.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-newprog <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-newprog>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-newprog/meta.yaml>`_

   


.. conda:package:: ucsc-newprog

   |downloads_ucsc-newprog| |docker_ucsc-newprog|

   :versions: 366, 357

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-newprog|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-newprog

   and update with::

      conda update ucsc-newprog

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-newprog


.. |required_by_ucsc-newprog| conda:required_by:: ucsc-newprog
.. |downloads_ucsc-newprog| image:: https://img.shields.io/conda/dn/bioconda/ucsc-newprog.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-newprog| image:: https://quay.io/repository/biocontainers/ucsc-newprog/status
   :target: https://quay.io/repository/biocontainers/ucsc-newprog







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-newprog/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-newprog/README.html


.. title:: Package Recipe 'ucsc-faalign'
.. highlight: bash


ucsc-faalign
============

.. conda:recipe:: ucsc-faalign
   :replaces_section_title:

   Align two fasta files

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-faalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-faalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-faalign/meta.yaml>`_

   


.. conda:package:: ucsc-faalign

   |downloads_ucsc-faalign| |docker_ucsc-faalign|

   :versions: 366, 357, 332

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-faalign|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-faalign

   and update with::

      conda update ucsc-faalign

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-faalign


.. |required_by_ucsc-faalign| conda:required_by:: ucsc-faalign
.. |downloads_ucsc-faalign| image:: https://img.shields.io/conda/dn/bioconda/ucsc-faalign.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-faalign| image:: https://quay.io/repository/biocontainers/ucsc-faalign/status
   :target: https://quay.io/repository/biocontainers/ucsc-faalign







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-faalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-faalign/README.html


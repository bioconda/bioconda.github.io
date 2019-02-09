.. title:: Package Recipe 'ucsc-ldhggene'
.. highlight: bash


ucsc-ldhggene
=============

.. conda:recipe:: ucsc-ldhggene
   :replaces_section_title:

   load database with gene predictions from a gff file.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-ldhggene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-ldhggene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-ldhggene/meta.yaml>`_

   


.. conda:package:: ucsc-ldhggene

   |downloads_ucsc-ldhggene| |docker_ucsc-ldhggene|

   :versions: 366, 357

   :depends: :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ucsc-ldhggene|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-ldhggene

   and update with::

      conda update ucsc-ldhggene

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-ldhggene


.. |required_by_ucsc-ldhggene| conda:required_by:: ucsc-ldhggene
.. |downloads_ucsc-ldhggene| image:: https://img.shields.io/conda/dn/bioconda/ucsc-ldhggene.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-ldhggene| image:: https://quay.io/repository/biocontainers/ucsc-ldhggene/status
   :target: https://quay.io/repository/biocontainers/ucsc-ldhggene







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-ldhggene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-ldhggene/README.html


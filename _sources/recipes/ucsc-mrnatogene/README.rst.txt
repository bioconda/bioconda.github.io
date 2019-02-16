:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-mrnatogene'
.. highlight: bash

ucsc-mrnatogene
===============

.. conda:recipe:: ucsc-mrnatogene
   :replaces_section_title:

   convert PSL alignments of mRNAs to gene annotations

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-mrnatogene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-mrnatogene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-mrnatogene/meta.yaml>`_

   


.. conda:package:: ucsc-mrnatogene

   |downloads_ucsc-mrnatogene| |docker_ucsc-mrnatogene|

   :versions: 366-0, 357-2, 357-1, 357-0
   
   :depends libgcc-ng: >=4.9
   
   :depends libpng: >=1.6.34,<1.7.0a0
   
   :depends libuuid: 
   
   :depends mysql-connector-c: 
   
   :depends openssl: >=1.0.2o,<1.0.3a
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-mrnatogene

   and update with::

      conda update ucsc-mrnatogene

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-mrnatogene:<tag>

   (see `ucsc-mrnatogene/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-mrnatogene| image:: https://img.shields.io/conda/dn/bioconda/ucsc-mrnatogene.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-mrnatogene| image:: https://quay.io/repository/biocontainers/ucsc-mrnatogene/status
   :target: https://quay.io/repository/biocontainers/ucsc-mrnatogene
.. _`ucsc-mrnatogene/tags`: https://quay.io/repository/biocontainers/ucsc-mrnatogene?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-mrnatogene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-mrnatogene/README.html
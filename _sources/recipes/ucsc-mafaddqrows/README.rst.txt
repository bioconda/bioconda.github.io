:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-mafaddqrows'
.. highlight: bash

ucsc-mafaddqrows
================

.. conda:recipe:: ucsc-mafaddqrows
   :replaces_section_title:

   Add quality data to a maf

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-mafaddqrows <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-mafaddqrows>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-mafaddqrows/meta.yaml>`_

   


.. conda:package:: ucsc-mafaddqrows

   |downloads_ucsc-mafaddqrows| |docker_ucsc-mafaddqrows|

   :versions: 366-0, 357-2, 357-1, 357-0, 324-0
   
   :depends libgcc-ng: >=4.9
   
   :depends libpng: >=1.6.34,<1.7.0a0
   
   :depends libuuid: 
   
   :depends mysql-connector-c: 
   
   :depends openssl: >=1.0.2o,<1.0.3a
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-mafaddqrows

   and update with::

      conda update ucsc-mafaddqrows

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-mafaddqrows:<tag>

   (see `ucsc-mafaddqrows/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-mafaddqrows| image:: https://img.shields.io/conda/dn/bioconda/ucsc-mafaddqrows.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-mafaddqrows| image:: https://quay.io/repository/biocontainers/ucsc-mafaddqrows/status
   :target: https://quay.io/repository/biocontainers/ucsc-mafaddqrows
.. _`ucsc-mafaddqrows/tags`: https://quay.io/repository/biocontainers/ucsc-mafaddqrows?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-mafaddqrows/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-mafaddqrows/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-maffrags'
.. highlight: bash

ucsc-maffrags
=============

.. conda:recipe:: ucsc-maffrags
   :replaces_section_title:

   Collect MAFs from regions specified in a 6 column bed file

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-maffrags <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-maffrags>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-maffrags/meta.yaml>`_

   


.. conda:package:: ucsc-maffrags

   |downloads_ucsc-maffrags| |docker_ucsc-maffrags|

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

      conda install ucsc-maffrags

   and update with::

      conda update ucsc-maffrags

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-maffrags:<tag>

   (see `ucsc-maffrags/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-maffrags| image:: https://img.shields.io/conda/dn/bioconda/ucsc-maffrags.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-maffrags| image:: https://quay.io/repository/biocontainers/ucsc-maffrags/status
   :target: https://quay.io/repository/biocontainers/ucsc-maffrags
.. _`ucsc-maffrags/tags`: https://quay.io/repository/biocontainers/ucsc-maffrags?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-maffrags/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-maffrags/README.html
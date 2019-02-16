:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-maketablelist'
.. highlight: bash

ucsc-maketablelist
==================

.. conda:recipe:: ucsc-maketablelist
   :replaces_section_title:

   create\/recreate tableList tables \(cache of SHOW TABLES and DESCRIBE\)

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-maketablelist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-maketablelist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-maketablelist/meta.yaml>`_

   


.. conda:package:: ucsc-maketablelist

   |downloads_ucsc-maketablelist| |docker_ucsc-maketablelist|

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

      conda install ucsc-maketablelist

   and update with::

      conda update ucsc-maketablelist

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-maketablelist:<tag>

   (see `ucsc-maketablelist/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-maketablelist| image:: https://img.shields.io/conda/dn/bioconda/ucsc-maketablelist.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-maketablelist| image:: https://quay.io/repository/biocontainers/ucsc-maketablelist/status
   :target: https://quay.io/repository/biocontainers/ucsc-maketablelist
.. _`ucsc-maketablelist/tags`: https://quay.io/repository/biocontainers/ucsc-maketablelist?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-maketablelist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-maketablelist/README.html
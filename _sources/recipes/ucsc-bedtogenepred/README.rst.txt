:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-bedtogenepred'
.. highlight: bash

ucsc-bedtogenepred
==================

.. conda:recipe:: ucsc-bedtogenepred
   :replaces_section_title:

   convert bed format files to genePred format

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bedtogenepred <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedtogenepred>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedtogenepred/meta.yaml>`_

   


.. conda:package:: ucsc-bedtogenepred

   |downloads_ucsc-bedtogenepred| |docker_ucsc-bedtogenepred|

   :versions: 377-0, 366-1, 366-0, 357-1, 357-0, 332-0, 324-0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libpng: >=1.6.35,<1.7.0a0
   
   :depends libuuid: >=2.32.1,<3.0a0
   
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   
   :depends openssl: >=1.1.1a,<1.1.2a
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bedtogenepred

   and update with::

      conda update ucsc-bedtogenepred

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-bedtogenepred:<tag>

   (see `ucsc-bedtogenepred/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-bedtogenepred| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bedtogenepred.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bedtogenepred| image:: https://quay.io/repository/biocontainers/ucsc-bedtogenepred/status
   :target: https://quay.io/repository/biocontainers/ucsc-bedtogenepred
.. _`ucsc-bedtogenepred/tags`: https://quay.io/repository/biocontainers/ucsc-bedtogenepred?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bedtogenepred/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bedtogenepred/README.html
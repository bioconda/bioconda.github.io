:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-addcols'
.. highlight: bash

ucsc-addcols
============

.. conda:recipe:: ucsc-addcols
   :replaces_section_title:

   Sum columns in a text file.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-addcols <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-addcols>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-addcols/meta.yaml>`_

   


.. conda:package:: ucsc-addcols

   |downloads_ucsc-addcols| |docker_ucsc-addcols|

   :versions: 377-0, 366-0, 357-2, 357-1, 357-0, 332-0, 324-0
   
   :depends libpng: >=1.6.35,<1.7.0a0
   :depends libuuid: >=2.32.1,<3.0a0
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   :depends openssl: >=1.0.2p,<1.0.3a
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-addcols

   and update with::

      conda update ucsc-addcols

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-addcols:<tag>

   (see `ucsc-addcols/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-addcols| image:: https://img.shields.io/conda/dn/bioconda/ucsc-addcols.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-addcols
   :alt:   (downloads)
.. |docker_ucsc-addcols| image:: https://quay.io/repository/biocontainers/ucsc-addcols/status
   :target: https://quay.io/repository/biocontainers/ucsc-addcols
.. _`ucsc-addcols/tags`: https://quay.io/repository/biocontainers/ucsc-addcols?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-addcols/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-addcols/README.html
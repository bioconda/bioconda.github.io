:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-hgloadnet'
.. highlight: bash

ucsc-hgloadnet
==============

.. conda:recipe:: ucsc-hgloadnet
   :replaces_section_title:

   Load a generic net file into database

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-hgloadnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgloadnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgloadnet/meta.yaml>`_

   


.. conda:package:: ucsc-hgloadnet

   |downloads_ucsc-hgloadnet| |docker_ucsc-hgloadnet|

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

      conda install ucsc-hgloadnet

   and update with::

      conda update ucsc-hgloadnet

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-hgloadnet:<tag>

   (see `ucsc-hgloadnet/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-hgloadnet| image:: https://img.shields.io/conda/dn/bioconda/ucsc-hgloadnet.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-hgloadnet| image:: https://quay.io/repository/biocontainers/ucsc-hgloadnet/status
   :target: https://quay.io/repository/biocontainers/ucsc-hgloadnet
.. _`ucsc-hgloadnet/tags`: https://quay.io/repository/biocontainers/ucsc-hgloadnet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-hgloadnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-hgloadnet/README.html
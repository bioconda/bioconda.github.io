:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-pslrc'
.. highlight: bash

ucsc-pslrc
==========

.. conda:recipe:: ucsc-pslrc
   :replaces_section_title:

   reverse\-complement psl

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-pslrc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslrc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslrc/meta.yaml>`_

   


.. conda:package:: ucsc-pslrc

   |downloads_ucsc-pslrc| |docker_ucsc-pslrc|

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

      conda install ucsc-pslrc

   and update with::

      conda update ucsc-pslrc

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-pslrc:<tag>

   (see `ucsc-pslrc/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-pslrc| image:: https://img.shields.io/conda/dn/bioconda/ucsc-pslrc.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-pslrc| image:: https://quay.io/repository/biocontainers/ucsc-pslrc/status
   :target: https://quay.io/repository/biocontainers/ucsc-pslrc
.. _`ucsc-pslrc/tags`: https://quay.io/repository/biocontainers/ucsc-pslrc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-pslrc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-pslrc/README.html
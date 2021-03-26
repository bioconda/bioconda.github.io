:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-axtchain'
.. highlight: bash

ucsc-axtchain
=============

.. conda:recipe:: ucsc-axtchain
   :replaces_section_title:
   :noindex:

   Chain together axt alignments.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-axtchain <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-axtchain>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-axtchain/meta.yaml>`_

   


.. conda:package:: ucsc-axtchain

   |downloads_ucsc-axtchain| |docker_ucsc-axtchain|

   :versions:
      
      

      ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``,  ``332-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libpng: ``>=1.6.37,<1.7.0a0``
   :depends libuuid: ``>=2.32.1,<3.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends openssl: ``>=1.1.1j,<1.1.2a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-axtchain

   and update with::

      conda update ucsc-axtchain

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-axtchain:<tag>

   (see `ucsc-axtchain/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-axtchain| image:: https://img.shields.io/conda/dn/bioconda/ucsc-axtchain.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-axtchain
   :alt:   (downloads)
.. |docker_ucsc-axtchain| image:: https://quay.io/repository/biocontainers/ucsc-axtchain/status
   :target: https://quay.io/repository/biocontainers/ucsc-axtchain
.. _`ucsc-axtchain/tags`: https://quay.io/repository/biocontainers/ucsc-axtchain?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-axtchain/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-axtchain/README.html
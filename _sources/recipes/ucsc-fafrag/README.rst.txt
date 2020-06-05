:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-fafrag'
.. highlight: bash

ucsc-fafrag
===========

.. conda:recipe:: ucsc-fafrag
   :replaces_section_title:
   :noindex:

   Extract a piece of DNA from a .fa file.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-fafrag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fafrag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fafrag/meta.yaml>`_

   


.. conda:package:: ucsc-fafrag

   |downloads_ucsc-fafrag| |docker_ucsc-fafrag|

   :versions:
      
      

      ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``,  ``332-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends libpng: ``>=1.6.35,<1.7.0a0``
   :depends libuuid: ``>=2.32.1,<3.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends openssl: ``>=1.0.2p,<1.0.3a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-fafrag

   and update with::

      conda update ucsc-fafrag

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-fafrag:<tag>

   (see `ucsc-fafrag/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-fafrag| image:: https://img.shields.io/conda/dn/bioconda/ucsc-fafrag.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-fafrag
   :alt:   (downloads)
.. |docker_ucsc-fafrag| image:: https://quay.io/repository/biocontainers/ucsc-fafrag/status
   :target: https://quay.io/repository/biocontainers/ucsc-fafrag
.. _`ucsc-fafrag/tags`: https://quay.io/repository/biocontainers/ucsc-fafrag?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-fafrag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-fafrag/README.html
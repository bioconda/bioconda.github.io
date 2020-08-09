:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-chainstitchid'
.. highlight: bash

ucsc-chainstitchid
==================

.. conda:recipe:: ucsc-chainstitchid
   :replaces_section_title:
   :noindex:

   Join chain fragments with the same chain ID into a single

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-chainstitchid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chainstitchid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chainstitchid/meta.yaml>`_

   


.. conda:package:: ucsc-chainstitchid

   |downloads_ucsc-chainstitchid| |docker_ucsc-chainstitchid|

   :versions:
      
      

      ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``,  ``332-0``,  ``324-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libpng: ``>=1.6.37,<1.7.0a0``
   :depends libuuid: ``>=2.32.1,<3.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends openssl: ``>=1.1.1g,<1.1.2a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-chainstitchid

   and update with::

      conda update ucsc-chainstitchid

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-chainstitchid:<tag>

   (see `ucsc-chainstitchid/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-chainstitchid| image:: https://img.shields.io/conda/dn/bioconda/ucsc-chainstitchid.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-chainstitchid
   :alt:   (downloads)
.. |docker_ucsc-chainstitchid| image:: https://quay.io/repository/biocontainers/ucsc-chainstitchid/status
   :target: https://quay.io/repository/biocontainers/ucsc-chainstitchid
.. _`ucsc-chainstitchid/tags`: https://quay.io/repository/biocontainers/ucsc-chainstitchid?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-chainstitchid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-chainstitchid/README.html
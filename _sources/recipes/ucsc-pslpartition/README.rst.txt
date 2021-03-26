:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-pslpartition'
.. highlight: bash

ucsc-pslpartition
=================

.. conda:recipe:: ucsc-pslpartition
   :replaces_section_title:
   :noindex:

   split PSL files into non\-overlapping sets

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-pslpartition <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslpartition>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-pslpartition/meta.yaml>`_

   


.. conda:package:: ucsc-pslpartition

   |downloads_ucsc-pslpartition| |docker_ucsc-pslpartition|

   :versions:
      
      

      ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``,  ``332-0``,  ``324-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libpng: ``>=1.6.37,<1.7.0a0``
   :depends libuuid: ``>=2.32.1,<3.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends openssl: ``>=1.1.1j,<1.1.2a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-pslpartition

   and update with::

      conda update ucsc-pslpartition

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-pslpartition:<tag>

   (see `ucsc-pslpartition/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-pslpartition| image:: https://img.shields.io/conda/dn/bioconda/ucsc-pslpartition.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-pslpartition
   :alt:   (downloads)
.. |docker_ucsc-pslpartition| image:: https://quay.io/repository/biocontainers/ucsc-pslpartition/status
   :target: https://quay.io/repository/biocontainers/ucsc-pslpartition
.. _`ucsc-pslpartition/tags`: https://quay.io/repository/biocontainers/ucsc-pslpartition?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-pslpartition/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-pslpartition/README.html
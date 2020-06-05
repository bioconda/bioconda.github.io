:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-clustergenes'
.. highlight: bash

ucsc-clustergenes
=================

.. conda:recipe:: ucsc-clustergenes
   :replaces_section_title:
   :noindex:

   Cluster genes from genePred tracks

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-clustergenes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-clustergenes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-clustergenes/meta.yaml>`_

   


.. conda:package:: ucsc-clustergenes

   |downloads_ucsc-clustergenes| |docker_ucsc-clustergenes|

   :versions:
      
      

      ``377-0``,  ``366-0``,  ``357-1``,  ``357-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends libpng: ``>=1.6.35,<1.7.0a0``
   :depends libuuid: ``>=2.32.1,<3.0a0``
   :depends mysql-connector-c: 
   :depends openssl: ``>=1.0.2p,<1.0.3a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-clustergenes

   and update with::

      conda update ucsc-clustergenes

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-clustergenes:<tag>

   (see `ucsc-clustergenes/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-clustergenes| image:: https://img.shields.io/conda/dn/bioconda/ucsc-clustergenes.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-clustergenes
   :alt:   (downloads)
.. |docker_ucsc-clustergenes| image:: https://quay.io/repository/biocontainers/ucsc-clustergenes/status
   :target: https://quay.io/repository/biocontainers/ucsc-clustergenes
.. _`ucsc-clustergenes/tags`: https://quay.io/repository/biocontainers/ucsc-clustergenes?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-clustergenes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-clustergenes/README.html
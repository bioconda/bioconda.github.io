:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-fafiltern'
.. highlight: bash

ucsc-fafiltern
==============

.. conda:recipe:: ucsc-fafiltern
   :replaces_section_title:
   :noindex:

   Get rid of sequences with too many N\'s

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-fafiltern <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fafiltern>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fafiltern/meta.yaml>`_

   


.. conda:package:: ucsc-fafiltern

   |downloads_ucsc-fafiltern| |docker_ucsc-fafiltern|

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

      conda install ucsc-fafiltern

   and update with::

      conda update ucsc-fafiltern

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-fafiltern:<tag>

   (see `ucsc-fafiltern/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-fafiltern| image:: https://img.shields.io/conda/dn/bioconda/ucsc-fafiltern.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-fafiltern
   :alt:   (downloads)
.. |docker_ucsc-fafiltern| image:: https://quay.io/repository/biocontainers/ucsc-fafiltern/status
   :target: https://quay.io/repository/biocontainers/ucsc-fafiltern
.. _`ucsc-fafiltern/tags`: https://quay.io/repository/biocontainers/ucsc-fafiltern?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-fafiltern/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-fafiltern/README.html
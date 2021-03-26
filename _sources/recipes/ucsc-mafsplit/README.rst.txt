:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-mafsplit'
.. highlight: bash

ucsc-mafsplit
=============

.. conda:recipe:: ucsc-mafsplit
   :replaces_section_title:
   :noindex:

   Split multiple alignment files

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-mafsplit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-mafsplit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-mafsplit/meta.yaml>`_

   


.. conda:package:: ucsc-mafsplit

   |downloads_ucsc-mafsplit| |docker_ucsc-mafsplit|

   :versions:
      
      

      ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``,  ``324-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libpng: ``>=1.6.37,<1.7.0a0``
   :depends libuuid: ``>=2.32.1,<3.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends openssl: ``>=1.1.1k,<1.1.2a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-mafsplit

   and update with::

      conda update ucsc-mafsplit

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-mafsplit:<tag>

   (see `ucsc-mafsplit/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-mafsplit| image:: https://img.shields.io/conda/dn/bioconda/ucsc-mafsplit.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-mafsplit
   :alt:   (downloads)
.. |docker_ucsc-mafsplit| image:: https://quay.io/repository/biocontainers/ucsc-mafsplit/status
   :target: https://quay.io/repository/biocontainers/ucsc-mafsplit
.. _`ucsc-mafsplit/tags`: https://quay.io/repository/biocontainers/ucsc-mafsplit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-mafsplit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-mafsplit/README.html
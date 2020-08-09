:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-splitfile'
.. highlight: bash

ucsc-splitfile
==============

.. conda:recipe:: ucsc-splitfile
   :replaces_section_title:
   :noindex:

   Split up a file

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-splitfile <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-splitfile>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-splitfile/meta.yaml>`_

   


.. conda:package:: ucsc-splitfile

   |downloads_ucsc-splitfile| |docker_ucsc-splitfile|

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

      conda install ucsc-splitfile

   and update with::

      conda update ucsc-splitfile

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-splitfile:<tag>

   (see `ucsc-splitfile/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-splitfile| image:: https://img.shields.io/conda/dn/bioconda/ucsc-splitfile.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-splitfile
   :alt:   (downloads)
.. |docker_ucsc-splitfile| image:: https://quay.io/repository/biocontainers/ucsc-splitfile/status
   :target: https://quay.io/repository/biocontainers/ucsc-splitfile
.. _`ucsc-splitfile/tags`: https://quay.io/repository/biocontainers/ucsc-splitfile?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-splitfile/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-splitfile/README.html
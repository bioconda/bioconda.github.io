:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-newprog'
.. highlight: bash

ucsc-newprog
============

.. conda:recipe:: ucsc-newprog
   :replaces_section_title:
   :noindex:

   make a new C source skeleton.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-newprog <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-newprog>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-newprog/meta.yaml>`_

   


.. conda:package:: ucsc-newprog

   |downloads_ucsc-newprog| |docker_ucsc-newprog|

   :versions:
      
      

      ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libpng: ``>=1.6.37,<1.7.0a0``
   :depends libuuid: ``>=2.32.1,<3.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends openssl: ``>=1.1.1j,<1.1.2a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-newprog

   and update with::

      conda update ucsc-newprog

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-newprog:<tag>

   (see `ucsc-newprog/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-newprog| image:: https://img.shields.io/conda/dn/bioconda/ucsc-newprog.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-newprog
   :alt:   (downloads)
.. |docker_ucsc-newprog| image:: https://quay.io/repository/biocontainers/ucsc-newprog/status
   :target: https://quay.io/repository/biocontainers/ucsc-newprog
.. _`ucsc-newprog/tags`: https://quay.io/repository/biocontainers/ucsc-newprog?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-newprog/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-newprog/README.html
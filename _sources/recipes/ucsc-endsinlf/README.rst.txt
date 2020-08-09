:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-endsinlf'
.. highlight: bash

ucsc-endsinlf
=============

.. conda:recipe:: ucsc-endsinlf
   :replaces_section_title:
   :noindex:

   Check that last letter in files is end of line

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-endsinlf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-endsinlf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-endsinlf/meta.yaml>`_

   


.. conda:package:: ucsc-endsinlf

   |downloads_ucsc-endsinlf| |docker_ucsc-endsinlf|

   :versions:
      
      

      ``377-1``,  ``377-0``,  ``366-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libpng: ``>=1.6.37,<1.7.0a0``
   :depends libuuid: ``>=2.32.1,<3.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends openssl: ``>=1.1.1g,<1.1.2a``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-endsinlf

   and update with::

      conda update ucsc-endsinlf

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-endsinlf:<tag>

   (see `ucsc-endsinlf/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-endsinlf| image:: https://img.shields.io/conda/dn/bioconda/ucsc-endsinlf.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-endsinlf
   :alt:   (downloads)
.. |docker_ucsc-endsinlf| image:: https://quay.io/repository/biocontainers/ucsc-endsinlf/status
   :target: https://quay.io/repository/biocontainers/ucsc-endsinlf
.. _`ucsc-endsinlf/tags`: https://quay.io/repository/biocontainers/ucsc-endsinlf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-endsinlf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-endsinlf/README.html
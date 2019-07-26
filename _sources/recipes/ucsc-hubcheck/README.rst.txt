:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-hubcheck'
.. highlight: bash

ucsc-hubcheck
=============

.. conda:recipe:: ucsc-hubcheck
   :replaces_section_title:

   Check a track data hub for integrity.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-hubcheck <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hubcheck>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hubcheck/meta.yaml>`_

   


.. conda:package:: ucsc-hubcheck

   |downloads_ucsc-hubcheck| |docker_ucsc-hubcheck|

   :versions: 377-0, 366-0, 357-2, 357-1, 357-0
   
   :depends libpng: >=1.6.35,<1.7.0a0
   :depends libuuid: >=2.32.1,<3.0a0
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   :depends openssl: >=1.0.2p,<1.0.3a
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-hubcheck

   and update with::

      conda update ucsc-hubcheck

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-hubcheck:<tag>

   (see `ucsc-hubcheck/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-hubcheck| image:: https://img.shields.io/conda/dn/bioconda/ucsc-hubcheck.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-hubcheck
   :alt:   (downloads)
.. |docker_ucsc-hubcheck| image:: https://quay.io/repository/biocontainers/ucsc-hubcheck/status
   :target: https://quay.io/repository/biocontainers/ucsc-hubcheck
.. _`ucsc-hubcheck/tags`: https://quay.io/repository/biocontainers/ucsc-hubcheck?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-hubcheck/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-hubcheck/README.html
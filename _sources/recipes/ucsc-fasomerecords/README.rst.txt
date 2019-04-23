:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-fasomerecords'
.. highlight: bash

ucsc-fasomerecords
==================

.. conda:recipe:: ucsc-fasomerecords
   :replaces_section_title:

   Extract multiple fa records

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-fasomerecords <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fasomerecords>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-fasomerecords/meta.yaml>`_

   


.. conda:package:: ucsc-fasomerecords

   |downloads_ucsc-fasomerecords| |docker_ucsc-fasomerecords|

   :versions: 377-0, 366-0, 357-2, 357-1, 357-0, 332-0
   
   :depends libpng: >=1.6.35,<1.7.0a0
   :depends libuuid: >=2.32.1,<3.0a0
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   :depends openssl: >=1.0.2p,<1.0.3a
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-fasomerecords

   and update with::

      conda update ucsc-fasomerecords

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-fasomerecords:<tag>

   (see `ucsc-fasomerecords/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-fasomerecords| image:: https://img.shields.io/conda/dn/bioconda/ucsc-fasomerecords.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-fasomerecords| image:: https://quay.io/repository/biocontainers/ucsc-fasomerecords/status
   :target: https://quay.io/repository/biocontainers/ucsc-fasomerecords
.. _`ucsc-fasomerecords/tags`: https://quay.io/repository/biocontainers/ucsc-fasomerecords?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-fasomerecords/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-fasomerecords/README.html
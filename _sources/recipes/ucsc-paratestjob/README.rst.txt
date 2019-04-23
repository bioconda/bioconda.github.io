:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-paratestjob'
.. highlight: bash

ucsc-paratestjob
================

.. conda:recipe:: ucsc-paratestjob
   :replaces_section_title:

   version 12.18

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-paratestjob <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-paratestjob>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-paratestjob/meta.yaml>`_

   


.. conda:package:: ucsc-paratestjob

   |downloads_ucsc-paratestjob| |docker_ucsc-paratestjob|

   :versions: 377-0, 366-0
   
   :depends libpng: >=1.6.35,<1.7.0a0
   :depends libuuid: >=2.32.1,<3.0a0
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   :depends openssl: >=1.0.2p,<1.0.3a
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-paratestjob

   and update with::

      conda update ucsc-paratestjob

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-paratestjob:<tag>

   (see `ucsc-paratestjob/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-paratestjob| image:: https://img.shields.io/conda/dn/bioconda/ucsc-paratestjob.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-paratestjob| image:: https://quay.io/repository/biocontainers/ucsc-paratestjob/status
   :target: https://quay.io/repository/biocontainers/ucsc-paratestjob
.. _`ucsc-paratestjob/tags`: https://quay.io/repository/biocontainers/ucsc-paratestjob?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-paratestjob/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-paratestjob/README.html
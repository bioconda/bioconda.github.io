:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-getrna'
.. highlight: bash

ucsc-getrna
===========

.. conda:recipe:: ucsc-getrna
   :replaces_section_title:

   Get mrna for GenBank or RefSeq sequences found in a database

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-getrna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-getrna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-getrna/meta.yaml>`_

   


.. conda:package:: ucsc-getrna

   |downloads_ucsc-getrna| |docker_ucsc-getrna|

   :versions: 366-0, 357-2, 357-1, 357-0, 332-0
   
   :depends libgcc-ng: >=4.9
   
   :depends libpng: >=1.6.34,<1.7.0a0
   
   :depends libuuid: 
   
   :depends mysql-connector-c: 
   
   :depends openssl: >=1.0.2o,<1.0.3a
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-getrna

   and update with::

      conda update ucsc-getrna

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-getrna:<tag>

   (see `ucsc-getrna/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-getrna| image:: https://img.shields.io/conda/dn/bioconda/ucsc-getrna.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-getrna| image:: https://quay.io/repository/biocontainers/ucsc-getrna/status
   :target: https://quay.io/repository/biocontainers/ucsc-getrna
.. _`ucsc-getrna/tags`: https://quay.io/repository/biocontainers/ucsc-getrna?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-getrna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-getrna/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-bedjointaboffset'
.. highlight: bash

ucsc-bedjointaboffset
=====================

.. conda:recipe:: ucsc-bedjointaboffset
   :replaces_section_title:

   given a bed file and tab file where each have a column with matching values\: first get the value of column0\, the offset and line length from inTabFile. Then go over the bed file\, use the name field and append its offset and length to the bed file as two separate fields. Write the new bed file to outBed.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bedjointaboffset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedjointaboffset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedjointaboffset/meta.yaml>`_

   


.. conda:package:: ucsc-bedjointaboffset

   |downloads_ucsc-bedjointaboffset| |docker_ucsc-bedjointaboffset|

   :versions: 377-0, 366-0
   
   :depends libpng: >=1.6.35,<1.7.0a0
   :depends libuuid: >=2.32.1,<3.0a0
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   :depends openssl: >=1.0.2p,<1.0.3a
   :depends python: 
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bedjointaboffset

   and update with::

      conda update ucsc-bedjointaboffset

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-bedjointaboffset:<tag>

   (see `ucsc-bedjointaboffset/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-bedjointaboffset| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bedjointaboffset.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bedjointaboffset| image:: https://quay.io/repository/biocontainers/ucsc-bedjointaboffset/status
   :target: https://quay.io/repository/biocontainers/ucsc-bedjointaboffset
.. _`ucsc-bedjointaboffset/tags`: https://quay.io/repository/biocontainers/ucsc-bedjointaboffset?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bedjointaboffset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bedjointaboffset/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-estorient'
.. highlight: bash

ucsc-estorient
==============

.. conda:recipe:: ucsc-estorient
   :replaces_section_title:

    Read ESTs from a database and determine orientation based on estOrientInfo table or direction in gbCdnaInfo table.  Update PSLs so that the strand reflects the direction of transcription. By default\, PSLs where the direction can\'t be determined are dropped. 

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-estorient <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-estorient>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-estorient/meta.yaml>`_

   


.. conda:package:: ucsc-estorient

   |downloads_ucsc-estorient| |docker_ucsc-estorient|

   :versions: 377-0, 366-0, 357-2, 357-1, 357-0, 332-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libpng: >=1.6.35,<1.7.0a0
   :depends libuuid: >=2.32.1,<3.0a0
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   :depends openssl: >=1.0.2p,<1.0.3a
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-estorient

   and update with::

      conda update ucsc-estorient

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-estorient:<tag>

   (see `ucsc-estorient/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-estorient| image:: https://img.shields.io/conda/dn/bioconda/ucsc-estorient.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-estorient| image:: https://quay.io/repository/biocontainers/ucsc-estorient/status
   :target: https://quay.io/repository/biocontainers/ucsc-estorient
.. _`ucsc-estorient/tags`: https://quay.io/repository/biocontainers/ucsc-estorient?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-estorient/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-estorient/README.html
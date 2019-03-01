:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-bigbedsummary'
.. highlight: bash

ucsc-bigbedsummary
==================

.. conda:recipe:: ucsc-bigbedsummary
   :replaces_section_title:

   Extract summary information from a bigBed file.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bigbedsummary <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigbedsummary>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigbedsummary/meta.yaml>`_

   


.. conda:package:: ucsc-bigbedsummary

   |downloads_ucsc-bigbedsummary| |docker_ucsc-bigbedsummary|

   :versions: 377-0, 366-0, 357-2, 357-1, 357-0, 332-0, 324-0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libpng: >=1.6.35,<1.7.0a0
   
   :depends libuuid: >=2.32.1,<3.0a0
   
   :depends mysql-connector-c: 
   
   :depends openssl: >=1.0.2p,<1.0.3a
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bigbedsummary

   and update with::

      conda update ucsc-bigbedsummary

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-bigbedsummary:<tag>

   (see `ucsc-bigbedsummary/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-bigbedsummary| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bigbedsummary.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bigbedsummary| image:: https://quay.io/repository/biocontainers/ucsc-bigbedsummary/status
   :target: https://quay.io/repository/biocontainers/ucsc-bigbedsummary
.. _`ucsc-bigbedsummary/tags`: https://quay.io/repository/biocontainers/ucsc-bigbedsummary?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bigbedsummary/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bigbedsummary/README.html
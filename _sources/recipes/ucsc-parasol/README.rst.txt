:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-parasol'
.. highlight: bash

ucsc-parasol
============

.. conda:recipe:: ucsc-parasol
   :replaces_section_title:

    Parasol is the name given to the overall system for managing jobs on a computer cluster and to this specific command.  This command is intended primarily for system administrators.  The \'para\' command is the primary command for users. 

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-parasol <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-parasol>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-parasol/meta.yaml>`_

   


.. conda:package:: ucsc-parasol

   |downloads_ucsc-parasol| |docker_ucsc-parasol|

   :versions: 366-0
   
   :depends libgcc-ng: >=4.9
   
   :depends libpng: >=1.6.34,<1.7.0a0
   
   :depends libuuid: 
   
   :depends mysql-connector-c: 
   
   :depends openssl: >=1.0.2o,<1.0.3a
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-parasol

   and update with::

      conda update ucsc-parasol

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-parasol:<tag>

   (see `ucsc-parasol/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-parasol| image:: https://img.shields.io/conda/dn/bioconda/ucsc-parasol.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-parasol| image:: https://quay.io/repository/biocontainers/ucsc-parasol/status
   :target: https://quay.io/repository/biocontainers/ucsc-parasol
.. _`ucsc-parasol/tags`: https://quay.io/repository/biocontainers/ucsc-parasol?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-parasol/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-parasol/README.html
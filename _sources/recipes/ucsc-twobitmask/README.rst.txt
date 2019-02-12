:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-twobitmask'
.. highlight: bash

ucsc-twobitmask
===============

.. conda:recipe:: ucsc-twobitmask
   :replaces_section_title:

   apply masking to a .2bit file\, creating a new .2bit file

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-twobitmask <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-twobitmask>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-twobitmask/meta.yaml>`_

   


.. conda:package:: ucsc-twobitmask

   |downloads_ucsc-twobitmask| |docker_ucsc-twobitmask|

   :versions: 366-0, 357-2, 357-1, 357-0, 332-0, 324-0
   
   :depends libgcc-ng: >=4.9
   
   :depends libpng: >=1.6.34,<1.7.0a0
   
   :depends libuuid: 
   
   :depends mysql-connector-c: 
   
   :depends openssl: >=1.0.2o,<1.0.3a
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-twobitmask

   and update with::

      conda update ucsc-twobitmask

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-twobitmask:<tag>

   (see `ucsc-twobitmask/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-twobitmask| image:: https://img.shields.io/conda/dn/bioconda/ucsc-twobitmask.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-twobitmask| image:: https://quay.io/repository/biocontainers/ucsc-twobitmask/status
   :target: https://quay.io/repository/biocontainers/ucsc-twobitmask
.. _`ucsc-twobitmask/tags`: https://quay.io/repository/biocontainers/ucsc-twobitmask?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-twobitmask/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-twobitmask/README.html
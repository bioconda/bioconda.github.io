:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-maskoutfa'
.. highlight: bash

ucsc-maskoutfa
==============

.. conda:recipe:: ucsc-maskoutfa
   :replaces_section_title:

   Produce a masked .fa file given an unmasked .fa and

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-maskoutfa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-maskoutfa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-maskoutfa/meta.yaml>`_

   


.. conda:package:: ucsc-maskoutfa

   |downloads_ucsc-maskoutfa| |docker_ucsc-maskoutfa|

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

      conda install ucsc-maskoutfa

   and update with::

      conda update ucsc-maskoutfa

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-maskoutfa:<tag>

   (see `ucsc-maskoutfa/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-maskoutfa| image:: https://img.shields.io/conda/dn/bioconda/ucsc-maskoutfa.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-maskoutfa| image:: https://quay.io/repository/biocontainers/ucsc-maskoutfa/status
   :target: https://quay.io/repository/biocontainers/ucsc-maskoutfa
.. _`ucsc-maskoutfa/tags`: https://quay.io/repository/biocontainers/ucsc-maskoutfa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-maskoutfa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-maskoutfa/README.html
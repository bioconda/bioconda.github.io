:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-facmp'
.. highlight: bash

ucsc-facmp
==========

.. conda:recipe:: ucsc-facmp
   :replaces_section_title:

   Compare two .fa files

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-facmp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-facmp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-facmp/meta.yaml>`_

   


.. conda:package:: ucsc-facmp

   |downloads_ucsc-facmp| |docker_ucsc-facmp|

   :versions: 377-0, 366-0, 357-2, 357-1, 357-0, 332-0
   
   :depends libpng: >=1.6.35,<1.7.0a0
   
   :depends libuuid: >=2.32.1,<3.0a0
   
   :depends mysql-connector-c: >=6.1.11,<6.1.12.0a0
   
   :depends openssl: >=1.0.2p,<1.0.3a
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-facmp

   and update with::

      conda update ucsc-facmp

   or use the docker container::

      docker pull quay.io/biocontainers/ucsc-facmp:<tag>

   (see `ucsc-facmp/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-facmp| image:: https://img.shields.io/conda/dn/bioconda/ucsc-facmp.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-facmp| image:: https://quay.io/repository/biocontainers/ucsc-facmp/status
   :target: https://quay.io/repository/biocontainers/ucsc-facmp
.. _`ucsc-facmp/tags`: https://quay.io/repository/biocontainers/ucsc-facmp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-facmp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-facmp/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-dbsnoop'
.. highlight: bash

ucsc-dbsnoop
============

.. conda:recipe:: ucsc-dbsnoop
   :replaces_section_title:

   Produce an overview of a database.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-dbsnoop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-dbsnoop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-dbsnoop/meta.yaml>`_

   


.. conda:package:: ucsc-dbsnoop

   |downloads_ucsc-dbsnoop| |docker_ucsc-dbsnoop|

   :versions: 366-0, 357-2, 357-1, 357-0, 332-0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-dbsnoop

   and update with::

      conda update ucsc-dbsnoop

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-dbsnoop:<tag>

   (see `ucsc-dbsnoop/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-dbsnoop| image:: https://img.shields.io/conda/dn/bioconda/ucsc-dbsnoop.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-dbsnoop| image:: https://quay.io/repository/biocontainers/ucsc-dbsnoop/status
   :target: https://quay.io/repository/biocontainers/ucsc-dbsnoop
.. _`ucsc-dbsnoop/tags`: https://quay.io/repository/biocontainers/ucsc-dbsnoop?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-dbsnoop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-dbsnoop/README.html
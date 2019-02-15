:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-hggcpercent'
.. highlight: bash

ucsc-hggcpercent
================

.. conda:recipe:: ucsc-hggcpercent
   :replaces_section_title:

   Calculate GC Percentage in 20kb windows

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-hggcpercent <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hggcpercent>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hggcpercent/meta.yaml>`_

   


.. conda:package:: ucsc-hggcpercent

   |downloads_ucsc-hggcpercent| |docker_ucsc-hggcpercent|

   :versions: 366-0, 357-2, 357-1, 357-0, 332-0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-hggcpercent

   and update with::

      conda update ucsc-hggcpercent

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-hggcpercent:<tag>

   (see `ucsc-hggcpercent/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-hggcpercent| image:: https://img.shields.io/conda/dn/bioconda/ucsc-hggcpercent.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-hggcpercent| image:: https://quay.io/repository/biocontainers/ucsc-hggcpercent/status
   :target: https://quay.io/repository/biocontainers/ucsc-hggcpercent
.. _`ucsc-hggcpercent/tags`: https://quay.io/repository/biocontainers/ucsc-hggcpercent?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-hggcpercent/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-hggcpercent/README.html
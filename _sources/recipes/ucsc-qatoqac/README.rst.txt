:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-qatoqac'
.. highlight: bash

ucsc-qatoqac
============

.. conda:recipe:: ucsc-qatoqac
   :replaces_section_title:

   convert from uncompressed to compressed

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-qatoqac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-qatoqac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-qatoqac/meta.yaml>`_

   


.. conda:package:: ucsc-qatoqac

   |downloads_ucsc-qatoqac| |docker_ucsc-qatoqac|

   :versions: 366-0, 357-2, 357-1, 357-0, 332-0, 324-0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-qatoqac

   and update with::

      conda update ucsc-qatoqac

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-qatoqac:<tag>

   (see `ucsc-qatoqac/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-qatoqac| image:: https://img.shields.io/conda/dn/bioconda/ucsc-qatoqac.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-qatoqac| image:: https://quay.io/repository/biocontainers/ucsc-qatoqac/status
   :target: https://quay.io/repository/biocontainers/ucsc-qatoqac
.. _`ucsc-qatoqac/tags`: https://quay.io/repository/biocontainers/ucsc-qatoqac?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-qatoqac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-qatoqac/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-bedsort'
.. highlight: bash

ucsc-bedsort
============

.. conda:recipe:: ucsc-bedsort
   :replaces_section_title:

   Sort a .bed file by chrom\,chromStart

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bedsort <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedsort>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedsort/meta.yaml>`_

   


.. conda:package:: ucsc-bedsort

   |downloads_ucsc-bedsort| |docker_ucsc-bedsort|

   :versions: 366-0, 357-2, 357-1, 357-0, 332-0, 324-0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bedsort

   and update with::

      conda update ucsc-bedsort

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-bedsort:<tag>

   (see `ucsc-bedsort/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-bedsort| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bedsort.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bedsort| image:: https://quay.io/repository/biocontainers/ucsc-bedsort/status
   :target: https://quay.io/repository/biocontainers/ucsc-bedsort
.. _`ucsc-bedsort/tags`: https://quay.io/repository/biocontainers/ucsc-bedsort?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bedsort/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bedsort/README.html
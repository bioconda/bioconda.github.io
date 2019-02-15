:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-bigwigtobedgraph'
.. highlight: bash

ucsc-bigwigtobedgraph
=====================

.. conda:recipe:: ucsc-bigwigtobedgraph
   :replaces_section_title:

   Convert from bigWig to bedGraph format.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bigwigtobedgraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigwigtobedgraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigwigtobedgraph/meta.yaml>`_

   


.. conda:package:: ucsc-bigwigtobedgraph

   |downloads_ucsc-bigwigtobedgraph| |docker_ucsc-bigwigtobedgraph|

   :versions: 366-0, 357-2, 357-1, 357-0, 332-0, 324-0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bigwigtobedgraph

   and update with::

      conda update ucsc-bigwigtobedgraph

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-bigwigtobedgraph:<tag>

   (see `ucsc-bigwigtobedgraph/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-bigwigtobedgraph| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bigwigtobedgraph.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bigwigtobedgraph| image:: https://quay.io/repository/biocontainers/ucsc-bigwigtobedgraph/status
   :target: https://quay.io/repository/biocontainers/ucsc-bigwigtobedgraph
.. _`ucsc-bigwigtobedgraph/tags`: https://quay.io/repository/biocontainers/ucsc-bigwigtobedgraph?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bigwigtobedgraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bigwigtobedgraph/README.html
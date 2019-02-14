:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-bedrestricttopositions'
.. highlight: bash

ucsc-bedrestricttopositions
===========================

.. conda:recipe:: ucsc-bedrestricttopositions
   :replaces_section_title:

   Filter bed file\, restricting to only ones that match chrom\/start\/ends specified in restrict.bed file.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bedrestricttopositions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedrestricttopositions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedrestricttopositions/meta.yaml>`_

   


.. conda:package:: ucsc-bedrestricttopositions

   |downloads_ucsc-bedrestricttopositions| |docker_ucsc-bedrestricttopositions|

   :versions: 366-0, 357-2, 357-1, 357-0, 332-0, 324-0
   
   :depends zlib: >=1.2.11,<1.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ucsc-bedrestricttopositions

   and update with::

      conda update ucsc-bedrestricttopositions

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ucsc-bedrestricttopositions:<tag>

   (see `ucsc-bedrestricttopositions/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-bedrestricttopositions| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bedrestricttopositions.svg?style=flat
   :alt:   (downloads)
.. |docker_ucsc-bedrestricttopositions| image:: https://quay.io/repository/biocontainers/ucsc-bedrestricttopositions/status
   :target: https://quay.io/repository/biocontainers/ucsc-bedrestricttopositions
.. _`ucsc-bedrestricttopositions/tags`: https://quay.io/repository/biocontainers/ucsc-bedrestricttopositions?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bedrestricttopositions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bedrestricttopositions/README.html
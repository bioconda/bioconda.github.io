:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pgca'
.. highlight: bash

bioconductor-pgca
=================

.. conda:recipe:: bioconductor-pgca
   :replaces_section_title:
   :noindex:

   PGCA\: An Algorithm to Link Protein Groups Created from MS\/MS Data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/pgca.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-pgca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pgca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pgca/meta.yaml>`_

   Protein Group Code Algorithm \(PGCA\) is a computationally inexpensive algorithm to merge protein summaries from multiple experimental quantitative proteomics data. The algorithm connects two or more groups with overlapping accession numbers. In some cases\, pairwise groups are mutually exclusive but they may still be connected by another group \(or set of groups\) with overlapping accession numbers. Thus\, groups created by PGCA from multiple experimental runs \(i.e.\, global groups\) are called \"connected\" groups. These identified global protein groups enable the analysis of quantitative data available for protein groups instead of unique protein identifiers.


.. conda:package:: bioconductor-pgca

   |downloads_bioconductor-pgca| |docker_bioconductor-pgca|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.1-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pgca

   and update with::

      conda update bioconductor-pgca

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pgca:<tag>

   (see `bioconductor-pgca/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pgca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pgca.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pgca
   :alt:   (downloads)
.. |docker_bioconductor-pgca| image:: https://quay.io/repository/biocontainers/bioconductor-pgca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pgca
.. _`bioconductor-pgca/tags`: https://quay.io/repository/biocontainers/bioconductor-pgca?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pgca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pgca/README.html
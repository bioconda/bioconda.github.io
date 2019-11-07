:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqarray'
.. highlight: bash

bioconductor-seqarray
=====================

.. conda:recipe:: bioconductor-seqarray
   :replaces_section_title:

   Data Management of Large\-scale Whole\-genome Sequence Variant Calls

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/SeqArray.html
   :license: GPL-3
   :recipe: /`bioconductor-seqarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqarray/meta.yaml>`_

   Data management of large\-scale whole\-genome sequencing variant calls with thousands of individuals\: genotypic data \(e.g.\, SNVs\, indels and structural variation calls\) and annotations in SeqArray files are stored in an array\-oriented and compressed manner\, with efficient data access using the R programming language.


.. conda:package:: bioconductor-seqarray

   |downloads_bioconductor-seqarray| |docker_bioconductor-seqarray|

   :versions: 1.26.0-0, 1.24.2-0, 1.22.2-0
   
   :depends bioconductor-biostrings: >=2.54.0,<2.55.0
   :depends bioconductor-gdsfmt: >=1.22.0,<1.23.0
   :depends bioconductor-genomeinfodb: >=1.22.0,<1.23.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends bioconductor-iranges: >=2.20.0,<2.21.0
   :depends bioconductor-s4vectors: >=0.24.0,<0.25.0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-seqarray

   and update with::

      conda update bioconductor-seqarray

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqarray:<tag>

   (see `bioconductor-seqarray/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqarray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqarray.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqarray
   :alt:   (downloads)
.. |docker_bioconductor-seqarray| image:: https://quay.io/repository/biocontainers/bioconductor-seqarray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqarray
.. _`bioconductor-seqarray/tags`: https://quay.io/repository/biocontainers/bioconductor-seqarray?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqarray/README.html
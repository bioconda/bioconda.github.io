:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-packfinder'
.. highlight: bash

bioconductor-packfinder
=======================

.. conda:recipe:: bioconductor-packfinder
   :replaces_section_title:

   de novo Annotation of Pack\-TYPE Transposable Elements

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/packFinder.html
   :license: GPL-2
   :recipe: /`bioconductor-packfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-packfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-packfinder/meta.yaml>`_

   Algorithm and tools for in silico pack\-TYPE transposon discovery. Filters a given genome for properties unique to DNA transposons and provides tools for the investigation of returned matches. Sequences are input in DNAString format\, and ranges are returned as a dataframe \(in the format returned by as.dataframe\(GRanges\)\).


.. conda:package:: bioconductor-packfinder

   |downloads_bioconductor-packfinder| |docker_bioconductor-packfinder|

   :versions: 1.0.0-0
   
   :depends bioconductor-biostrings: >=2.56.0,<2.57.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-s4vectors: >=0.26.0,<0.27.0
   :depends r-ape: 
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-kmer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-packfinder

   and update with::

      conda update bioconductor-packfinder

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-packfinder:<tag>

   (see `bioconductor-packfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-packfinder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-packfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-packfinder
   :alt:   (downloads)
.. |docker_bioconductor-packfinder| image:: https://quay.io/repository/biocontainers/bioconductor-packfinder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-packfinder
.. _`bioconductor-packfinder/tags`: https://quay.io/repository/biocontainers/bioconductor-packfinder?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-packfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-packfinder/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multicrispr'
.. highlight: bash

bioconductor-multicrispr
========================

.. conda:recipe:: bioconductor-multicrispr
   :replaces_section_title:
   :noindex:

   Multi\-locus multi\-purpose Crispr\/Cas design

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/multicrispr.html
   :license: GPL-2
   :recipe: /`bioconductor-multicrispr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multicrispr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multicrispr/meta.yaml>`_

   This package is for designing Crispr\/Cas9 and Prime Editing experiments. It contains functions to \(1\) define and transform genomic targets\, \(2\) find spacers \(4\) count offtarget \(mis\)matches\, and \(5\) compute Doench2016\/2014 targeting efficiency. Care has been taken for multicrispr to scale well towards large target sets\, enabling the design of large Crispr\/Cas9 libraries.


.. conda:package:: bioconductor-multicrispr

   |downloads_bioconductor-multicrispr| |docker_bioconductor-multicrispr|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-biostrings: ``>=2.60.0,<2.61.0``
   :depends bioconductor-bsgenome: ``>=1.60.0,<1.61.0``
   :depends bioconductor-crisprseek: ``>=1.32.0,<1.33.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicfeatures: ``>=1.44.0,<1.45.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-karyoploter: ``>=1.18.0,<1.19.0``
   :depends bioconductor-plyranges: ``>=1.12.0,<1.13.0``
   :depends bioconductor-rbowtie: ``>=1.32.0,<1.33.0``
   :depends bioconductor-rtracklayer: ``>=1.52.0,<1.53.0``
   :depends r-assertive: 
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-reticulate: 
   :depends r-stringi: 
   :depends r-tidyr: 
   :depends r-tidyselect: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-multicrispr

   and update with::

      conda update bioconductor-multicrispr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-multicrispr:<tag>

   (see `bioconductor-multicrispr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-multicrispr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multicrispr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multicrispr
   :alt:   (downloads)
.. |docker_bioconductor-multicrispr| image:: https://quay.io/repository/biocontainers/bioconductor-multicrispr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multicrispr
.. _`bioconductor-multicrispr/tags`: https://quay.io/repository/biocontainers/bioconductor-multicrispr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multicrispr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multicrispr/README.html
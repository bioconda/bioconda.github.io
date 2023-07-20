:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cbea'
.. highlight: bash

bioconductor-cbea
=================

.. conda:recipe:: bioconductor-cbea
   :replaces_section_title:
   :noindex:

   Competitive Balances for Taxonomic Enrichment Analysis in R

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CBEA.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-cbea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cbea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cbea/meta.yaml>`_

   This package implements CBEA\, a method to perform set\-based analysis for microbiome relative abundance data. This approach constructs a competitive balance between taxa within the set and remainder taxa per sample. More details can be found in the Nguyen et al. 2021\+ manuscript. Additionally\, this package adds support functions to help users perform taxa\-set enrichment analyses using existing gene set analysis methods. In the future we hope to also provide curated knowledge driven taxa sets.


.. conda:package:: bioconductor-cbea

   |downloads_bioconductor-cbea| |docker_bioconductor-cbea|

   :versions:
      
      

      ``1.3.0-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-biocset: ``>=1.14.0,<1.15.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-treesummarizedexperiment: ``>=2.8.0,<2.9.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-fitdistrplus: 
   :depends r-generics: 
   :depends r-glue: 
   :depends r-goftest: 
   :depends r-lmom: 
   :depends r-magrittr: 
   :depends r-mixtools: 
   :depends r-rcpp: ``>=1.0.7``
   :depends r-rlang: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cbea

   and update with::

      conda update bioconductor-cbea

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cbea:<tag>

   (see `bioconductor-cbea/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cbea| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cbea.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cbea
   :alt:   (downloads)
.. |docker_bioconductor-cbea| image:: https://quay.io/repository/biocontainers/bioconductor-cbea/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cbea
.. _`bioconductor-cbea/tags`: https://quay.io/repository/biocontainers/bioconductor-cbea?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cbea";
        var versions = ["1.3.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cbea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cbea/README.html
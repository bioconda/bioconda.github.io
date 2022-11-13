:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-syntenet'
.. highlight: bash

bioconductor-syntenet
=====================

.. conda:recipe:: bioconductor-syntenet
   :replaces_section_title:
   :noindex:

   Inference And Analysis Of Synteny Networks

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/syntenet.html
   :license: GPL-3
   :recipe: /`bioconductor-syntenet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-syntenet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-syntenet/meta.yaml>`_

   syntenet can be used to infer synteny networks from whole\-genome protein sequences and analyze them. Anchor pairs are detected with the MCScanX algorithm\, which was ported to this package with the Rcpp framework for R and C\+\+ integration. Anchor pairs from synteny analyses are treated as an undirected unweighted graph \(i.e.\, a synteny network\)\, and users can perform\: i. network clustering\; ii. phylogenomic profiling \(by identifying which species contain which clusters\) and\; iii. microsynteny\-based phylogeny reconstruction with maximum likelihood.


.. conda:package:: bioconductor-syntenet

   |downloads_bioconductor-syntenet| |docker_bioconductor-syntenet|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-rtracklayer: ``>=1.58.0,<1.59.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-ggnetwork: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-intergraph: 
   :depends r-labdsv: 
   :depends r-networkd3: 
   :depends r-pheatmap: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: ``>=1.0.8``
   :depends r-testthat: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-syntenet

   and update with::

      conda update bioconductor-syntenet

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-syntenet:<tag>

   (see `bioconductor-syntenet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-syntenet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-syntenet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-syntenet
   :alt:   (downloads)
.. |docker_bioconductor-syntenet| image:: https://quay.io/repository/biocontainers/bioconductor-syntenet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-syntenet
.. _`bioconductor-syntenet/tags`: https://quay.io/repository/biocontainers/bioconductor-syntenet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-syntenet";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-syntenet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-syntenet/README.html
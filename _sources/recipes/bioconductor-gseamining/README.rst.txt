:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gseamining'
.. highlight: bash

bioconductor-gseamining
=======================

.. conda:recipe:: bioconductor-gseamining
   :replaces_section_title:
   :noindex:

   Make Biological Sense of Gene Set Enrichment Analysis Outputs

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/GSEAmining.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-gseamining <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gseamining>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gseamining/meta.yaml>`_

   Gene Set Enrichment Analysis is a very powerful and interesting computational method that allows an easy correlation between differential expressed genes and biological processes. Unfortunately\, although it was designed to help researchers to interpret gene expression data it can generate huge amounts of results whose biological meaning can be difficult to interpret. Many available tools rely on the hierarchically structured Gene Ontology \(GO\) classification to reduce reundandcy in the results. However\, due to the popularity of GSEA many more gene set collections\, such as those in the Molecular Signatures Database are emerging. Since these collections are not organized as those in GO\, their usage for GSEA do not always give a straightforward answer or\, in other words\, getting all the meaninful information can be challenging with the currently available tools. For these reasons\, GSEAmining was born to be an easy tool to create reproducible reports to help researchers make biological sense of GSEA outputs. Given the results of GSEA\, GSEAmining clusters the different gene sets collections based on the presence of the same genes in the leadind edge \(core\) subset. Leading edge subsets are those genes that contribute most to the enrichment score of each collection of genes or gene sets. For this reason\, gene sets that participate in similar biological processes should share genes in common and in turn cluster together. After that\, GSEAmining is able to identify and represent for each cluster\: \- The most enriched terms in the names of gene sets \(as wordclouds\) \- The most enriched genes in the leading edge subsets \(as bar plots\). In each case\, positive and negative enrichments are shown in different colors so it is easy to distinguish biological processes or genes that may be of interest in that particular study.


.. conda:package:: bioconductor-gseamining

   |downloads_bioconductor-gseamining| |docker_bioconductor-gseamining|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-dendextend: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggwordcloud: 
   :depends r-gridextra: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidytext: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gseamining

   and update with::

      conda update bioconductor-gseamining

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gseamining:<tag>

   (see `bioconductor-gseamining/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gseamining| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gseamining.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gseamining
   :alt:   (downloads)
.. |docker_bioconductor-gseamining| image:: https://quay.io/repository/biocontainers/bioconductor-gseamining/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gseamining
.. _`bioconductor-gseamining/tags`: https://quay.io/repository/biocontainers/bioconductor-gseamining?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gseamining";
        var versions = ["1.4.0","1.2.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gseamining/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gseamining/README.html
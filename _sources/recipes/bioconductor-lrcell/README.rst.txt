:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lrcell'
.. highlight: bash

bioconductor-lrcell
===================

.. conda:recipe:: bioconductor-lrcell
   :replaces_section_title:
   :noindex:

   Differential cell type change analysis using Logistic\/linear Regression

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/LRcell.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-lrcell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lrcell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lrcell/meta.yaml>`_

   The goal of LRcell is to identify specific sub\-cell types that drives the changes observed in a bulk RNA\-seq differential gene expression experiment. To achieve this\, LRcell utilizes sets of cell marker genes acquired from single\-cell RNA\-sequencing \(scRNA\-seq\) as indicators for various cell types in the tissue of interest. Next\, for each cell type\, using its marker genes as indicators\, we apply Logistic Regression on the complete set of genes with differential expression p\-values to calculate a cell\-type significance p\-value. Finally\, these p\-values are compared to predict which one\(s\) are likely to be responsible for the differential gene expression pattern observed in the bulk RNA\-seq experiments. LRcell is inspired by the LRpath\[\@sartor2009lrpath\] algorithm developed by Sartor et al.\, originally designed for pathway\/gene set enrichment analysis. LRcell contains three major components\: LRcell analysis\, plot generation and marker gene selection. All modules in this package are written in R. This package also provides marker genes in the Prefrontal Cortex \(pFC\) human brain region\, human PBMC and nine mouse brain regions \(Frontal Cortex\, Cerebellum\, Globus Pallidus\, Hippocampus\, Entopeduncular\, Posterior Cortex\, Striatum\, Substantia Nigra and Thalamus\).


.. conda:package:: bioconductor-lrcell

   |downloads_bioconductor-lrcell| |docker_bioconductor-lrcell|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.6.0,<3.7.0``
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-experimenthub: ``>=2.6.0,<2.7.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-magrittr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lrcell

   and update with::

      conda update bioconductor-lrcell

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-lrcell:<tag>

   (see `bioconductor-lrcell/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-lrcell| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lrcell.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lrcell
   :alt:   (downloads)
.. |docker_bioconductor-lrcell| image:: https://quay.io/repository/biocontainers/bioconductor-lrcell/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lrcell
.. _`bioconductor-lrcell/tags`: https://quay.io/repository/biocontainers/bioconductor-lrcell?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lrcell";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lrcell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lrcell/README.html
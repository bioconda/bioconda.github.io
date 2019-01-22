.. _`bioconductor-isogenegui`:

bioconductor-isogenegui
=======================

|downloads|

The IsoGene Graphical User Interface \(IsoGene\-GUI\) is a user friendly interface of the IsoGene package which is aimed to identify for genes with a monotonic trend in the expression levels with respect to the increasing doses. Additionally\, GUI extension of original package contains various tools to perform clustering of dose\-response profiles. Testing is addressed through several test statistics\: global likelihood ratio test \(E2\)\, Bartholomew 1961\, Barlow et al. 1972 and Robertson et al. 1988\)\, Williams \(1971\, 1972\)\, Marcus \(1976\)\, the M \(Hu et al. 2005\) and the modified M \(Lin et al. 2007\). The p\-values of the global likelihood ratio test \(E2\) are obtained using the exact distribution and permutations. The other four test statistics are obtained using permutations. Several p\-values adjustment are provided\: Bonferroni\, Holm \(1979\)\, Hochberg \(1988\)\, and Sidak procedures for controlling the family\-wise Type I error rate \(FWER\)\, and BH \(Benjamini and Hochberg 1995\) and BY \(Benjamini and Yekutieli 2001\) procedures are used for controlling the FDR. The inference is based on resampling methods\, which control the False Discovery Rate \(FDR\)\, for both permutations \(Ge et al.\, 2003\) and the Significance Analysis of Microarrays \(SAM\, Tusher et al.\, 2001\). Clustering methods are outsourced from CRAN packages ORCME\, ORIClust. The package ORCME is based on delta\-clustering method \(Cheng and Church\, 2000\) and ORIClust on Order Restricted Information Criterion \(Liu et al.\, 2009\)\, both perform same task but from different perspective and their outputs are clusters of genes. Additionally\, profile selection for given gene based on Generalized ORIC \(Kuiper et al.\, 2014\) from package goric and permutation test for E2 based on package orQA are included in IsoGene\-GUI. None of these four packages has GUI.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/IsoGeneGUI.html
Versions      
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isogenegui



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-isogenegui

and update with::

   conda update bioconductor-isogenegui



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-isogenegui.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-isogenegui/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-isogenegui/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-isogenegui/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-isogenegui
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-isogenegui/status
                :target: https://quay.io/repository/biocontainers/bioconductor-isogenegui


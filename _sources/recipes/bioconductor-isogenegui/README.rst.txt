:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-isogenegui'
.. highlight: bash

bioconductor-isogenegui
=======================

.. conda:recipe:: bioconductor-isogenegui
   :replaces_section_title:
   :noindex:

   A graphical user interface to conduct a dose\-response analysis of microarray data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/IsoGeneGUI.html
   :license: GPL-2
   :recipe: /`bioconductor-isogenegui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isogenegui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isogenegui/meta.yaml>`_

   The IsoGene Graphical User Interface \(IsoGene\-GUI\) is a user friendly interface of the IsoGene package which is aimed to identify for genes with a monotonic trend in the expression levels with respect to the increasing doses. Additionally\, GUI extension of original package contains various tools to perform clustering of dose\-response profiles. Testing is addressed through several test statistics\: global likelihood ratio test \(E2\)\, Bartholomew 1961\, Barlow et al. 1972 and Robertson et al. 1988\)\, Williams \(1971\, 1972\)\, Marcus \(1976\)\, the M \(Hu et al. 2005\) and the modified M \(Lin et al. 2007\). The p\-values of the global likelihood ratio test \(E2\) are obtained using the exact distribution and permutations. The other four test statistics are obtained using permutations. Several p\-values adjustment are provided\: Bonferroni\, Holm \(1979\)\, Hochberg \(1988\)\, and Sidak procedures for controlling the family\-wise Type I error rate \(FWER\)\, and BH \(Benjamini and Hochberg 1995\) and BY \(Benjamini and Yekutieli 2001\) procedures are used for controlling the FDR. The inference is based on resampling methods\, which control the False Discovery Rate \(FDR\)\, for both permutations \(Ge et al.\, 2003\) and the Significance Analysis of Microarrays \(SAM\, Tusher et al.\, 2001\). Clustering methods are outsourced from CRAN packages ORCME\, ORIClust. The package ORCME is based on delta\-clustering method \(Cheng and Church\, 2000\) and ORIClust on Order Restricted Information Criterion \(Liu et al.\, 2009\)\, both perform same task but from different perspective and their outputs are clusters of genes. Additionally\, profile selection for given gene based on Generalized ORIC \(Kuiper et al.\, 2014\) from package goric and permutation test for E2 based on package orQA are included in IsoGene\-GUI. None of these four packages has GUI.


.. conda:package:: bioconductor-isogenegui

   |downloads_bioconductor-isogenegui| |docker_bioconductor-isogenegui|

   :versions:
      
      

      ``2.28.0-0``,  ``2.26.0-1``,  ``2.26.0-0``,  ``2.22.0-0``,  ``2.20.0-1``,  ``2.18.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-geneplotter: ``>=1.70.0,<1.71.0``
   :depends bioconductor-multtest: ``>=2.48.0,<2.49.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ff: 
   :depends r-goric: 
   :depends r-iso: 
   :depends r-isogene: 
   :depends r-jpeg: 
   :depends r-orcme: 
   :depends r-oriclust: 
   :depends r-orqa: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: 
   :depends r-relimp: 
   :depends r-tkrplot: 
   :depends r-xlsx: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-isogenegui

   and update with::

      conda update bioconductor-isogenegui

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-isogenegui:<tag>

   (see `bioconductor-isogenegui/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-isogenegui| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-isogenegui.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-isogenegui
   :alt:   (downloads)
.. |docker_bioconductor-isogenegui| image:: https://quay.io/repository/biocontainers/bioconductor-isogenegui/status
   :target: https://quay.io/repository/biocontainers/bioconductor-isogenegui
.. _`bioconductor-isogenegui/tags`: https://quay.io/repository/biocontainers/bioconductor-isogenegui?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-isogenegui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-isogenegui/README.html
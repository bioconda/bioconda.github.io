:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tronco'
.. highlight: bash

bioconductor-tronco
===================

.. conda:recipe:: bioconductor-tronco
   :replaces_section_title:
   :noindex:

   TRONCO\, an R package for TRanslational ONCOlogy

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/TRONCO.html
   :license: GPL-3
   :recipe: /`bioconductor-tronco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tronco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tronco/meta.yaml>`_

   The TRONCO \(TRanslational ONCOlogy\) R package collects algorithms to infer progression models via the approach of Suppes\-Bayes Causal Network\, both from an ensemble of tumors \(cross\-sectional samples\) and within an individual patient \(multi\-region or single\-cell samples\). The package provides parallel implementation of algorithms that process binary matrices where each row represents a tumor sample and each column a single\-nucleotide or a structural variant driving the progression\; a 0\/1 value models the absence\/presence of that alteration in the sample. The tool can import data from plain\, MAF or GISTIC format files\, and can fetch it from the cBioPortal for cancer genomics. Functions for data manipulation and visualization are provided\, as well as functions to import\/export such data to other bioinformatics tools for\, e.g\, clustering or detection of mutually exclusive alterations. Inferred models can be visualized and tested for their confidence via bootstrap and cross\-validation. TRONCO is used for the implementation of the Pipeline for Cancer Inference \(PICNIC\).


.. conda:package:: bioconductor-tronco

   |downloads_bioconductor-tronco| |docker_bioconductor-tronco|

   :versions:
      
      

      ``2.24.0-0``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.2-0``,  ``2.14.2-0``

      

   
   :depends bioconductor-rgraphviz: ``>=2.36.0,<2.37.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-bnlearn: 
   :depends r-cgdsr: 
   :depends r-circlize: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-gridextra: 
   :depends r-gtable: 
   :depends r-gtools: 
   :depends r-igraph: 
   :depends r-iterators: 
   :depends r-r.matlab: 
   :depends r-rcolorbrewer: 
   :depends r-scales: 
   :depends r-xtable: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tronco

   and update with::

      conda update bioconductor-tronco

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tronco:<tag>

   (see `bioconductor-tronco/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tronco| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tronco.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tronco
   :alt:   (downloads)
.. |docker_bioconductor-tronco| image:: https://quay.io/repository/biocontainers/bioconductor-tronco/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tronco
.. _`bioconductor-tronco/tags`: https://quay.io/repository/biocontainers/bioconductor-tronco?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tronco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tronco/README.html
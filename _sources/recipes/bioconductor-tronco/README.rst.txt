.. title:: Package Recipe 'bioconductor-tronco'
.. highlight: bash


bioconductor-tronco
===================

.. conda:recipe:: bioconductor-tronco
   :replaces_section_title:

   The TRONCO \(TRanslational ONCOlogy\) R package collects algorithms to infer progression models via the approach of Suppes\-Bayes Causal Network\, both from an ensemble of tumors \(cross\-sectional samples\) and within an individual patient \(multi\-region or single\-cell samples\). The package provides parallel implementation of algorithms that process binary matrices where each row represents a tumor sample and each column a single\-nucleotide or a structural variant driving the progression\; a 0\/1 value models the absence\/presence of that alteration in the sample. The tool can import data from plain\, MAF or GISTIC format files\, and can fetch it from the cBioPortal for cancer genomics. Functions for data manipulation and visualization are provided\, as well as functions to import\/export such data to other bioinformatics tools for\, e.g\, clustering or detection of mutually exclusive alterations. Inferred models can be visualized and tested for their confidence via bootstrap and cross\-validation. TRONCO is used for the implementation of the Pipeline for Cancer Inference \(PICNIC\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/TRONCO.html
   :license: file LICENSE
   :recipe: /`bioconductor-tronco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tronco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tronco/meta.yaml>`_

   


.. conda:package:: bioconductor-tronco

   |downloads_bioconductor-tronco| |docker_bioconductor-tronco|

   :versions: 2.14.2

   :depends: :conda:package:`bioconductor-rgraphviz` >=2.26.0,<2.27.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-bnlearn`  :conda:package:`r-cgdsr`  :conda:package:`r-circlize`  :conda:package:`r-doparallel`  :conda:package:`r-foreach`  :conda:package:`r-gridextra`  :conda:package:`r-gtable`  :conda:package:`r-gtools`  :conda:package:`r-igraph`  :conda:package:`r-iterators`  :conda:package:`r-r.matlab`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-scales`  :conda:package:`r-xtable`  

   :required~by: |required_by_bioconductor-tronco|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tronco

   and update with::

      conda update bioconductor-tronco

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-tronco


.. |required_by_bioconductor-tronco| conda:required_by:: bioconductor-tronco
.. |downloads_bioconductor-tronco| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tronco.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-tronco| image:: https://quay.io/repository/biocontainers/bioconductor-tronco/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tronco







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tronco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tronco/README.html


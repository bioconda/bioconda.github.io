:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pdatk'
.. highlight: bash

bioconductor-pdatk
==================

.. conda:recipe:: bioconductor-pdatk
   :replaces_section_title:
   :noindex:

   Pancreatic Ductal Adenocarcinoma Tool\-Kit

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/PDATK.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-pdatk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pdatk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pdatk/meta.yaml>`_

   Pancreatic ductal adenocarcinoma \(PDA\) has a relatively poor prognosis and is one of the most lethal cancers. Molecular classification of gene expression profiles holds the potential to identify meaningful subtypes which can inform therapeutic strategy in the clinical setting. The Pancreatic Cancer Adenocarcinoma Tool\-Kit \(PDATK\) provides an S4 class\-based interface for performing unsupervised subtype discovery\, cross\-cohort meta\-clustering\, gene\-expression\-based classification\, and subsequent survival analysis to identify prognostically useful subtypes in pancreatic cancer and beyond. Two novel methods\, Consensus Subtypes in Pancreatic Cancer \(CSPC\) and Pancreatic Cancer Overall Survival Predictor \(PCOSP\) are included for consensus\-based meta\-clustering and overall\-survival prediction\, respectively. Additionally\, four published subtype classifiers and three published prognostic gene signatures are included to allow users to easily recreate published results\, apply existing classifiers to new data\, and benchmark the relative performance of new methods. The use of existing Bioconductor classes as input to all PDATK classes and methods enables integration with existing Bioconductor datasets\, including the 21 pancreatic cancer patient cohorts available in the MetaGxPancreas data package. PDATK has been used to replicate results from Sandhu et al \(2019\) \[https\:\/\/doi.org\/10.1200\/cci.18.00102\] and an additional paper is in the works using CSPC to validate subtypes from the included published classifiers\, both of which use the data available in MetaGxPancreas. The inclusion of subtype centroids and prognostic gene signatures from these and other publications will enable researchers and clinicians to classify novel patient gene expression data\, allowing the direct clinical application of the classifiers included in PDATK. Overall\, PDATK provides a rich set of tools to identify and validate useful prognostic and molecular subtypes based on gene\-expression data\, benchmark new classifiers against existing ones\, and apply discovered classifiers on novel patient data to inform clinical decision making.


.. conda:package:: bioconductor-pdatk

   |downloads_bioconductor-pdatk| |docker_bioconductor-pdatk|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-consensusclusterplus: ``>=1.64.0,<1.65.0``
   :depends bioconductor-coregx: ``>=2.4.0,<2.5.0``
   :depends bioconductor-genefu: ``>=2.32.0,<2.33.0``
   :depends bioconductor-matrixgenerics: ``>=1.12.0,<1.13.0``
   :depends bioconductor-multiassayexperiment: ``>=1.26.0,<1.27.0``
   :depends bioconductor-piano: ``>=2.16.0,<2.17.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends bioconductor-survcomp: ``>=1.50.0,<1.51.0``
   :depends bioconductor-switchbox: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-caret: 
   :depends r-clusterrepro: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-ggplotify: 
   :depends r-igraph: 
   :depends r-matrixstats: 
   :depends r-plyr: 
   :depends r-proc: 
   :depends r-rcolorbrewer: 
   :depends r-reportroc: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-survival: 
   :depends r-survminer: 
   :depends r-verification: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-pdatk

   and update with::

      mamba update bioconductor-pdatk

  To create a new environment, run::

      mamba create --name myenvname bioconductor-pdatk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-pdatk:<tag>

   (see `bioconductor-pdatk/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-pdatk| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pdatk.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pdatk
   :alt:   (downloads)
.. |docker_bioconductor-pdatk| image:: https://quay.io/repository/biocontainers/bioconductor-pdatk/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pdatk
.. _`bioconductor-pdatk/tags`: https://quay.io/repository/biocontainers/bioconductor-pdatk?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pdatk";
        var versions = ["1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pdatk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pdatk/README.html
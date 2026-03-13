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

      

   
   :depends on bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends on bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends on bioconductor-consensusclusterplus: ``>=1.64.0,<1.65.0``
   :depends on bioconductor-coregx: ``>=2.4.0,<2.5.0``
   :depends on bioconductor-genefu: ``>=2.32.0,<2.33.0``
   :depends on bioconductor-matrixgenerics: ``>=1.12.0,<1.13.0``
   :depends on bioconductor-multiassayexperiment: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-piano: ``>=2.16.0,<2.17.0``
   :depends on bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-survcomp: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-switchbox: ``>=1.36.0,<1.37.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-caret: 
   :depends on r-clusterrepro: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggplotify: 
   :depends on r-igraph: 
   :depends on r-matrixstats: 
   :depends on r-plyr: 
   :depends on r-proc: 
   :depends on r-rcolorbrewer: 
   :depends on r-reportroc: 
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-survival: 
   :depends on r-survminer: 
   :depends on r-verification: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install bioconductor-pdatk

to add into an existing workspace instead, run::

    pixi add bioconductor-pdatk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-pdatk

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-pdatk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-pdatk:<tag>

(see `bioconductor-pdatk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-prone'
.. highlight: bash

bioconductor-prone
==================

.. conda:recipe:: bioconductor-prone
   :replaces_section_title:
   :noindex:

   The PROteomics Normalization Evaluator

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/PRONE.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-prone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prone/meta.yaml>`_

   High\-throughput omics data are often affected by systematic biases introduced throughout all the steps of a clinical study\, from sample collection to quantification. Normalization methods aim to adjust for these biases to make the actual biological signal more prominent. However\, selecting an appropriate normalization method is challenging due to the wide range of available approaches. Therefore\, a comparative evaluation of unnormalized and normalized data is essential in identifying an appropriate normalization strategy for a specific data set. This R package provides different functions for preprocessing\, normalizing\, and evaluating different normalization approaches. Furthermore\, normalization methods can be evaluated on downstream steps\, such as differential expression analysis and statistical enrichment analysis. Spike\-in data sets with known ground truth and real\-world data sets of biological experiments acquired by either tandem mass tag \(TMT\) or label\-free quantification \(LFQ\) can be analyzed.


.. conda:package:: bioconductor-prone

   |downloads_bioconductor-prone| |docker_bioconductor-prone|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-deqms: ``>=1.28.0,<1.29.0``
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-msnbase: ``>=2.36.0,<2.37.0``
   :depends on bioconductor-normalyzerde: ``>=1.28.0,<1.29.0``
   :depends on bioconductor-poma: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-preprocesscore: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-rots: ``>=2.2.0,<2.3.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-vsn: ``>=3.78.0,<3.79.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: 
   :depends on r-complexupset: 
   :depends on r-data.table: 
   :depends on r-dendsort: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggtext: 
   :depends on r-gprofiler2: 
   :depends on r-gtools: 
   :depends on r-magrittr: 
   :depends on r-mass: 
   :depends on r-matrixstats: 
   :depends on r-plotroc: 
   :depends on r-purrr: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-scales: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-upsetr: 
   :depends on r-vegan: 

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

    pixi global install bioconductor-prone

to add into an existing workspace instead, run::

    pixi add bioconductor-prone

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-prone

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-prone

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-prone:<tag>

(see `bioconductor-prone/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-prone| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-prone.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-prone
   :alt:   (downloads)
.. |docker_bioconductor-prone| image:: https://quay.io/repository/biocontainers/bioconductor-prone/status
   :target: https://quay.io/repository/biocontainers/bioconductor-prone
.. _`bioconductor-prone/tags`: https://quay.io/repository/biocontainers/bioconductor-prone?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-prone";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-prone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-prone/README.html
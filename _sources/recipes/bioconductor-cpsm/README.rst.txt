:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cpsm'
.. highlight: bash

bioconductor-cpsm
=================

.. conda:recipe:: bioconductor-cpsm
   :replaces_section_title:
   :noindex:

   CPSM\: Cancer patient survival model

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/CPSM.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-cpsm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cpsm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cpsm/meta.yaml>`_

   CPSM provides a comprehensive computational pipeline for predicting survival probability and risk groups in cancer patients. The package includes steps for data preprocessing\, training\/test split\, and normalization. It enables feature selection using univariate survival analysis and computes a LASSO\-based prognostic index \(PI\) score. CPSM supports the development of predictive models using various feature sets and offers a suite of visualization tools\, including survival curves based on predicted probabilities\, barplots for predicted mean and median survival times\, KM plots overlaid with individual survival predictions\, and nomograms for estimating 1\-\, 3\-\, 5\-\, and 10\-year survival probabilities. This makes CPSM a versatile tool for survival analysis in cancer research.


.. conda:package:: bioconductor-cpsm

   |downloads_bioconductor-cpsm| |docker_bioconductor-cpsm|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on bioconductor-preprocesscore: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-caret: 
   :depends on r-ggfortify: 
   :depends on r-ggplot2: 
   :depends on r-glmnet: 
   :depends on r-hmisc: 
   :depends on r-mass: 
   :depends on r-matrix: 
   :depends on r-mtlr: 
   :depends on r-randomforestsrc: 
   :depends on r-reshape2: 
   :depends on r-rms: 
   :depends on r-survival: 
   :depends on r-survmetrics: 
   :depends on r-survminer: 

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

    pixi global install bioconductor-cpsm

to add into an existing workspace instead, run::

    pixi add bioconductor-cpsm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cpsm

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cpsm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cpsm:<tag>

(see `bioconductor-cpsm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cpsm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cpsm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cpsm
   :alt:   (downloads)
.. |docker_bioconductor-cpsm| image:: https://quay.io/repository/biocontainers/bioconductor-cpsm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cpsm
.. _`bioconductor-cpsm/tags`: https://quay.io/repository/biocontainers/bioconductor-cpsm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cpsm";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cpsm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cpsm/README.html
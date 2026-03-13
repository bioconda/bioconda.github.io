:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-siamcat'
.. highlight: bash

bioconductor-siamcat
====================

.. conda:recipe:: bioconductor-siamcat
   :replaces_section_title:
   :noindex:

   Statistical Inference of Associations between Microbial Communities And host phenoTypes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SIAMCAT.html
   :license: GPL-3
   :recipe: /`bioconductor-siamcat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-siamcat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-siamcat/meta.yaml>`_

   Pipeline for Statistical Inference of Associations between Microbial Communities And host phenoTypes \(SIAMCAT\). A primary goal of analyzing microbiome data is to determine changes in community composition that are associated with environmental factors. In particular\, linking human microbiome composition to host phenotypes such as diseases has become an area of intense research. For this\, robust statistical modeling and biomarker extraction toolkits are crucially needed. SIAMCAT provides a full pipeline supporting data preprocessing\, statistical association testing\, statistical modeling \(LASSO logistic regression\) including tools for evaluation and interpretation of these models \(such as cross validation\, parameter selection\, ROC analysis and diagnostic model plots\).


.. conda:package:: bioconductor-siamcat

   |downloads_bioconductor-siamcat| |docker_bioconductor-siamcat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.14.0-0</code>,  <code>2.10.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``2.14.0-0``,  ``2.10.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-phyloseq: ``>=1.54.0,<1.55.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-beanplot: 
   :depends on r-corrplot: 
   :depends on r-glmnet: 
   :depends on r-gridbase: 
   :depends on r-gridextra: 
   :depends on r-infotheo: 
   :depends on r-lgr: 
   :depends on r-liblinear: 
   :depends on r-lmertest: 
   :depends on r-matrixstats: 
   :depends on r-mlr3: 
   :depends on r-mlr3learners: 
   :depends on r-mlr3tuning: 
   :depends on r-paradox: 
   :depends on r-proc: 
   :depends on r-progress: 
   :depends on r-prroc: 
   :depends on r-rcolorbrewer: 
   :depends on r-scales: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-siamcat

to add into an existing workspace instead, run::

    pixi add bioconductor-siamcat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-siamcat

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-siamcat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-siamcat:<tag>

(see `bioconductor-siamcat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-siamcat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-siamcat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-siamcat
   :alt:   (downloads)
.. |docker_bioconductor-siamcat| image:: https://quay.io/repository/biocontainers/bioconductor-siamcat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-siamcat
.. _`bioconductor-siamcat/tags`: https://quay.io/repository/biocontainers/bioconductor-siamcat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-siamcat";
        var versions = ["2.14.0","2.10.0","2.6.0","2.4.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-siamcat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-siamcat/README.html
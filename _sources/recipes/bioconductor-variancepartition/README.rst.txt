:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-variancepartition'
.. highlight: bash

bioconductor-variancepartition
==============================

.. conda:recipe:: bioconductor-variancepartition
   :replaces_section_title:
   :noindex:

   Quantify and interpret drivers of variation in multilevel gene expression experiments

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/variancePartition.html
   :license: GPL-2
   :recipe: /`bioconductor-variancepartition <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-variancepartition>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-variancepartition/meta.yaml>`_
   :links: biotools: :biotools:`variancepartition`

   Quantify and interpret multiple sources of biological and technical variation in gene expression experiments. Uses a linear mixed model to quantify variation in gene expression attributable to individual\, tissue\, time point\, or technical variables.  Includes dream differential expression analysis for repeated measures.


.. conda:package:: bioconductor-variancepartition

   |downloads_bioconductor-variancepartition| |docker_bioconductor-variancepartition|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.1-0</code>,  <code>1.36.2-0</code>,  <code>1.32.2-0</code>,  <code>1.30.2-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.40.1-0``,  ``1.36.2-0``,  ``1.32.2-0``,  ``1.30.2-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.14.0-1``,  ``1.12.3-0``,  ``1.12.0-0``,  ``1.10.4-0``,  ``1.8.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on r-aod: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-corpcor: 
   :depends on r-fancova: 
   :depends on r-ggplot2: 
   :depends on r-gplots: 
   :depends on r-gtools: 
   :depends on r-iterators: 
   :depends on r-lme4: ``>=1.1.33``
   :depends on r-lmertest: 
   :depends on r-mass: 
   :depends on r-matrix: ``>=1.4.0``
   :depends on r-matrixstats: 
   :depends on r-pbkrtest: ``>=0.4-4``
   :depends on r-rdpack: 
   :depends on r-reformulas: 
   :depends on r-remacor: ``>=0.0.15``
   :depends on r-reshape2: 
   :depends on r-rhpcblasctl: 
   :depends on r-rlang: 
   :depends on r-scales: 

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

    pixi global install bioconductor-variancepartition

to add into an existing workspace instead, run::

    pixi add bioconductor-variancepartition

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-variancepartition

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-variancepartition

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-variancepartition:<tag>

(see `bioconductor-variancepartition/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-variancepartition| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-variancepartition.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-variancepartition
   :alt:   (downloads)
.. |docker_bioconductor-variancepartition| image:: https://quay.io/repository/biocontainers/bioconductor-variancepartition/status
   :target: https://quay.io/repository/biocontainers/bioconductor-variancepartition
.. _`bioconductor-variancepartition/tags`: https://quay.io/repository/biocontainers/bioconductor-variancepartition?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-variancepartition";
        var versions = ["1.40.1","1.36.2","1.32.2","1.30.2","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-variancepartition/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-variancepartition/README.html
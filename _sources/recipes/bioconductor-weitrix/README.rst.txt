:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-weitrix'
.. highlight: bash

bioconductor-weitrix
====================

.. conda:recipe:: bioconductor-weitrix
   :replaces_section_title:
   :noindex:

   Tools for matrices with precision weights\, test and explore weighted or sparse data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/weitrix.html
   :license: LGPL-2.1 | file LICENSE
   :recipe: /`bioconductor-weitrix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-weitrix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-weitrix/meta.yaml>`_

   Data type and tools for working with matrices having precision weights and missing data. This package provides a common representation and tools that can be used with many types of high\-throughput data. The meaning of the weights is compatible with usage in the base R function \"lm\" and the package \"limma\". Calibrate weights to account for known predictors of precision. Find rows with excess variability. Perform differential testing and find rows with the largest confident differences. Find PCA\-like components of variation even with many missing values\, rotated so that individual components may be meaningfully interpreted. DelayedArray matrices and BiocParallel are supported.


.. conda:package:: bioconductor-weitrix

   |downloads_bioconductor-weitrix| |docker_bioconductor-weitrix|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-delayedmatrixstats: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-topconfects: ``>=1.26.0,<1.27.0``
   :depends on r-assertthat: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ckmeans.1d.dp: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-glm2: 
   :depends on r-purrr: 
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

    pixi global install bioconductor-weitrix

to add into an existing workspace instead, run::

    pixi add bioconductor-weitrix

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-weitrix

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-weitrix

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-weitrix:<tag>

(see `bioconductor-weitrix/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-weitrix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-weitrix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-weitrix
   :alt:   (downloads)
.. |docker_bioconductor-weitrix| image:: https://quay.io/repository/biocontainers/bioconductor-weitrix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-weitrix
.. _`bioconductor-weitrix/tags`: https://quay.io/repository/biocontainers/bioconductor-weitrix?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-weitrix";
        var versions = ["1.22.0","1.18.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-weitrix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-weitrix/README.html
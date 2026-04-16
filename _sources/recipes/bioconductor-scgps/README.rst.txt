:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scgps'
.. highlight: bash

bioconductor-scgps
==================

.. conda:recipe:: bioconductor-scgps
   :replaces_section_title:
   :noindex:

   A complete analysis of single cell subpopulations\, from identifying subpopulations to analysing their relationship \(scGPS \= single cell Global Predictions of Subpopulation\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scGPS.html
   :license: GPL-3
   :recipe: /`bioconductor-scgps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scgps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scgps/meta.yaml>`_

   The package implements two main algorithms to answer two key questions\: a SCORE \(Stable Clustering at Optimal REsolution\) to find subpopulations\, followed by scGPS to investigate the relationships between subpopulations.


.. conda:package:: bioconductor-scgps

   |downloads_bioconductor-scgps| |docker_bioconductor-scgps|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.1-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.8.0-2</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.8.0-2``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-deseq2: ``>=1.50.2,<1.51.0a0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0a0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-caret: ``>=6.0``
   :depends on r-dplyr: 
   :depends on r-dynamictreecut: 
   :depends on r-fastcluster: 
   :depends on r-ggplot2: ``>=2.2.1``
   :depends on r-glmnet: ``>2.0``
   :depends on r-locfit: 
   :depends on r-rcpp: 
   :depends on r-rcpparmadillo: 
   :depends on r-rcppparallel: 
   :depends on tbb-devel: ``>=2022.3.0,<2022.4.0a0``

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

    pixi global install bioconductor-scgps

to add into an existing workspace instead, run::

    pixi add bioconductor-scgps

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-scgps

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-scgps

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-scgps:<tag>

(see `bioconductor-scgps/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-scgps| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scgps.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scgps
   :alt:   (downloads)
.. |docker_bioconductor-scgps| image:: https://quay.io/repository/biocontainers/bioconductor-scgps/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scgps
.. _`bioconductor-scgps/tags`: https://quay.io/repository/biocontainers/bioconductor-scgps?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scgps";
        var versions = ["1.24.0","1.20.0","1.16.0","1.14.1","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scgps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scgps/README.html
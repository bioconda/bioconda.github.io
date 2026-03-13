:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-muscat'
.. highlight: bash

bioconductor-muscat
===================

.. conda:recipe:: bioconductor-muscat
   :replaces_section_title:
   :noindex:

   Multi\-sample multi\-group scRNA\-seq data analysis tools

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/muscat.html
   :license: GPL-3
   :recipe: /`bioconductor-muscat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-muscat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-muscat/meta.yaml>`_

   \`muscat\` provides various methods and visualization tools for DS analysis in multi\-sample\, multi\-group\, multi\-\(cell\-\)subpopulation scRNA\-seq data\, including cell\-level mixed models and methods based on aggregated “pseudobulk” data\, as well as a flexible simulation platform that mimics both single and multi\-sample scRNA\-seq data.


.. conda:package:: bioconductor-muscat

   |downloads_bioconductor-muscat| |docker_bioconductor-muscat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-1</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-ihw: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-scater: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-scuttle: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-variancepartition: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-blme: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-glmmtmb: 
   :depends on r-lme4: 
   :depends on r-lmertest: 
   :depends on r-matrix: 
   :depends on r-matrixstats: 
   :depends on r-progress: 
   :depends on r-purrr: 
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-sctransform: 

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

    pixi global install bioconductor-muscat

to add into an existing workspace instead, run::

    pixi add bioconductor-muscat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-muscat

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-muscat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-muscat:<tag>

(see `bioconductor-muscat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-muscat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-muscat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-muscat
   :alt:   (downloads)
.. |docker_bioconductor-muscat| image:: https://quay.io/repository/biocontainers/bioconductor-muscat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-muscat
.. _`bioconductor-muscat/tags`: https://quay.io/repository/biocontainers/bioconductor-muscat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-muscat";
        var versions = ["1.24.0","1.16.0","1.14.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-muscat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-muscat/README.html
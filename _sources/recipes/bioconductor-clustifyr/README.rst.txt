:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clustifyr'
.. highlight: bash

bioconductor-clustifyr
======================

.. conda:recipe:: bioconductor-clustifyr
   :replaces_section_title:
   :noindex:

   Classifier for Single\-cell RNA\-seq Using Cell Clusters

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/clustifyr.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-clustifyr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clustifyr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clustifyr/meta.yaml>`_

   Package designed to aid in classifying cells from single\-cell RNA sequencing data using external reference data \(e.g.\, bulk RNA\-seq\, scRNA\-seq\, microarray\, gene lists\). A variety of correlation based methods and gene list enrichment methods are provided to assist cell type assignment.


.. conda:package:: bioconductor-clustifyr

   |downloads_bioconductor-clustifyr| |docker_bioconductor-clustifyr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.5.1-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.5.1-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-fgsea: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cowplot: 
   :depends on r-dplyr: 
   :depends on r-entropy: 
   :depends on r-ggplot2: 
   :depends on r-httr: 
   :depends on r-matrix: 
   :depends on r-matrixstats: 
   :depends on r-proxy: 
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-seuratobject: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-clustifyr

to add into an existing workspace instead, run::

    pixi add bioconductor-clustifyr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-clustifyr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-clustifyr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-clustifyr:<tag>

(see `bioconductor-clustifyr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-clustifyr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clustifyr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clustifyr
   :alt:   (downloads)
.. |docker_bioconductor-clustifyr| image:: https://quay.io/repository/biocontainers/bioconductor-clustifyr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clustifyr
.. _`bioconductor-clustifyr/tags`: https://quay.io/repository/biocontainers/bioconductor-clustifyr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-clustifyr";
        var versions = ["1.22.0","1.18.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clustifyr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clustifyr/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mixomics'
.. highlight: bash

bioconductor-mixomics
=====================

.. conda:recipe:: bioconductor-mixomics
   :replaces_section_title:
   :noindex:

   Omics Data Integration Project

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/mixOmics.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mixomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mixomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mixomics/meta.yaml>`_

   Multivariate methods are well suited to large omics data sets where the number of variables \(e.g. genes\, proteins\, metabolites\) is much larger than the number of samples \(patients\, cells\, mice\). They have the appealing properties of reducing the dimension of the data by using instrumental variables \(components\)\, which are defined as combinations of all variables. Those components are then used to produce useful graphical outputs that enable better understanding of the relationships and correlation structures between the different data sets that are integrated. mixOmics offers a wide range of multivariate methods for the exploration and integration of biological datasets with a particular focus on variable selection. The package proposes several sparse multivariate models we have developed to identify the key variables that are highly correlated\, and\/or explain the biological outcome of interest. The data that can be analysed with mixOmics may come from high throughput sequencing technologies\, such as omics data \(transcriptomics\, metabolomics\, proteomics\, metagenomics etc\) but also beyond the realm of omics \(e.g. spectral imaging\). The methods implemented in mixOmics can also handle missing values without having to delete entire rows with missing data. A non exhaustive list of methods include variants of generalised Canonical Correlation Analysis\, sparse Partial Least Squares and sparse Discriminant Analysis. Recently we implemented integrative methods to combine multiple data sets\: N\-integration with variants of Generalised Canonical Correlation Analysis and P\-integration with variants of multi\-group Partial Least Squares.


.. conda:package:: bioconductor-mixomics

   |downloads_bioconductor-mixomics| |docker_bioconductor-mixomics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>6.34.0-0</code>,  <code>6.30.0-0</code>,  <code>6.26.0-0</code>,  <code>6.24.0-0</code>,  <code>6.22.0-0</code>,  <code>6.17.26-0</code>,  <code>6.16.0-0</code>,  <code>6.14.0-1</code>,  <code>6.14.0-0</code>,  </span></summary>
      

      ``6.34.0-0``,  ``6.30.0-0``,  ``6.26.0-0``,  ``6.24.0-0``,  ``6.22.0-0``,  ``6.17.26-0``,  ``6.16.0-0``,  ``6.14.0-1``,  ``6.14.0-0``,  ``6.12.0-0``,  ``6.10.1-0``,  ``6.8.0-1``,  ``6.8.0-0``,  ``6.6.2-0``,  ``6.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-corpcor: 
   :depends on r-dplyr: 
   :depends on r-ellipse: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-gridextra: 
   :depends on r-gsignal: 
   :depends on r-igraph: 
   :depends on r-lattice: 
   :depends on r-mass: 
   :depends on r-matrixstats: 
   :depends on r-rarpack: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-rgl: 
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

    pixi global install bioconductor-mixomics

to add into an existing workspace instead, run::

    pixi add bioconductor-mixomics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mixomics

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mixomics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mixomics:<tag>

(see `bioconductor-mixomics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mixomics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mixomics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mixomics
   :alt:   (downloads)
.. |docker_bioconductor-mixomics| image:: https://quay.io/repository/biocontainers/bioconductor-mixomics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mixomics
.. _`bioconductor-mixomics/tags`: https://quay.io/repository/biocontainers/bioconductor-mixomics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mixomics";
        var versions = ["6.34.0","6.30.0","6.26.0","6.24.0","6.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mixomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mixomics/README.html
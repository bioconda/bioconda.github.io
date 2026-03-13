:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-omicspca'
.. highlight: bash

bioconductor-omicspca
=====================

.. conda:recipe:: bioconductor-omicspca
   :replaces_section_title:
   :noindex:

   An R package for quantitative integration and analysis of multiple omics assays from heterogeneous samples

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/OMICsPCA.html
   :license: GPL-3
   :recipe: /`bioconductor-omicspca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicspca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-omicspca/meta.yaml>`_

   OMICsPCA is an analysis pipeline designed to integrate multi OMICs experiments done on various subjects \(e.g. Cell lines\, individuals\)\, treatments \(e.g. disease\/control\) or time points and to analyse such integrated data from various various angles and perspectives. In it\'s core OMICsPCA uses Principal Component Analysis \(PCA\) to integrate multiomics experiments from various sources and thus has ability to over data insufficiency issues by using the ingegrated data as representatives. OMICsPCA can be used in various application including analysis of overall distribution of OMICs assays across various samples \/individuals \/time points\; grouping assays by user\-defined conditions\; identification of source of variation\, similarity\/dissimilarity between assays\, variables or individuals.


.. conda:package:: bioconductor-omicspca

   |downloads_bioconductor-omicspca| |docker_bioconductor-omicspca|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.5.0-0``,  ``1.2.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-helloranges: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-omicspcadata: ``>=1.28.0,<1.29.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cluster: 
   :depends on r-clvalid: 
   :depends on r-corrplot: 
   :depends on r-cowplot: 
   :depends on r-data.table: 
   :depends on r-factoextra: 
   :depends on r-factominer: 
   :depends on r-fpc: 
   :depends on r-ggplot2: 
   :depends on r-kableextra: 
   :depends on r-magick: 
   :depends on r-mass: 
   :depends on r-nbclust: 
   :depends on r-pdftools: 
   :depends on r-performanceanalytics: 
   :depends on r-reshape2: 
   :depends on r-rgl: 
   :depends on r-rmarkdown: 
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

    pixi global install bioconductor-omicspca

to add into an existing workspace instead, run::

    pixi add bioconductor-omicspca

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-omicspca

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-omicspca

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-omicspca:<tag>

(see `bioconductor-omicspca/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-omicspca| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-omicspca.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-omicspca
   :alt:   (downloads)
.. |docker_bioconductor-omicspca| image:: https://quay.io/repository/biocontainers/bioconductor-omicspca/status
   :target: https://quay.io/repository/biocontainers/bioconductor-omicspca
.. _`bioconductor-omicspca/tags`: https://quay.io/repository/biocontainers/bioconductor-omicspca?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-omicspca";
        var versions = ["1.28.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-omicspca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-omicspca/README.html
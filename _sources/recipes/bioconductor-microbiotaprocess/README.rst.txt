:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-microbiotaprocess'
.. highlight: bash

bioconductor-microbiotaprocess
==============================

.. conda:recipe:: bioconductor-microbiotaprocess
   :replaces_section_title:
   :noindex:

   A comprehensive R package for managing and analyzing microbiome and other ecological data within the tidy framework

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MicrobiotaProcess.html
   :license: GPL (>= 3.0)
   :recipe: /`bioconductor-microbiotaprocess <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiotaprocess>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-microbiotaprocess/meta.yaml>`_

   MicrobiotaProcess is an R package for analysis\, visualization and biomarker discovery of microbial datasets. It introduces MPSE class\, this make it more interoperable with the existing computing ecosystem. Moreover\, it introduces a tidy microbiome data structure paradigm and analysis grammar. It provides a wide variety of microbiome data analysis procedures under the unified and common framework \(tidy\-like framework\).


.. conda:package:: bioconductor-microbiotaprocess

   |downloads_bioconductor-microbiotaprocess| |docker_bioconductor-microbiotaprocess|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.2-0</code>,  <code>1.10.0-0</code>,  <code>1.6.1-0</code>,  <code>1.4.0-0</code>,  <code>1.2.1-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.2-0``,  ``1.10.0-0``,  ``1.6.1-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-ggtree: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-ggtreeextra: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-treeio: ``>=1.34.0,<1.35.0``
   :depends on r-ape: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cli: 
   :depends on r-coin: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-dtplyr: 
   :depends on r-foreach: 
   :depends on r-ggfun: ``>=0.1.1``
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-ggsignif: 
   :depends on r-ggstar: 
   :depends on r-magrittr: 
   :depends on r-mass: 
   :depends on r-patchwork: 
   :depends on r-pillar: 
   :depends on r-plyr: 
   :depends on r-rlang: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-tidyselect: 
   :depends on r-tidytree: ``>=0.4.2``
   :depends on r-vegan: 
   :depends on r-zoo: 

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

    pixi global install bioconductor-microbiotaprocess

to add into an existing workspace instead, run::

    pixi add bioconductor-microbiotaprocess

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-microbiotaprocess

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-microbiotaprocess

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-microbiotaprocess:<tag>

(see `bioconductor-microbiotaprocess/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-microbiotaprocess| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-microbiotaprocess.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-microbiotaprocess
   :alt:   (downloads)
.. |docker_bioconductor-microbiotaprocess| image:: https://quay.io/repository/biocontainers/bioconductor-microbiotaprocess/status
   :target: https://quay.io/repository/biocontainers/bioconductor-microbiotaprocess
.. _`bioconductor-microbiotaprocess/tags`: https://quay.io/repository/biocontainers/bioconductor-microbiotaprocess?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-microbiotaprocess";
        var versions = ["1.22.0","1.18.0","1.14.0","1.12.2","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-microbiotaprocess/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-microbiotaprocess/README.html
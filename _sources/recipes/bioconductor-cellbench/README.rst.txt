:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellbench'
.. highlight: bash

bioconductor-cellbench
======================

.. conda:recipe:: bioconductor-cellbench
   :replaces_section_title:
   :noindex:

   Construct Benchmarks for Single Cell Analysis Methods

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CellBench.html
   :license: GPL-3
   :recipe: /`bioconductor-cellbench <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellbench>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellbench/meta.yaml>`_

   This package contains infrastructure for benchmarking analysis methods and access to single cell mixture benchmarking data. It provides a framework for organising analysis methods and testing combinations of methods in a pipeline without explicitly laying out each combination. It also provides utilities for sampling and filtering SingleCellExperiment objects\, constructing lists of functions with varying parameters\, and multithreaded evaluation of analysis methods.


.. conda:package:: bioconductor-cellbench

   |downloads_bioconductor-cellbench| |docker_bioconductor-cellbench|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on r-assertthat: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-glue: 
   :depends on r-lubridate: 
   :depends on r-magrittr: 
   :depends on r-memoise: 
   :depends on r-purrr: ``>=0.3.0``
   :depends on r-rappdirs: 
   :depends on r-rlang: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-tidyselect: 

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

    pixi global install bioconductor-cellbench

to add into an existing workspace instead, run::

    pixi add bioconductor-cellbench

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cellbench

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cellbench

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cellbench:<tag>

(see `bioconductor-cellbench/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cellbench| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellbench.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellbench
   :alt:   (downloads)
.. |docker_bioconductor-cellbench| image:: https://quay.io/repository/biocontainers/bioconductor-cellbench/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellbench
.. _`bioconductor-cellbench/tags`: https://quay.io/repository/biocontainers/bioconductor-cellbench?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cellbench";
        var versions = ["1.26.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellbench/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellbench/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-signac'
.. highlight: bash

r-signac
========

.. conda:recipe:: r-signac
   :replaces_section_title:
   :noindex:

   A framework for the analysis and exploration of single\-cell chromatin data. The \'Signac\' package contains functions for quantifying single\-cell chromatin data\, computing per\-cell quality control metrics\, dimension reduction and normalization\, visualization\, and DNA sequence motif analysis.

   :homepage: https://github.com/timoast/signac
   :documentation: https://satijalab.org/signac
   
   :license: MIT / MIT
   :recipe: /`r-signac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-signac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-signac/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.cell.2019.05.031`

   


.. conda:package:: r-signac

   |downloads_r-signac| |docker_r-signac|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.15.0-0</code>,  <code>1.14.0-2</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.13.0-1</code>,  <code>1.13.0-0</code>,  <code>1.12.0-0</code>,  <code>1.11.0-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.15.0-0``,  ``1.14.0-2``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.13.0-1``,  ``1.13.0-0``,  ``1.12.0-0``,  ``1.11.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.0-2``,  ``1.9.0-1``,  ``1.9.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.7.0-1``,  ``1.7.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends on bioconductor-genomeinfodb: ``>=1.29.3``
   :depends on bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0a0``
   :depends on bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends on bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends on bioconductor-rsamtools: ``>=2.22.0,<2.23.0a0``
   :depends on bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: ``>=1.0.0``
   :depends on r-fastmatch: 
   :depends on r-future: 
   :depends on r-future.apply: 
   :depends on r-ggplot2: 
   :depends on r-irlba: 
   :depends on r-matrix: 
   :depends on r-patchwork: 
   :depends on r-pbapply: 
   :depends on r-rcpp: 
   :depends on r-rcpproll: 
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-seuratobject: ``>=5.0.2``
   :depends on r-stringi: 
   :depends on r-tidyr: 
   :depends on r-tidyselect: 
   :depends on r-vctrs: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install r-signac

to add into an existing workspace instead, run::

    pixi add r-signac

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-signac

Alternatively, to install into a new environment, run::

    conda create -n envname r-signac

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-signac:<tag>

(see `r-signac/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-signac| image:: https://img.shields.io/conda/dn/bioconda/r-signac.svg?style=flat
   :target: https://anaconda.org/bioconda/r-signac
   :alt:   (downloads)
.. |docker_r-signac| image:: https://quay.io/repository/biocontainers/r-signac/status
   :target: https://quay.io/repository/biocontainers/r-signac
.. _`r-signac/tags`: https://quay.io/repository/biocontainers/r-signac?tab=tags


.. raw:: html

    <script>
        var package = "r-signac";
        var versions = ["1.16.0","1.15.0","1.14.0","1.14.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-signac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-signac/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-waddr'
.. highlight: bash

bioconductor-waddr
==================

.. conda:recipe:: bioconductor-waddr
   :replaces_section_title:
   :noindex:

   Statistical tests for detecting differential distributions based on the 2\-Wasserstein distance

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/waddR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-waddr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-waddr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-waddr/meta.yaml>`_

   The package offers statistical tests based on the 2\-Wasserstein distance for detecting and characterizing differences between two distributions given in the form of samples. Functions for calculating the 2\-Wasserstein distance and testing for differential distributions are provided\, as well as a specifically tailored test for differential expression in single\-cell RNA sequencing data.


.. conda:package:: bioconductor-waddr

   |downloads_bioconductor-waddr| |docker_bioconductor-waddr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.8.0-2</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.8.0-2``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.1-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0a0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-arm: ``>=1.10-1``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-eva: 
   :depends on r-rcpp: ``>=1.0.1``
   :depends on r-rcpparmadillo: 

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

    pixi global install bioconductor-waddr

to add into an existing workspace instead, run::

    pixi add bioconductor-waddr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-waddr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-waddr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-waddr:<tag>

(see `bioconductor-waddr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-waddr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-waddr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-waddr
   :alt:   (downloads)
.. |docker_bioconductor-waddr| image:: https://quay.io/repository/biocontainers/bioconductor-waddr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-waddr
.. _`bioconductor-waddr/tags`: https://quay.io/repository/biocontainers/bioconductor-waddr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-waddr";
        var versions = ["1.24.0","1.20.0","1.16.0","1.14.0","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-waddr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-waddr/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-kebabs'
.. highlight: bash

bioconductor-kebabs
===================

.. conda:recipe:: bioconductor-kebabs
   :replaces_section_title:
   :noindex:

   Kernel\-Based Analysis of Biological Sequences

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/kebabs.html
   :license: GPL (>= 2.1)
   :recipe: /`bioconductor-kebabs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kebabs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kebabs/meta.yaml>`_
   :links: biotools: :biotools:`kebabs`

   The package provides functionality for kernel\-based analysis of DNA\, RNA\, and amino acid sequences via SVM\-based methods. As core functionality\, kebabs implements following sequence kernels\: spectrum kernel\, mismatch kernel\, gappy pair kernel\, and motif kernel. Apart from an efficient implementation of standard position\-independent functionality\, the kernels are extended in a novel way to take the position of patterns into account for the similarity measure. Because of the flexibility of the kernel formulation\, other kernels like the weighted degree kernel or the shifted weighted degree kernel with constant weighting of positions are included as special cases. An annotation\-specific variant of the kernels uses annotation information placed along the sequence together with the patterns in the sequence. The package allows for the generation of a kernel matrix or an explicit feature representation in dense or sparse format for all available kernels which can be used with methods implemented in other R packages. With focus on SVM\-based methods\, kebabs provides a framework which simplifies the usage of existing SVM implementations in kernlab\, e1071\, and LiblineaR. Binary and multi\-class classification as well as regression tasks can be used in a unified way without having to deal with the different functions\, parameters\, and formats of the selected SVM. As support for choosing hyperparameters\, the package provides cross validation \- including grouped cross validation\, grid search and model selection functions. For easier biological interpretation of the results\, the package computes feature weights for all SVMs and prediction profiles which show the contribution of individual sequence positions to the prediction result and indicate the relevance of sequence sections for the learning result and the underlying biological functions.


.. conda:package:: bioconductor-kebabs

   |downloads_bioconductor-kebabs| |docker_bioconductor-kebabs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.28.1-1</code>,  <code>1.28.1-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.28.1-1``,  ``1.28.1-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on bioconductor-xvector: ``>=0.50.0,<0.51.0``
   :depends on bioconductor-xvector: ``>=0.50.0,<0.51.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-apcluster: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-e1071: 
   :depends on r-kernlab: 
   :depends on r-liblinear: 
   :depends on r-matrix: ``>=1.5-0``
   :depends on r-rcpp: ``>=0.11.2``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install bioconductor-kebabs

to add into an existing workspace instead, run::

    pixi add bioconductor-kebabs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-kebabs

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-kebabs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-kebabs:<tag>

(see `bioconductor-kebabs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-kebabs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-kebabs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-kebabs
   :alt:   (downloads)
.. |docker_bioconductor-kebabs| image:: https://quay.io/repository/biocontainers/bioconductor-kebabs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-kebabs
.. _`bioconductor-kebabs/tags`: https://quay.io/repository/biocontainers/bioconductor-kebabs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-kebabs";
        var versions = ["1.44.0","1.40.0","1.36.0","1.36.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-kebabs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-kebabs/README.html
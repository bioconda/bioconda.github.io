:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lemur'
.. highlight: bash

bioconductor-lemur
==================

.. conda:recipe:: bioconductor-lemur
   :replaces_section_title:
   :noindex:

   Latent Embedding Multivariate Regression

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/lemur.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-lemur <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lemur>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lemur/meta.yaml>`_

   Fit a latent embedding multivariate regression \(LEMUR\) model to multi\-condition single\-cell data. The model provides a parametric description of single\-cell data measured with treatment vs. control or more complex experimental designs. The parametric model is used to \(1\) align conditions\, \(2\) predict log fold changes between conditions for all cells\, and \(3\) identify cell neighborhoods with consistent log fold changes. For those neighborhoods\, a pseudobulked differential expression test is conducted to assess which genes are significantly changed.


.. conda:package:: bioconductor-lemur

   |downloads_bioconductor-lemur| |docker_bioconductor-lemur|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.4-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on bioconductor-biocneighbors: ``>=2.4.0,<2.5.0``
   :depends on bioconductor-biocneighbors: ``>=2.4.0,<2.5.0a0``
   :depends on bioconductor-delayedmatrixstats: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-delayedmatrixstats: ``>=1.32.0,<1.33.0a0``
   :depends on bioconductor-glmgampoi: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-glmgampoi: ``>=1.22.0,<1.23.0a0``
   :depends on bioconductor-hdf5array: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-hdf5array: ``>=1.38.0,<1.39.0a0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0a0``
   :depends on bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
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
   :depends on r-harmony: ``>=1.2.0``
   :depends on r-irlba: 
   :depends on r-matrix: 
   :depends on r-matrixstats: 
   :depends on r-rcpp: 
   :depends on r-rcpparmadillo: 
   :depends on r-rlang: ``>=1.1.0``
   :depends on r-vctrs: ``>=0.6.0``

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

    pixi global install bioconductor-lemur

to add into an existing workspace instead, run::

    pixi add bioconductor-lemur

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-lemur

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-lemur

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-lemur:<tag>

(see `bioconductor-lemur/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-lemur| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lemur.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lemur
   :alt:   (downloads)
.. |docker_bioconductor-lemur| image:: https://quay.io/repository/biocontainers/bioconductor-lemur/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lemur
.. _`bioconductor-lemur/tags`: https://quay.io/repository/biocontainers/bioconductor-lemur?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lemur";
        var versions = ["1.8.0","1.4.0","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lemur/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lemur/README.html
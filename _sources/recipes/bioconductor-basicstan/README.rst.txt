:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-basicstan'
.. highlight: bash

bioconductor-basicstan
======================

.. conda:recipe:: bioconductor-basicstan
   :replaces_section_title:
   :noindex:

   Stan implementation of BASiCS

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BASiCStan.html
   :license: GPL-3
   :recipe: /`bioconductor-basicstan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basicstan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-basicstan/meta.yaml>`_

   Provides an interface to infer the parameters of BASiCS using the variational inference \(ADVI\)\, Markov chain Monte Carlo \(NUTS\)\, and maximum a posteriori \(BFGS\) inference engines in the Stan programming language. BASiCS is a Bayesian hierarchical model that uses an adaptive Metropolis within Gibbs sampling scheme. Alternative inference methods provided by Stan may be preferable in some situations\, for example for particularly large data or posterior distributions with difficult geometries.


.. conda:package:: bioconductor-basicstan

   |downloads_bioconductor-basicstan| |docker_bioconductor-basicstan|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-basics: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-basics: ``>=2.22.0,<2.23.0a0``
   :depends on bioconductor-glmgampoi: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-glmgampoi: ``>=1.22.0,<1.23.0a0``
   :depends on bioconductor-scran: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-scran: ``>=1.38.0,<1.39.0a0``
   :depends on bioconductor-scuttle: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-scuttle: ``>=1.20.0,<1.21.0a0``
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
   :depends on r-bh: ``>=1.66.0``
   :depends on r-rcpp: ``>=0.12.0``
   :depends on r-rcppeigen: ``>=0.3.3.3.0``
   :depends on r-rcppparallel: ``>=5.0.1``
   :depends on r-rstan: ``>=2.18.1``
   :depends on r-rstantools: ``>=2.1.1``
   :depends on r-stanheaders: ``>=2.18.0``
   :depends on tbb-devel: ``>=2022.3.0,<2022.4.0a0``

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

    pixi global install bioconductor-basicstan

to add into an existing workspace instead, run::

    pixi add bioconductor-basicstan

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-basicstan

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-basicstan

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-basicstan:<tag>

(see `bioconductor-basicstan/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-basicstan| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-basicstan.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-basicstan
   :alt:   (downloads)
.. |docker_bioconductor-basicstan| image:: https://quay.io/repository/biocontainers/bioconductor-basicstan/status
   :target: https://quay.io/repository/biocontainers/bioconductor-basicstan
.. _`bioconductor-basicstan/tags`: https://quay.io/repository/biocontainers/bioconductor-basicstan?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-basicstan";
        var versions = ["1.12.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-basicstan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-basicstan/README.html
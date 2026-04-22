:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sclane'
.. highlight: bash

bioconductor-sclane
===================

.. conda:recipe:: bioconductor-sclane
   :replaces_section_title:
   :noindex:

   Model Gene Expression Dynamics with Spline\-Based NB GLMs\, GEEs\, \& GLMMs

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/scLANE.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-sclane <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sclane>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sclane/meta.yaml>`_

   Our scLANE model uses truncated power basis spline models to build flexible\, interpretable models of single cell gene expression over pseudotime or latent time. The modeling architectures currently supported are Negative\-binomial GLMs\, GEEs\, \& GLMMs. Downstream analysis functionalities include model comparison\, dynamic gene clustering\, smoothed counts generation\, gene set enrichment testing\, \& visualization.


.. conda:package:: bioconductor-sclane

   |downloads_bioconductor-sclane| |docker_bioconductor-sclane|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bigstatsr: 
   :depends on r-broom.mixed: 
   :depends on r-dosnow: 
   :depends on r-dplyr: 
   :depends on r-foreach: 
   :depends on r-furrr: 
   :depends on r-future: 
   :depends on r-gamlss: 
   :depends on r-geem: 
   :depends on r-ggplot2: 
   :depends on r-glm2: 
   :depends on r-glmmtmb: 
   :depends on r-magrittr: 
   :depends on r-mass: 
   :depends on r-matrix: 
   :depends on r-mpath: 
   :depends on r-purrr: 
   :depends on r-rcpp: 
   :depends on r-rcppeigen: 
   :depends on r-scales: 
   :depends on r-tidyr: 
   :depends on r-tidyselect: 
   :depends on r-withr: 

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

    pixi global install bioconductor-sclane

to add into an existing workspace instead, run::

    pixi add bioconductor-sclane

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-sclane

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-sclane

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-sclane:<tag>

(see `bioconductor-sclane/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-sclane| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sclane.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sclane
   :alt:   (downloads)
.. |docker_bioconductor-sclane| image:: https://quay.io/repository/biocontainers/bioconductor-sclane/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sclane
.. _`bioconductor-sclane/tags`: https://quay.io/repository/biocontainers/bioconductor-sclane?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sclane";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sclane/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sclane/README.html
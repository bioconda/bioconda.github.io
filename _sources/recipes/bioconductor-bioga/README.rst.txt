:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bioga'
.. highlight: bash

bioconductor-bioga
==================

.. conda:recipe:: bioconductor-bioga
   :replaces_section_title:
   :noindex:

   Bioinformatics Genetic Algorithm \(BioGA\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BioGA.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-bioga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bioga/meta.yaml>`_

   Genetic algorithm are a class of optimization algorithms inspired by the process of natural selection and genetics. This package allows users to analyze and optimize high throughput genomic data using genetic algorithms.  The functions provided are implemented in C\+\+ for improved speed and efficiency\, with an easy\-to\-use interface for use within R.


.. conda:package:: bioconductor-bioga

   |downloads_bioconductor-bioga| |docker_bioconductor-bioga|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocstyle: ``>=2.38.0,<2.39.0``
   :depends on bioconductor-biocstyle: ``>=2.38.0,<2.39.0a0``
   :depends on bioconductor-biocviews: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-biocviews: ``>=1.78.0,<1.79.0a0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-animation: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-rcpp: 
   :depends on r-rlang: 
   :depends on r-sessioninfo: 

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

    pixi global install bioconductor-bioga

to add into an existing workspace instead, run::

    pixi add bioconductor-bioga

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bioga

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bioga

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bioga:<tag>

(see `bioconductor-bioga/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bioga| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bioga.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bioga
   :alt:   (downloads)
.. |docker_bioconductor-bioga| image:: https://quay.io/repository/biocontainers/bioconductor-bioga/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bioga
.. _`bioconductor-bioga/tags`: https://quay.io/repository/biocontainers/bioconductor-bioga?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bioga";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bioga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bioga/README.html
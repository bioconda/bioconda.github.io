:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gars'
.. highlight: bash

bioconductor-gars
=================

.. conda:recipe:: bioconductor-gars
   :replaces_section_title:
   :noindex:

   GARS\: Genetic Algorithm for the identification of Robust Subsets of variables in high\-dimensional and challenging datasets

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GARS.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-gars <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gars>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gars/meta.yaml>`_

   Feature selection aims to identify and remove redundant\, irrelevant and noisy variables from high\-dimensional datasets. Selecting informative features affects the subsequent classification and regression analyses by improving their overall performances. Several methods have been proposed to perform feature selection\: most of them relies on univariate statistics\, correlation\, entropy measurements or the usage of backward\/forward regressions. Herein\, we propose an efficient\, robust and fast method that adopts stochastic optimization approaches for high\-dimensional. GARS is an innovative implementation of a genetic algorithm that selects robust features in high\-dimensional and challenging datasets.


.. conda:package:: bioconductor-gars

   |downloads_bioconductor-gars| |docker_bioconductor-gars|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-damirseq: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-mlseq: ``>=2.28.0,<2.29.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cluster: 
   :depends on r-ggplot2: 

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

    pixi global install bioconductor-gars

to add into an existing workspace instead, run::

    pixi add bioconductor-gars

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gars

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gars

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gars:<tag>

(see `bioconductor-gars/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gars| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gars.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gars
   :alt:   (downloads)
.. |docker_bioconductor-gars| image:: https://quay.io/repository/biocontainers/bioconductor-gars/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gars
.. _`bioconductor-gars/tags`: https://quay.io/repository/biocontainers/bioconductor-gars?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gars";
        var versions = ["1.30.0","1.26.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gars/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gars/README.html
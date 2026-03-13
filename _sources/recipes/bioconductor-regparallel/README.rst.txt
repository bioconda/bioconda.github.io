:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-regparallel'
.. highlight: bash

bioconductor-regparallel
========================

.. conda:recipe:: bioconductor-regparallel
   :replaces_section_title:
   :noindex:

   Standard regression functions in R enabled for parallel processing over large data\-frames

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/RegParallel.html
   :license: GPL-3
   :recipe: /`bioconductor-regparallel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regparallel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-regparallel/meta.yaml>`_

   In many analyses\, a large amount of variables have to be tested independently against the trait\/endpoint of interest\, and also adjusted for covariates and confounding factors at the same time. The major bottleneck in these is the amount of time that it takes to complete these analyses. With RegParallel\, a large number of tests can be performed simultaneously. On a 12\-core system\, 144 variables can be tested simultaneously\, with 1000s of variables processed in a matter of seconds via \'nested\' parallel processing. Works for logistic regression\, linear regression\, conditional logistic regression\, Cox proportional hazards and survival models\, and Bayesian logistic regression. Also caters for generalised linear models that utilise survey weights created by the \'survey\' CRAN package and that utilise \'survey\:\:svyglm\'.


.. conda:package:: bioconductor-regparallel

   |downloads_bioconductor-regparallel| |docker_bioconductor-regparallel|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.15.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.15.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.7.6-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on curl: 
   :depends on r-arm: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-doparallel: 
   :depends on r-foreach: 
   :depends on r-iterators: 
   :depends on r-stringr: 
   :depends on r-survival: 

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

    pixi global install bioconductor-regparallel

to add into an existing workspace instead, run::

    pixi add bioconductor-regparallel

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-regparallel

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-regparallel

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-regparallel:<tag>

(see `bioconductor-regparallel/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-regparallel| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-regparallel.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-regparallel
   :alt:   (downloads)
.. |docker_bioconductor-regparallel| image:: https://quay.io/repository/biocontainers/bioconductor-regparallel/status
   :target: https://quay.io/repository/biocontainers/bioconductor-regparallel
.. _`bioconductor-regparallel/tags`: https://quay.io/repository/biocontainers/bioconductor-regparallel?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-regparallel";
        var versions = ["1.28.0","1.24.0","1.20.0","1.18.0","1.15.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-regparallel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-regparallel/README.html
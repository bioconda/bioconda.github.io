:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sparsenetgls'
.. highlight: bash

bioconductor-sparsenetgls
=========================

.. conda:recipe:: bioconductor-sparsenetgls
   :replaces_section_title:
   :noindex:

   Using Gaussian graphical structue learning estimation in generalized least squared regression for multivariate normal regression

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/sparsenetgls.html
   :license: GPL-3
   :recipe: /`bioconductor-sparsenetgls <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sparsenetgls>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sparsenetgls/meta.yaml>`_

   The package provides methods of combining the graph structure learning and generalized least squares regression to improve the regression estimation. The main function sparsenetgls\(\) provides solutions for multivariate regression with Gaussian distributed dependant variables and explanatory variables utlizing multiple well\-known graph structure learning approaches to estimating the precision matrix\, and uses a penalized variance covariance matrix with a distance tuning parameter of the graph structure in deriving the sandwich estimators in generalized least squares \(gls\) regression. This package also provides functions for assessing a Gaussian graphical model which uses the penalized approach. It uses Receiver Operative Characteristics curve as a visualization tool in the assessment.


.. conda:package:: bioconductor-sparsenetgls

   |downloads_bioconductor-sparsenetgls| |docker_bioconductor-sparsenetgls|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-glmnet: 
   :depends on r-huge: 
   :depends on r-mass: 
   :depends on r-matrix: 

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

    pixi global install bioconductor-sparsenetgls

to add into an existing workspace instead, run::

    pixi add bioconductor-sparsenetgls

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-sparsenetgls

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-sparsenetgls

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-sparsenetgls:<tag>

(see `bioconductor-sparsenetgls/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-sparsenetgls| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sparsenetgls.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sparsenetgls
   :alt:   (downloads)
.. |docker_bioconductor-sparsenetgls| image:: https://quay.io/repository/biocontainers/bioconductor-sparsenetgls/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sparsenetgls
.. _`bioconductor-sparsenetgls/tags`: https://quay.io/repository/biocontainers/bioconductor-sparsenetgls?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sparsenetgls";
        var versions = ["1.28.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sparsenetgls/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sparsenetgls/README.html
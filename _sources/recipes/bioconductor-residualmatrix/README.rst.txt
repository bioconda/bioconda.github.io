:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-residualmatrix'
.. highlight: bash

bioconductor-residualmatrix
===========================

.. conda:recipe:: bioconductor-residualmatrix
   :replaces_section_title:
   :noindex:

   Creating a DelayedMatrix of Regression Residuals

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ResidualMatrix.html
   :license: GPL-3
   :recipe: /`bioconductor-residualmatrix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-residualmatrix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-residualmatrix/meta.yaml>`_

   Provides delayed computation of a matrix of residuals after fitting a linear model to each column of an input matrix. Also supports partial computation of residuals where selected factors are to be preserved in the output matrix. Implements a number of efficient methods for operating on the delayed matrix of residuals\, most notably matrix multiplication and calculation of row\/column sums or means.


.. conda:package:: bioconductor-residualmatrix

   |downloads_bioconductor-residualmatrix| |docker_bioconductor-residualmatrix|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
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

    pixi global install bioconductor-residualmatrix

to add into an existing workspace instead, run::

    pixi add bioconductor-residualmatrix

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-residualmatrix

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-residualmatrix

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-residualmatrix:<tag>

(see `bioconductor-residualmatrix/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-residualmatrix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-residualmatrix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-residualmatrix
   :alt:   (downloads)
.. |docker_bioconductor-residualmatrix| image:: https://quay.io/repository/biocontainers/bioconductor-residualmatrix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-residualmatrix
.. _`bioconductor-residualmatrix/tags`: https://quay.io/repository/biocontainers/bioconductor-residualmatrix?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-residualmatrix";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-residualmatrix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-residualmatrix/README.html
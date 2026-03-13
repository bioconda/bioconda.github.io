:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-matrixgenerics'
.. highlight: bash

bioconductor-matrixgenerics
===========================

.. conda:recipe:: bioconductor-matrixgenerics
   :replaces_section_title:
   :noindex:

   S4 Generic Summary Statistic Functions that Operate on Matrix\-Like Objects

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/MatrixGenerics.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-matrixgenerics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-matrixgenerics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-matrixgenerics/meta.yaml>`_

   S4 generic functions modeled after the \'matrixStats\' API for alternative matrix implementations. Packages with alternative matrix implementation can depend on this package and implement the generic functions that are defined here for a useful set of row and column summary statistics. Other package developers can import this package and handle a different matrix implementations without worrying about incompatibilities.


.. conda:package:: bioconductor-matrixgenerics

   |downloads_bioconductor-matrixgenerics| |docker_bioconductor-matrixgenerics|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-3</code>,  <code>1.14.0-2</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.2-0</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.22.0-1``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.14.0-3``,  ``1.14.0-2``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.2-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-matrixstats: ``>=1.4.1``

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

    pixi global install bioconductor-matrixgenerics

to add into an existing workspace instead, run::

    pixi add bioconductor-matrixgenerics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-matrixgenerics

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-matrixgenerics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-matrixgenerics:<tag>

(see `bioconductor-matrixgenerics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-matrixgenerics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-matrixgenerics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-matrixgenerics
   :alt:   (downloads)
.. |docker_bioconductor-matrixgenerics| image:: https://quay.io/repository/biocontainers/bioconductor-matrixgenerics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-matrixgenerics
.. _`bioconductor-matrixgenerics/tags`: https://quay.io/repository/biocontainers/bioconductor-matrixgenerics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-matrixgenerics";
        var versions = ["1.22.0","1.22.0","1.18.0","1.14.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-matrixgenerics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-matrixgenerics/README.html
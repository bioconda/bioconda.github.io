:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-anndatar'
.. highlight: bash

bioconductor-anndatar
=====================

.. conda:recipe:: bioconductor-anndatar
   :replaces_section_title:
   :noindex:

   AnnData interoperability in R

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/anndataR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-anndatar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anndatar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-anndatar/meta.yaml>`_

   Bring the power and flexibility of AnnData to the R ecosystem\, allowing you to effortlessly manipulate and analyse your single\-cell data. This package lets you work with backed h5ad and zarr files\, directly access various slots \(e.g. X\, obs\, var\)\, or convert the data into SingleCellExperiment and Seurat objects.


.. conda:package:: bioconductor-anndatar

   |downloads_bioconductor-anndatar| |docker_bioconductor-anndatar|

   :versions:
      
      

      ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cli: 
   :depends on r-lifecycle: 
   :depends on r-matrix: 
   :depends on r-purrr: 
   :depends on r-r6: ``>=2.4.0``
   :depends on r-reticulate: ``>=1.41.1``
   :depends on r-rlang: 

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

    pixi global install bioconductor-anndatar

to add into an existing workspace instead, run::

    pixi add bioconductor-anndatar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-anndatar

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-anndatar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-anndatar:<tag>

(see `bioconductor-anndatar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-anndatar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-anndatar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-anndatar
   :alt:   (downloads)
.. |docker_bioconductor-anndatar| image:: https://quay.io/repository/biocontainers/bioconductor-anndatar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-anndatar
.. _`bioconductor-anndatar/tags`: https://quay.io/repository/biocontainers/bioconductor-anndatar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-anndatar";
        var versions = ["1.0.2","1.0.1","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-anndatar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-anndatar/README.html
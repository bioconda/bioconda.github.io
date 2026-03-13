:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spoon'
.. highlight: bash

bioconductor-spoon
==================

.. conda:recipe:: bioconductor-spoon
   :replaces_section_title:
   :noindex:

   Address the Mean\-variance Relationship in Spatial Transcriptomics Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/spoon.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-spoon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spoon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spoon/meta.yaml>`_

   This package addresses the mean\-variance relationship in spatially resolved transcriptomics data. Precision weights are generated for individual observations using Empirical Bayes techniques. These weights are used to rescale the data and covariates\, which are then used as input in spatially variable gene detection tools.


.. conda:package:: bioconductor-spoon

   |downloads_bioconductor-spoon| |docker_bioconductor-spoon|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-nnsvg: ``>=1.14.0,<1.15.0``
   :depends on bioconductor-scuttle: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-brisc: 
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

    pixi global install bioconductor-spoon

to add into an existing workspace instead, run::

    pixi add bioconductor-spoon

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-spoon

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-spoon

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-spoon:<tag>

(see `bioconductor-spoon/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-spoon| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spoon.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spoon
   :alt:   (downloads)
.. |docker_bioconductor-spoon| image:: https://quay.io/repository/biocontainers/bioconductor-spoon/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spoon
.. _`bioconductor-spoon/tags`: https://quay.io/repository/biocontainers/bioconductor-spoon?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spoon";
        var versions = ["1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spoon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spoon/README.html
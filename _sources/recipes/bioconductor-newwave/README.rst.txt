:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-newwave'
.. highlight: bash

bioconductor-newwave
====================

.. conda:recipe:: bioconductor-newwave
   :replaces_section_title:
   :noindex:

   Negative binomial model for scRNA\-seq

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/NewWave.html
   :license: GPL-3
   :recipe: /`bioconductor-newwave <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-newwave>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-newwave/meta.yaml>`_

   A model designed for dimensionality reduction and batch effect removal for scRNA\-seq data. It is designed to be massively parallelizable using shared objects that prevent memory duplication\, and it can be used with different mini\-batch approaches in order to reduce time consumption. It assumes a negative binomial distribution for the data with a dispersion parameter that can be both commonwise across gene both genewise.


.. conda:package:: bioconductor-newwave

   |downloads_bioconductor-newwave| |docker_bioconductor-newwave|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.2-0``,  ``0.99.10-1``

      

   
   :depends on bioconductor-biocsingular: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-sharedobject: ``>=1.24.0,<1.25.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-irlba: 
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

    pixi global install bioconductor-newwave

to add into an existing workspace instead, run::

    pixi add bioconductor-newwave

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-newwave

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-newwave

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-newwave:<tag>

(see `bioconductor-newwave/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-newwave| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-newwave.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-newwave
   :alt:   (downloads)
.. |docker_bioconductor-newwave| image:: https://quay.io/repository/biocontainers/bioconductor-newwave/status
   :target: https://quay.io/repository/biocontainers/bioconductor-newwave
.. _`bioconductor-newwave/tags`: https://quay.io/repository/biocontainers/bioconductor-newwave?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-newwave";
        var versions = ["1.20.0","1.16.0","1.12.0","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-newwave/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-newwave/README.html
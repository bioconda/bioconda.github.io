:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sketchr'
.. highlight: bash

bioconductor-sketchr
====================

.. conda:recipe:: bioconductor-sketchr
   :replaces_section_title:
   :noindex:

   An R interface for python subsampling\/sketching algorithms

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/sketchR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-sketchr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sketchr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sketchr/meta.yaml>`_

   Provides an R interface for various subsampling algorithms implemented in python packages. Currently\, interfaces to the geosketch and scSampler python packages are implemented. In addition it also provides diagnostic plots to evaluate the subsampling.


.. conda:package:: bioconductor-sketchr

   |downloads_bioconductor-sketchr| |docker_bioconductor-sketchr|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-basilisk: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-reticulate: 
   :depends on r-rlang: 
   :depends on r-scales: 

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

    pixi global install bioconductor-sketchr

to add into an existing workspace instead, run::

    pixi add bioconductor-sketchr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-sketchr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-sketchr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-sketchr:<tag>

(see `bioconductor-sketchr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-sketchr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sketchr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sketchr
   :alt:   (downloads)
.. |docker_bioconductor-sketchr| image:: https://quay.io/repository/biocontainers/bioconductor-sketchr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sketchr
.. _`bioconductor-sketchr/tags`: https://quay.io/repository/biocontainers/bioconductor-sketchr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sketchr";
        var versions = ["1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sketchr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sketchr/README.html
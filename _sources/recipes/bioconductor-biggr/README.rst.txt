:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biggr'
.. highlight: bash

bioconductor-biggr
==================

.. conda:recipe:: bioconductor-biggr
   :replaces_section_title:
   :noindex:

   Constraint based modeling in R using metabolic reconstruction databases

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BiGGR.html
   :license: file LICENSE
   :recipe: /`bioconductor-biggr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biggr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biggr/meta.yaml>`_

   This package provides an interface to simulate metabolic reconstruction from the BiGG database\(http\:\/\/bigg.ucsd.edu\/\) and other metabolic reconstruction databases. The package facilitates flux balance analysis \(FBA\) and the sampling of feasible flux distributions. Metabolic networks and estimated fluxes can be visualized with hypergraphs.


.. conda:package:: bioconductor-biggr

   |downloads_bioconductor-biggr| |docker_bioconductor-biggr|

   :versions:
      
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``

      

   
   :depends on bioconductor-hyperdraw: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-hypergraph: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-rsbml: ``>=2.56.0,<2.57.0``
   :depends on r-base: ``>=4.2,<4.3.0a0``
   :depends on r-lim: 
   :depends on r-limsolve: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-biggr

to add into an existing workspace instead, run::

    pixi add bioconductor-biggr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-biggr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-biggr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-biggr:<tag>

(see `bioconductor-biggr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-biggr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biggr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biggr
   :alt:   (downloads)
.. |docker_bioconductor-biggr| image:: https://quay.io/repository/biocontainers/bioconductor-biggr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biggr
.. _`bioconductor-biggr/tags`: https://quay.io/repository/biocontainers/bioconductor-biggr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biggr";
        var versions = ["1.34.0","1.30.0","1.28.0","1.26.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biggr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biggr/README.html
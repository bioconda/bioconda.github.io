:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-miasim'
.. highlight: bash

bioconductor-miasim
===================

.. conda:recipe:: bioconductor-miasim
   :replaces_section_title:
   :noindex:

   Microbiome Data Simulation

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/miaSim.html
   :license: Artistic-2.0 | file LICENSE
   :recipe: /`bioconductor-miasim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-miasim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-miasim/meta.yaml>`_

   Microbiome time series simulation with generalized Lotka\-Volterra model\, Self\-Organized Instability \(SOI\)\, and other models. Hubbell\'s Neutral model is used to determine the abundance matrix. The resulting abundance matrix is applied to \(Tree\)SummarizedExperiment objects.


.. conda:package:: bioconductor-miasim

   |downloads_bioconductor-miasim| |docker_bioconductor-miasim|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-treesummarizedexperiment: ``>=2.18.0,<2.19.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-desolve: 
   :depends on r-powerlaw: 

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

    pixi global install bioconductor-miasim

to add into an existing workspace instead, run::

    pixi add bioconductor-miasim

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-miasim

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-miasim

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-miasim:<tag>

(see `bioconductor-miasim/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-miasim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-miasim.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-miasim
   :alt:   (downloads)
.. |docker_bioconductor-miasim| image:: https://quay.io/repository/biocontainers/bioconductor-miasim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-miasim
.. _`bioconductor-miasim/tags`: https://quay.io/repository/biocontainers/bioconductor-miasim?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-miasim";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-miasim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-miasim/README.html
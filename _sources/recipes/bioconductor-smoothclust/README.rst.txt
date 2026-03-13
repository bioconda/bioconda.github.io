:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-smoothclust'
.. highlight: bash

bioconductor-smoothclust
========================

.. conda:recipe:: bioconductor-smoothclust
   :replaces_section_title:
   :noindex:

   smoothclust

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/smoothclust.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-smoothclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-smoothclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-smoothclust/meta.yaml>`_

   Method for segmentation of spatial domains and spatially\-aware clustering in spatial transcriptomics data. The method generates spatial domains with smooth boundaries by smoothing gene expression profiles across neighboring spatial locations\, followed by unsupervised clustering. Spatial domains consisting of consistent mixtures of cell types may then be further investigated by applying cell type compositional analyses or differential analyses.


.. conda:package:: bioconductor-smoothclust

   |downloads_bioconductor-smoothclust| |docker_bioconductor-smoothclust|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocneighbors: ``>=2.4.0,<2.5.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
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

    pixi global install bioconductor-smoothclust

to add into an existing workspace instead, run::

    pixi add bioconductor-smoothclust

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-smoothclust

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-smoothclust

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-smoothclust:<tag>

(see `bioconductor-smoothclust/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-smoothclust| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-smoothclust.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-smoothclust
   :alt:   (downloads)
.. |docker_bioconductor-smoothclust| image:: https://quay.io/repository/biocontainers/bioconductor-smoothclust/status
   :target: https://quay.io/repository/biocontainers/bioconductor-smoothclust
.. _`bioconductor-smoothclust/tags`: https://quay.io/repository/biocontainers/bioconductor-smoothclust?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-smoothclust";
        var versions = ["1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-smoothclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-smoothclust/README.html
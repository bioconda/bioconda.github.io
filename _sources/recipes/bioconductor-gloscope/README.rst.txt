:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gloscope'
.. highlight: bash

bioconductor-gloscope
=====================

.. conda:recipe:: bioconductor-gloscope
   :replaces_section_title:
   :noindex:

   Population\-level Representation on scRNA\-Seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GloScope.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gloscope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gloscope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gloscope/meta.yaml>`_

   This package aims at representing and summarizing the entire single\-cell profile of a sample. It allows researchers to perform important bioinformatic analyses at the sample\-level such as visualization and quality control. The main functions Estimate sample distribution and calculate statistical divergence among samples\, and visualize the distance matrix through MDS plots.


.. conda:package:: bioconductor-gloscope

   |downloads_bioconductor-gloscope| |docker_bioconductor-gloscope|

   :versions:
      
      

      ``2.0.1-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-boot: 
   :depends on r-cluster: 
   :depends on r-fnn: 
   :depends on r-ggplot2: 
   :depends on r-mass: 
   :depends on r-mclust: 
   :depends on r-mvnfast: 
   :depends on r-permute: 
   :depends on r-pheatmap: 
   :depends on r-rann: 
   :depends on r-rcolorbrewer: 
   :depends on r-rlang: 
   :depends on r-vegan: 

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

    pixi global install bioconductor-gloscope

to add into an existing workspace instead, run::

    pixi add bioconductor-gloscope

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-gloscope

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-gloscope

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-gloscope:<tag>

(see `bioconductor-gloscope/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-gloscope| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gloscope.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gloscope
   :alt:   (downloads)
.. |docker_bioconductor-gloscope| image:: https://quay.io/repository/biocontainers/bioconductor-gloscope/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gloscope
.. _`bioconductor-gloscope/tags`: https://quay.io/repository/biocontainers/bioconductor-gloscope?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gloscope";
        var versions = ["2.0.1","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gloscope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gloscope/README.html
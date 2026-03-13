:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-traviz'
.. highlight: bash

bioconductor-traviz
===================

.. conda:recipe:: bioconductor-traviz
   :replaces_section_title:
   :noindex:

   Trajectory functions for visualization and interpretation.

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/traviz.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-traviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-traviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-traviz/meta.yaml>`_

   traviz provides a suite of functions to plot trajectory related objects from Bioconductor packages. It allows plotting trajectories in reduced dimension\, as well as averge gene expression smoothers as a function of pseudotime. Asides from general utility functions\, traviz also allows plotting trajectories estimated by Slingshot\, as well as smoothers estimated by tradeSeq. Furthermore\, it allows for visualization of Slingshot trajectories using ggplot2.


.. conda:package:: bioconductor-traviz

   |downloads_bioconductor-traviz| |docker_bioconductor-traviz|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-slingshot: ``>=2.8.0,<2.9.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-ggplot2: 
   :depends on r-mgcv: 
   :depends on r-princurve: 
   :depends on r-rcolorbrewer: 
   :depends on r-rgl: 
   :depends on r-viridis: 

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

    pixi global install bioconductor-traviz

to add into an existing workspace instead, run::

    pixi add bioconductor-traviz

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-traviz

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-traviz

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-traviz:<tag>

(see `bioconductor-traviz/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-traviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-traviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-traviz
   :alt:   (downloads)
.. |docker_bioconductor-traviz| image:: https://quay.io/repository/biocontainers/bioconductor-traviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-traviz
.. _`bioconductor-traviz/tags`: https://quay.io/repository/biocontainers/bioconductor-traviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-traviz";
        var versions = ["1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-traviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-traviz/README.html
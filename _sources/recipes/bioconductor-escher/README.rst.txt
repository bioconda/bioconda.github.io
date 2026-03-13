:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-escher'
.. highlight: bash

bioconductor-escher
===================

.. conda:recipe:: bioconductor-escher
   :replaces_section_title:
   :noindex:

   Unified multi\-dimensional visualizations with Gestalt principles

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/escheR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-escher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-escher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-escher/meta.yaml>`_

   The creation of effective visualizations is a fundamental component of data analysis. In biomedical research\, new challenges are emerging to visualize multi\-dimensional data in a 2D space\, but current data visualization tools have limited capabilities. To address this problem\, we leverage Gestalt principles to improve the design and interpretability of multi\-dimensional data in 2D data visualizations\, layering aesthetics to display multiple variables. The proposed visualization can be applied to spatially\-resolved transcriptomics data\, but also broadly to data visualized in 2D space\, such as embedding visualizations. We provide this open source R package escheR\, which is built off of the state\-of\-the\-art ggplot2 visualization framework and can be seamlessly integrated into genomics toolboxes and workflows.


.. conda:package:: bioconductor-escher

   |downloads_bioconductor-escher| |docker_bioconductor-escher|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
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

    pixi global install bioconductor-escher

to add into an existing workspace instead, run::

    pixi add bioconductor-escher

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-escher

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-escher

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-escher:<tag>

(see `bioconductor-escher/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-escher| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-escher.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-escher
   :alt:   (downloads)
.. |docker_bioconductor-escher| image:: https://quay.io/repository/biocontainers/bioconductor-escher/status
   :target: https://quay.io/repository/biocontainers/bioconductor-escher
.. _`bioconductor-escher/tags`: https://quay.io/repository/biocontainers/bioconductor-escher?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-escher";
        var versions = ["1.10.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-escher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-escher/README.html
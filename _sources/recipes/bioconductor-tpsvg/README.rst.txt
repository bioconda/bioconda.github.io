:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tpsvg'
.. highlight: bash

bioconductor-tpsvg
==================

.. conda:recipe:: bioconductor-tpsvg
   :replaces_section_title:
   :noindex:

   Thin plate models to detect spatially variable genes

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/tpSVG.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tpsvg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tpsvg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tpsvg/meta.yaml>`_

   The goal of \`tpSVG\` is to detect and visualize spatial variation in the gene expression for spatially resolved transcriptomics data analysis. Specifically\, \`tpSVG\` introduces a family of count\-based models\, with generalizable parametric assumptions such as Poisson distribution or negative binomial distribution. In addition\, comparing to currently available count\-based model for spatially resolved data analysis\, the \`tpSVG\` models improves computational time\, and hence greatly improves the applicability of count\-based models in SRT data analysis.


.. conda:package:: bioconductor-tpsvg

   |downloads_bioconductor-tpsvg| |docker_bioconductor-tpsvg|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-matrixgenerics: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-mgcv: 

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

    pixi global install bioconductor-tpsvg

to add into an existing workspace instead, run::

    pixi add bioconductor-tpsvg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tpsvg

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tpsvg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tpsvg:<tag>

(see `bioconductor-tpsvg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tpsvg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tpsvg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tpsvg
   :alt:   (downloads)
.. |docker_bioconductor-tpsvg| image:: https://quay.io/repository/biocontainers/bioconductor-tpsvg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tpsvg
.. _`bioconductor-tpsvg/tags`: https://quay.io/repository/biocontainers/bioconductor-tpsvg?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tpsvg";
        var versions = ["1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tpsvg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tpsvg/README.html
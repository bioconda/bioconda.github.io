:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-batchsvg'
.. highlight: bash

bioconductor-batchsvg
=====================

.. conda:recipe:: bioconductor-batchsvg
   :replaces_section_title:
   :noindex:

   Identify Batch\-Biased Features in Spatially Variable Genes

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/BatchSVG.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-batchsvg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-batchsvg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-batchsvg/meta.yaml>`_

   \`BatchSVG\` is a feature\-based Quality Control \(QC\) to identify SVGs on spatial transcriptomics data with specific types of batch effect. Regarding to the spatial transcriptomics data experiments\, the batch can be defined as \"sample\"\, \"sex\"\, and etc.The \`BatchSVG\` method is based on binomial deviance model \(Townes et al\, 2019\) and applies cutoffs based on the number of standard deviation \(nSD\) of relative change in deviance and rank difference as the data\-driven thresholding approach to detect the batch\-biased outliers.


.. conda:package:: bioconductor-batchsvg

   |downloads_bioconductor-batchsvg| |docker_bioconductor-batchsvg|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on bioconductor-scry: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cowplot: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-rcolorbrewer: 
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

    pixi global install bioconductor-batchsvg

to add into an existing workspace instead, run::

    pixi add bioconductor-batchsvg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-batchsvg

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-batchsvg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-batchsvg:<tag>

(see `bioconductor-batchsvg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-batchsvg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-batchsvg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-batchsvg
   :alt:   (downloads)
.. |docker_bioconductor-batchsvg| image:: https://quay.io/repository/biocontainers/bioconductor-batchsvg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-batchsvg
.. _`bioconductor-batchsvg/tags`: https://quay.io/repository/biocontainers/bioconductor-batchsvg?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-batchsvg";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-batchsvg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-batchsvg/README.html
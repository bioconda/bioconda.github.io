:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dinor'
.. highlight: bash

bioconductor-dinor
==================

.. conda:recipe:: bioconductor-dinor
   :replaces_section_title:
   :noindex:

   Differential NOMe\-seq analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/dinoR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-dinor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dinor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dinor/meta.yaml>`_

   dinoR tests for significant differences in NOMe\-seq footprints between two conditions\, using genomic regions of interest \(ROI\) centered around a landmark\, for example a transcription factor \(TF\) motif. This package takes NOMe\-seq data \(GCH methylation\/protection\) in the form of a Ranged Summarized Experiment as input. dinoR can be used to group sequencing fragments into 3 or 5 categories representing characteristic footprints \(TF bound\, nculeosome bound\, open chromatin\)\, plot the percentage of fragments in each category in a heatmap\, or averaged across different ROI groups\, for example\, containing a common TF motif. It is designed to compare footprints between two sample groups\, using edgeR\'s quasi\-likelihood methods on the total fragment counts per ROI\, sample\, and footprint category.


.. conda:package:: bioconductor-dinor

   |downloads_bioconductor-dinor| |docker_bioconductor-dinor|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: 
   :depends on r-cowplot: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-matrix: 
   :depends on r-rlang: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-tidyselect: 

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

    pixi global install bioconductor-dinor

to add into an existing workspace instead, run::

    pixi add bioconductor-dinor

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-dinor

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-dinor

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-dinor:<tag>

(see `bioconductor-dinor/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-dinor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dinor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dinor
   :alt:   (downloads)
.. |docker_bioconductor-dinor| image:: https://quay.io/repository/biocontainers/bioconductor-dinor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dinor
.. _`bioconductor-dinor/tags`: https://quay.io/repository/biocontainers/bioconductor-dinor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dinor";
        var versions = ["1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dinor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dinor/README.html
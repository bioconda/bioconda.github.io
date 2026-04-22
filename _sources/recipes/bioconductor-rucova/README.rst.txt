:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rucova'
.. highlight: bash

bioconductor-rucova
===================

.. conda:recipe:: bioconductor-rucova
   :replaces_section_title:
   :noindex:

   Removes unwanted covariance from mass cytometry data

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/RUCova.html
   :license: GPL-3
   :recipe: /`bioconductor-rucova <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rucova>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rucova/meta.yaml>`_

   Mass cytometry enables the simultaneous measurement of dozens of protein markers at the single\-cell level\, producing high dimensional datasets that provide deep insights into cellular heterogeneity and function. However\, these datasets often contain unwanted covariance introduced by technical variations\, such as differences in cell size\, staining efficiency\, and instrument\-specific artifacts\, which can obscure biological signals and complicate downstream analysis. This package addresses this challenge by implementing a robust framework of linear models designed to identify and remove these sources of unwanted covariance. By systematically modeling and correcting for technical noise\, the package enhances the quality and interpretability of mass cytometry data\, enabling researchers to focus on biologically relevant signals.


.. conda:package:: bioconductor-rucova

   |downloads_bioconductor-rucova| |docker_bioconductor-rucova|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: 
   :depends on r-dplyr: 
   :depends on r-fastdummies: 
   :depends on r-ggplot2: 
   :depends on r-magrittr: 
   :depends on r-matrix: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-tidyverse: 

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

    pixi global install bioconductor-rucova

to add into an existing workspace instead, run::

    pixi add bioconductor-rucova

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rucova

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rucova

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rucova:<tag>

(see `bioconductor-rucova/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rucova| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rucova.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rucova
   :alt:   (downloads)
.. |docker_bioconductor-rucova| image:: https://quay.io/repository/biocontainers/bioconductor-rucova/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rucova
.. _`bioconductor-rucova/tags`: https://quay.io/repository/biocontainers/bioconductor-rucova?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rucova";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rucova/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rucova/README.html
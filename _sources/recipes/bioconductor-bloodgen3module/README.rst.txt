:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bloodgen3module'
.. highlight: bash

bioconductor-bloodgen3module
============================

.. conda:recipe:: bioconductor-bloodgen3module
   :replaces_section_title:
   :noindex:

   This R package for performing module repertoire analyses and generating fingerprint representations

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BloodGen3Module.html
   :license: GPL-2
   :recipe: /`bioconductor-bloodgen3module <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bloodgen3module>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bloodgen3module/meta.yaml>`_

   The BloodGen3Module package provides functions for R user performing module repertoire analyses and generating fingerprint representations. Functions can perform group comparison or individual sample analysis and visualization by fingerprint grid plot or fingerprint heatmap. Module repertoire analyses typically involve determining the percentage of the constitutive genes for each module that are significantly increased or decreased. As we describe in details\;https\:\/\/www.biorxiv.org\/content\/10.1101\/525709v2 and https\:\/\/pubmed.ncbi.nlm.nih.gov\/33624743\/\, the results of module repertoire analyses can be represented in a fingerprint format\, where red and blue spots indicate increases or decreases in module activity. These spots are subsequently represented either on a grid\, with each position being assigned to a given module\, or in a heatmap where the samples are arranged in columns and the modules in rows.


.. conda:package:: bioconductor-bloodgen3module

   |downloads_bioconductor-bloodgen3module| |docker_bioconductor-bloodgen3module|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-preprocesscore: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: 
   :depends on r-ggplot2: 
   :depends on r-gtools: 
   :depends on r-matrixstats: 
   :depends on r-randomcolor: 
   :depends on r-reshape2: 
   :depends on r-testthat: 
   :depends on r-v8: 

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

    pixi global install bioconductor-bloodgen3module

to add into an existing workspace instead, run::

    pixi add bioconductor-bloodgen3module

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bloodgen3module

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bloodgen3module

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bloodgen3module:<tag>

(see `bioconductor-bloodgen3module/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bloodgen3module| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bloodgen3module.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bloodgen3module
   :alt:   (downloads)
.. |docker_bioconductor-bloodgen3module| image:: https://quay.io/repository/biocontainers/bioconductor-bloodgen3module/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bloodgen3module
.. _`bioconductor-bloodgen3module/tags`: https://quay.io/repository/biocontainers/bioconductor-bloodgen3module?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bloodgen3module";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bloodgen3module/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bloodgen3module/README.html
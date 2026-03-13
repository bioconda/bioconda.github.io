:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tadcompare'
.. highlight: bash

bioconductor-tadcompare
=======================

.. conda:recipe:: bioconductor-tadcompare
   :replaces_section_title:
   :noindex:

   TADCompare\: Identification and characterization of differential TADs

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/TADCompare.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tadcompare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tadcompare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tadcompare/meta.yaml>`_

   TADCompare is an R package designed to identify and characterize differential Topologically Associated Domains \(TADs\) between multiple Hi\-C contact matrices. It contains functions for finding differential TADs between two datasets\, finding differential TADs over time and identifying consensus TADs across multiple matrices. It takes all of the main types of HiC input and returns simple\, comprehensive\, easy to analyze results.


.. conda:package:: bioconductor-tadcompare

   |downloads_bioconductor-tadcompare| |docker_bioconductor-tadcompare|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-hiccompare: ``>=1.32.0,<1.33.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cluster: 
   :depends on r-cowplot: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggpubr: 
   :depends on r-magrittr: 
   :depends on r-matrix: 
   :depends on r-primme: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-tadcompare

to add into an existing workspace instead, run::

    pixi add bioconductor-tadcompare

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tadcompare

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tadcompare

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tadcompare:<tag>

(see `bioconductor-tadcompare/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tadcompare| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tadcompare.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tadcompare
   :alt:   (downloads)
.. |docker_bioconductor-tadcompare| image:: https://quay.io/repository/biocontainers/bioconductor-tadcompare/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tadcompare
.. _`bioconductor-tadcompare/tags`: https://quay.io/repository/biocontainers/bioconductor-tadcompare?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tadcompare";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tadcompare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tadcompare/README.html
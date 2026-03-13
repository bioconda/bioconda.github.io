:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-magpie'
.. highlight: bash

bioconductor-magpie
===================

.. conda:recipe:: bioconductor-magpie
   :replaces_section_title:
   :noindex:

   MeRIP\-Seq data Analysis for Genomic Power Investigation and Evaluation

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/magpie.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-magpie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-magpie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-magpie/meta.yaml>`_

   This package aims to perform power analysis for the MeRIP\-seq study. It calculates FDR\, FDC\, power\, and precision under various study design parameters\, including but not limited to sample size\, sequencing depth\, and testing method. It can also output results into .xlsx files or produce corresponding figures of choice.


.. conda:package:: bioconductor-magpie

   |downloads_bioconductor-magpie| |docker_bioconductor-magpie|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-tress: ``>=1.16.0,<1.17.0``
   :depends on r-aod: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-matrix: 
   :depends on r-matrixstats: 
   :depends on r-openxlsx: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 

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

    pixi global install bioconductor-magpie

to add into an existing workspace instead, run::

    pixi add bioconductor-magpie

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-magpie

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-magpie

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-magpie:<tag>

(see `bioconductor-magpie/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-magpie| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-magpie.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-magpie
   :alt:   (downloads)
.. |docker_bioconductor-magpie| image:: https://quay.io/repository/biocontainers/bioconductor-magpie/status
   :target: https://quay.io/repository/biocontainers/bioconductor-magpie
.. _`bioconductor-magpie/tags`: https://quay.io/repository/biocontainers/bioconductor-magpie?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-magpie";
        var versions = ["1.10.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-magpie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-magpie/README.html
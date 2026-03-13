:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-easier'
.. highlight: bash

bioconductor-easier
===================

.. conda:recipe:: bioconductor-easier
   :replaces_section_title:
   :noindex:

   Estimate Systems Immune Response from RNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/easier.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-easier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-easier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-easier/meta.yaml>`_

   This package provides a workflow for the use of EaSIeR tool\, developed to assess patients\' likelihood to respond to ICB therapies providing just the patients\' RNA\-seq data as input. We integrate RNA\-seq data with different types of prior knowledge to extract quantitative descriptors of the tumor microenvironment from several points of view\, including composition of the immune repertoire\, and activity of intra\- and extra\-cellular communications. Then\, we use multi\-task machine learning trained in TCGA data to identify how these descriptors can simultaneously predict several state\-of\-the\-art hallmarks of anti\-cancer immune response. In this way we derive cancer\-specific models and identify cancer\-specific systems biomarkers of immune response. These biomarkers have been experimentally validated in the literature and the performance of EaSIeR predictions has been validated using independent datasets form four different cancer types with patients treated with anti\-PD1 or anti\-PDL1 therapy.


.. conda:package:: bioconductor-easier

   |downloads_bioconductor-easier| |docker_bioconductor-easier|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.3-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-decoupler: ``>=2.16.0,<2.17.0``
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-dorothea: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-easierdata: ``>=1.16.0,<1.17.0``
   :depends on bioconductor-progeny: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-quantiseqr: ``>=1.18.0,<1.19.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-coin: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggpubr: 
   :depends on r-ggrepel: 
   :depends on r-magrittr: 
   :depends on r-matrixstats: 
   :depends on r-reshape2: 
   :depends on r-rlang: 
   :depends on r-rocr: 
   :depends on r-rstatix: 
   :depends on r-tibble: 
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

    pixi global install bioconductor-easier

to add into an existing workspace instead, run::

    pixi add bioconductor-easier

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-easier

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-easier

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-easier:<tag>

(see `bioconductor-easier/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-easier| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-easier.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-easier
   :alt:   (downloads)
.. |docker_bioconductor-easier| image:: https://quay.io/repository/biocontainers/bioconductor-easier/status
   :target: https://quay.io/repository/biocontainers/bioconductor-easier
.. _`bioconductor-easier/tags`: https://quay.io/repository/biocontainers/bioconductor-easier?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-easier";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.3","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-easier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-easier/README.html
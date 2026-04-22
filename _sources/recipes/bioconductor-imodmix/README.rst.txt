:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-imodmix'
.. highlight: bash

bioconductor-imodmix
====================

.. conda:recipe:: bioconductor-imodmix
   :replaces_section_title:
   :noindex:

   Integrative Modules for Multi\-Omics Data

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/iModMix.html
   :license: GPL-3
   :recipe: /`bioconductor-imodmix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-imodmix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-imodmix/meta.yaml>`_

   The iModMix network\-based method offers an integrated framework for analyzing multi\-omics data\, including metabolomics\, proteomics\, and transcriptomics data\, enabling the exploration of intricate molecular associations within heterogeneous biological systems.


.. conda:package:: bioconductor-imodmix

   |downloads_bioconductor-imodmix| |docker_bioconductor-imodmix|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-imodmixdata: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-impute: ``>=1.84.0,<1.85.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-config: ``>=0.3.2``
   :depends on r-corrplot: 
   :depends on r-cowplot: 
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-dynamictreecut: 
   :depends on r-ggplot2: 
   :depends on r-glassofast: 
   :depends on r-golem: ``>=0.4.1``
   :depends on r-httr: 
   :depends on r-purrr: 
   :depends on r-rcolorbrewer: 
   :depends on r-shiny: ``>=1.7.5``
   :depends on r-shinybs: 
   :depends on r-stringr: 
   :depends on r-tidyr: 
   :depends on r-visnetwork: 
   :depends on r-wgcna: 

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

    pixi global install bioconductor-imodmix

to add into an existing workspace instead, run::

    pixi add bioconductor-imodmix

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-imodmix

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-imodmix

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-imodmix:<tag>

(see `bioconductor-imodmix/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-imodmix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-imodmix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-imodmix
   :alt:   (downloads)
.. |docker_bioconductor-imodmix| image:: https://quay.io/repository/biocontainers/bioconductor-imodmix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-imodmix
.. _`bioconductor-imodmix/tags`: https://quay.io/repository/biocontainers/bioconductor-imodmix?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-imodmix";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-imodmix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-imodmix/README.html
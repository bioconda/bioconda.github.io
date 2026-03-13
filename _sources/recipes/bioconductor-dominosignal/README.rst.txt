:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dominosignal'
.. highlight: bash

bioconductor-dominosignal
=========================

.. conda:recipe:: bioconductor-dominosignal
   :replaces_section_title:
   :noindex:

   Cell Communication Analysis for Single Cell RNA Sequencing

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/dominoSignal.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-dominosignal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dominosignal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dominosignal/meta.yaml>`_

   dominoSignal is a package developed to analyze cell signaling through ligand \- receptor \- transcription factor networks in scRNAseq data. It takes as input information transcriptomic data\, requiring counts\, z\-scored counts\, and cluster labels\, as well as information on transcription factor activation \(such as from SCENIC\) and a database of ligand and receptor pairings \(such as from CellPhoneDB\). This package creates an object storing ligand \- receptor \- transcription factor linkages by cluster and provides several methods for exploring\, summarizing\, and visualizing the analysis.


.. conda:package:: bioconductor-dominosignal

   |downloads_bioconductor-dominosignal| |docker_bioconductor-dominosignal|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: 
   :depends on r-dplyr: 
   :depends on r-ggpubr: 
   :depends on r-igraph: 
   :depends on r-magrittr: 
   :depends on r-matrix: 
   :depends on r-plyr: 
   :depends on r-purrr: 

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

    pixi global install bioconductor-dominosignal

to add into an existing workspace instead, run::

    pixi add bioconductor-dominosignal

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-dominosignal

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-dominosignal

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-dominosignal:<tag>

(see `bioconductor-dominosignal/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-dominosignal| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dominosignal.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dominosignal
   :alt:   (downloads)
.. |docker_bioconductor-dominosignal| image:: https://quay.io/repository/biocontainers/bioconductor-dominosignal/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dominosignal
.. _`bioconductor-dominosignal/tags`: https://quay.io/repository/biocontainers/bioconductor-dominosignal?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dominosignal";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dominosignal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dominosignal/README.html
:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cfdnapro'
.. highlight: bash

bioconductor-cfdnapro
=====================

.. conda:recipe:: bioconductor-cfdnapro
   :replaces_section_title:
   :noindex:

   cfDNAPro extracts and Visualises biological features from whole genome sequencing data of cell\-free DNA

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cfDNAPro.html
   :license: GPL-3
   :recipe: /`bioconductor-cfdnapro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cfdnapro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cfdnapro/meta.yaml>`_

   cfDNA fragments carry important features for building cancer sample classification ML models\, such as fragment size\, and fragment end motif etc. Analyzing and visualizing fragment size metrics\, as well as other biological features in a curated\, standardized\, scalable\, well\-documented\, and reproducible way might be time intensive. This package intends to resolve these problems and simplify the process. It offers two sets of functions for cfDNA feature characterization and visualization.


.. conda:package:: bioconductor-cfdnapro

   |downloads_bioconductor-cfdnapro| |docker_bioconductor-cfdnapro|

   :versions:
      
      

      ``1.16.1-0``,  ``1.16.0-1``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-bsgenome.hsapiens.ncbi.grch38: ``>=1.3.0,<1.4.0``
   :depends on bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends on bioconductor-bsgenome.hsapiens.ucsc.hg38: ``>=1.4.0,<1.5.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicalignments: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-plyranges: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: ``>=0.8.3``
   :depends on r-ggplot2: ``>=3.2.1``
   :depends on r-magrittr: ``>=1.5.0``
   :depends on r-quantmod: ``>=0.4``
   :depends on r-rlang: ``>=0.4.0``
   :depends on r-stringr: ``>=1.4.0``
   :depends on r-tibble: 

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

    pixi global install bioconductor-cfdnapro

to add into an existing workspace instead, run::

    pixi add bioconductor-cfdnapro

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cfdnapro

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cfdnapro

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cfdnapro:<tag>

(see `bioconductor-cfdnapro/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cfdnapro| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cfdnapro.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cfdnapro
   :alt:   (downloads)
.. |docker_bioconductor-cfdnapro| image:: https://quay.io/repository/biocontainers/bioconductor-cfdnapro/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cfdnapro
.. _`bioconductor-cfdnapro/tags`: https://quay.io/repository/biocontainers/bioconductor-cfdnapro?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cfdnapro";
        var versions = ["1.16.1","1.16.0","1.12.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cfdnapro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cfdnapro/README.html
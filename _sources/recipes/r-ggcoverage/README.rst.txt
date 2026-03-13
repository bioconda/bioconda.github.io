:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ggcoverage'
.. highlight: bash

r-ggcoverage
============

.. conda:recipe:: r-ggcoverage
   :replaces_section_title:
   :noindex:

   The goal of \'ggcoverage\' is to simplify the process of visualizing genome coverage. It contains functions to load data from BAM\, BigWig or BedGraph files\, create genome coverage plot\, add various annotations to the coverage plot\, including base and amino acid annotation\, GC annotation\, gene annotation\, transcript annotation\, ideogram annotation and peak annotation.

   :homepage: https://CRAN.R-project.org/package=ggcoverage
   :license: MIT / MIT
   :recipe: /`r-ggcoverage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ggcoverage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ggcoverage/meta.yaml>`_

   


.. conda:package:: r-ggcoverage

   |downloads_r-ggcoverage| |docker_r-ggcoverage|

   :versions:
      
      

      ``0.7.1-3``,  ``0.7.1-2``,  ``0.7.1-1``,  ``0.7.1-0``,  ``0.7.0-0``

      

   
   :depends on bioconductor-biostrings: 
   :depends on bioconductor-bsgenome: 
   :depends on bioconductor-genomeinfodb: 
   :depends on bioconductor-genomicalignments: 
   :depends on bioconductor-genomicranges: 
   :depends on bioconductor-ggbio: 
   :depends on bioconductor-iranges: 
   :depends on bioconductor-rsamtools: 
   :depends on bioconductor-rtracklayer: 
   :depends on bioconductor-s4vectors: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dplyr: 
   :depends on r-ggh4x: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-magrittr: 
   :depends on r-patchwork: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-seqinr: 

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

    pixi global install r-ggcoverage

to add into an existing workspace instead, run::

    pixi add r-ggcoverage

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-ggcoverage

Alternatively, to install into a new environment, run::

    conda create -n envname r-ggcoverage

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-ggcoverage:<tag>

(see `r-ggcoverage/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-ggcoverage| image:: https://img.shields.io/conda/dn/bioconda/r-ggcoverage.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ggcoverage
   :alt:   (downloads)
.. |docker_r-ggcoverage| image:: https://quay.io/repository/biocontainers/r-ggcoverage/status
   :target: https://quay.io/repository/biocontainers/r-ggcoverage
.. _`r-ggcoverage/tags`: https://quay.io/repository/biocontainers/r-ggcoverage?tab=tags


.. raw:: html

    <script>
        var package = "r-ggcoverage";
        var versions = ["0.7.1","0.7.1","0.7.1","0.7.1","0.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ggcoverage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ggcoverage/README.html
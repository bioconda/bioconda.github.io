:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cogeqc'
.. highlight: bash

bioconductor-cogeqc
===================

.. conda:recipe:: bioconductor-cogeqc
   :replaces_section_title:
   :noindex:

   Systematic quality checks on comparative genomics analyses

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cogeqc.html
   :license: GPL-3
   :recipe: /`bioconductor-cogeqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cogeqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cogeqc/meta.yaml>`_

   cogeqc aims to facilitate systematic quality checks on standard comparative genomics analyses to help researchers detect issues and select the most suitable parameters for each data set. cogeqc can be used to asses\: i. genome assembly and annotation quality with BUSCOs and comparisons of statistics with publicly available genomes on the NCBI\; ii. orthogroup inference using a protein domain\-based approach and\; iii. synteny detection using synteny network properties. There are also data visualization functions to explore QC summary statistics.


.. conda:package:: bioconductor-cogeqc

   |downloads_bioconductor-cogeqc| |docker_bioconductor-cogeqc|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-ggtree: ``>=4.0.0,<4.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggbeeswarm: 
   :depends on r-ggplot2: 
   :depends on r-igraph: 
   :depends on r-jsonlite: 
   :depends on r-patchwork: 
   :depends on r-reshape2: 
   :depends on r-rlang: 
   :depends on r-scales: 

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

    pixi global install bioconductor-cogeqc

to add into an existing workspace instead, run::

    pixi add bioconductor-cogeqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cogeqc

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cogeqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cogeqc:<tag>

(see `bioconductor-cogeqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cogeqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cogeqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cogeqc
   :alt:   (downloads)
.. |docker_bioconductor-cogeqc| image:: https://quay.io/repository/biocontainers/bioconductor-cogeqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cogeqc
.. _`bioconductor-cogeqc/tags`: https://quay.io/repository/biocontainers/bioconductor-cogeqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cogeqc";
        var versions = ["1.14.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cogeqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cogeqc/README.html
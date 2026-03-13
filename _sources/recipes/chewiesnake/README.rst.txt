:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chewiesnake'
.. highlight: bash

chewiesnake
===========

.. conda:recipe:: chewiesnake
   :replaces_section_title:
   :noindex:

   ChewieSnake is a snakemake workflow that performs cgMLST allele calling for a set of assembled genomes using chewBBACA.

   :homepage: https://gitlab.com/bfr_bioinformatics/chewieSnake
   :license: BSD-3
   :recipe: /`chewiesnake <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chewiesnake>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chewiesnake/meta.yaml>`_

   


.. conda:package:: chewiesnake

   |downloads_chewiesnake| |docker_chewiesnake|

   :versions:
      
      

      ``3.0.0-2``,  ``3.0.0-1``,  ``3.0.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.46``
   :depends on bioconductor-biostrings: ``>=2.54``
   :depends on bioconductor-ggtree: ``>=2.0.0``
   :depends on biopython: ``1.76.*``
   :depends on chewbbaca: ``2.0.12.*``
   :depends on fastp: ``0.19.5.*``
   :depends on grapetree: ``2.1.*``
   :depends on kmc: ``3.1.0.*``
   :depends on pandoc: ``>=2.11``
   :depends on python: ``>=3.6``
   :depends on r-ape: ``5.*``
   :depends on r-base: ``>=3.6.3``
   :depends on r-dendextend: ``>=1.14``
   :depends on r-dt: 
   :depends on r-knitr: 
   :depends on r-optparse: 
   :depends on r-plotly: 
   :depends on r-reshape2: 
   :depends on r-rmarkdown: 
   :depends on r-tidyverse: ``>=1.3``
   :depends on shovill: ``1.1.0.*``
   :depends on snakemake: ``>=5.30``

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

    pixi global install chewiesnake

to add into an existing workspace instead, run::

    pixi add chewiesnake

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install chewiesnake

Alternatively, to install into a new environment, run::

    conda create -n envname chewiesnake

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/chewiesnake:<tag>

(see `chewiesnake/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_chewiesnake| image:: https://img.shields.io/conda/dn/bioconda/chewiesnake.svg?style=flat
   :target: https://anaconda.org/bioconda/chewiesnake
   :alt:   (downloads)
.. |docker_chewiesnake| image:: https://quay.io/repository/biocontainers/chewiesnake/status
   :target: https://quay.io/repository/biocontainers/chewiesnake
.. _`chewiesnake/tags`: https://quay.io/repository/biocontainers/chewiesnake?tab=tags


.. raw:: html

    <script>
        var package = "chewiesnake";
        var versions = ["3.0.0","3.0.0","3.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chewiesnake/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chewiesnake/README.html
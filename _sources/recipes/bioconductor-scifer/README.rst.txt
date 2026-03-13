:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scifer'
.. highlight: bash

bioconductor-scifer
===================

.. conda:recipe:: bioconductor-scifer
   :replaces_section_title:
   :noindex:

   Scifer\: Single\-Cell Immunoglobulin Filtering of Sanger Sequences

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scifer.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-scifer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scifer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scifer/meta.yaml>`_

   Have you ever index sorted cells in a 96 or 384\-well plate and then sequenced using Sanger sequencing\? If so\, you probably had some struggles to either check the electropherogram of each cell sequenced manually\, or when you tried to identify which cell was sorted where after sequencing the plate. Scifer was developed to solve this issue by performing basic quality control of Sanger sequences and merging flow cytometry data from probed single\-cell sorted B cells with sequencing data. scifer can export summary tables\, \'fasta\' files\, electropherograms for visual inspection\, and generate reports.


.. conda:package:: bioconductor-scifer

   |downloads_bioconductor-scifer| |docker_bioconductor-scifer|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-basilisk: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-basilisk.utils: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-decipher: ``>=3.6.0,<3.7.0``
   :depends on bioconductor-flowcore: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-pwalign: ``>=1.6.0,<1.7.0``
   :depends on bioconductor-sangerseqr: ``>=1.46.0,<1.47.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-here: 
   :depends on r-kableextra: 
   :depends on r-knitr: 
   :depends on r-plyr: 
   :depends on r-reticulate: 
   :depends on r-rlang: 
   :depends on r-rmarkdown: 
   :depends on r-scales: 
   :depends on r-stringr: 
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

    pixi global install bioconductor-scifer

to add into an existing workspace instead, run::

    pixi add bioconductor-scifer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-scifer

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-scifer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-scifer:<tag>

(see `bioconductor-scifer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-scifer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scifer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scifer
   :alt:   (downloads)
.. |docker_bioconductor-scifer| image:: https://quay.io/repository/biocontainers/bioconductor-scifer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scifer
.. _`bioconductor-scifer/tags`: https://quay.io/repository/biocontainers/bioconductor-scifer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scifer";
        var versions = ["1.12.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scifer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scifer/README.html
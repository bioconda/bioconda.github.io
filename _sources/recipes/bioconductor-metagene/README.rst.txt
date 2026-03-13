:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metagene'
.. highlight: bash

bioconductor-metagene
=====================

.. conda:recipe:: bioconductor-metagene
   :replaces_section_title:
   :noindex:

   A package to produce metagene plots

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/metagene.html
   :license: Artistic-2.0 | file LICENSE
   :recipe: /`bioconductor-metagene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagene/meta.yaml>`_

   This package produces metagene plots to compare the behavior of DNA\-interacting proteins at selected groups of genes\/features. Bam files are used to increase the resolution. Multiple combination of group of bam files and\/or group of genomic regions can be compared in a single analysis. Bootstraping analysis is used to compare the groups and locate regions with statistically different enrichment profiles.


.. conda:package:: bioconductor-metagene

   |downloads_bioconductor-metagene| |docker_bioconductor-metagene|

   :versions:
      
      

      ``2.31.0-0``,  ``2.30.0-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-1``,  ``2.14.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends on bioconductor-ensdb.hsapiens.v86: ``>=2.99.0,<2.100.0``
   :depends on bioconductor-ensembldb: ``>=2.24.0,<2.25.0``
   :depends on bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-genomicfeatures: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends on bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends on bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends on bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-data.table: 
   :depends on r-ggplot2: 
   :depends on r-gplots: 
   :depends on r-magrittr: 
   :depends on r-matrixstats: 
   :depends on r-purrr: 
   :depends on r-r6: ``>=2.0``
   :depends on r-stringr: 

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

    pixi global install bioconductor-metagene

to add into an existing workspace instead, run::

    pixi add bioconductor-metagene

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-metagene

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-metagene

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-metagene:<tag>

(see `bioconductor-metagene/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-metagene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metagene.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metagene
   :alt:   (downloads)
.. |docker_bioconductor-metagene| image:: https://quay.io/repository/biocontainers/bioconductor-metagene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metagene
.. _`bioconductor-metagene/tags`: https://quay.io/repository/biocontainers/bioconductor-metagene?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metagene";
        var versions = ["2.31.0","2.30.0","2.26.0","2.24.0","2.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metagene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metagene/README.html